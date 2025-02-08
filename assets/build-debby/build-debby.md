---

## Meet Debby: A File-Based Database System  

As a developer, I’ve always appreciated the simplicity and speed of SQLite. But for small projects, I found myself wanting something even simpler—something that didn’t need compilation or a big set of features. So, I built **Debby**: a no-frills, file-based database system that focuses on **simplicity** and **ease of use**.

### What is Debby?  

Debby is a minimal database system that stores data directly in a file. It supports three basic commands:
- **Read**: Loads the entire database into memory for quick access.
- **Write**: Appends new data to the file.
- **Update**: (To be implemented, stay tuned!)

Debby is perfect for small projects where you don’t need the complexity of a full-fledged database but still want structured data storage. 

---

## Why Build Debby?  

Sometimes, I want tools that *just work*. SQLite is great, but even its setup felt like overkill for smaller experiments. I wanted something:
- Lightweight (it’s just a file).
- Simple to use (minimal commands).
- Quick to integrate (no dependencies, just Java).  

Debby lets you hit the ground running, whether you’re prototyping a tool or just need a quick database for testing.

---

## Debby’s Design Philosophy  

Debby is designed around a **command-based architecture**. Here’s how it works:  

1. **User Input**: You enter commands like `READ` or `WRITE some_data`.
2. **Command Handler**: Debby parses the command and delegates it to the appropriate module.
3. **File Operations**: Depending on the command, Debby either reads data from or writes data to its file.

Here’s a quick look at the command system in action:

```java
public class CommandRegistry {
    private final Map<String, Command> simpleCommands = new HashMap<>();
    private final Map<String, ParameterizedCommand> parameterizedCommands = new HashMap<>();

    public CommandRegistry(File file) {
        simpleCommands.put("READ", new ReadCommand(file));
        parameterizedCommands.put("WRITE", new WriteCommand(file));
    }

    public void handleCommand(String input) {
        String[] parts = input.split(" ", 2);
        String commandName = parts[0].toUpperCase();
        String argument = parts.length > 1 ? parts[1] : null;

        if (simpleCommands.containsKey(commandName)) {
            simpleCommands.get(commandName).execute();
        } else if (parameterizedCommands.containsKey(commandName)) {
            if (argument == null) {
                System.out.println("Error: Command '" + commandName + "' requires an argument.");
            } else {
                parameterizedCommands.get(commandName).execute(argument);
            }
        } else {
            System.out.println("Unrecognized command: " + commandName);
        }
    }
}
```

---

## Building the Core  

Let’s dive into one of Debby’s core features: **writing data to a file**. Here’s how it works:  

```java
public class WriteCommand implements ParameterizedCommand {
    private final File file;

    public WriteCommand(File file) {
        this.file = file;
    }

    @Override
    public void execute(String dataToWrite) {
        try (FileWriter writer = new FileWriter(file, true)) {
            writer.write(dataToWrite + System.lineSeparator());
            System.out.println("Successfully wrote to the database: " + dataToWrite);
        } catch (IOException e) {
            System.out.println("Error writing to file: " + e.getMessage());
        }
    }
}
```

It’s straightforward: open the file in append mode, write the data, and confirm success. No frills, no fuss—just results.

---
## Check Out the Source  

You can find the full source code on [GitHub](https://github.com/hawk0120/debby).

I’d love to hear your thoughts, ideas, or use cases for Debby! Let’s keep it simple and keep building.  


