import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
				providedIn: 'root',
})
export class ChatService {
				public messages: BehaviorSubject<{ user: string, text: string }[]> = new BehaviorSubject<{ user: string, text: string }[]>([
								{ user: 'Alice', text: 'Hey, how are you?' },
								{ user: 'Bob', text: 'I’m good, thanks! How about you?' },
								{ user: 'Alice', text: 'Doing well! Just working on a project.' },
								{ user: 'Charlie', text: 'Nice! What’s it about?' }
				]);

				private OLLAMA_API_URL = 'http://localhost:3000/api';

								constructor(private http: HttpClient) {}

				sendMessage(user: string, text: string) {
								const currentMessages = this.messages.getValue();
								this.messages.next([...currentMessages, { user, text }]);
				}

				getMessages(): Observable<{ user: string, text: string }[]> {
								return this.messages.asObservable();
				}

				fetchChatFromApi(user: string, text: string) {

								var prompt = this.messages.getValue().toString() + '' + user.toString() + ': ' + text.toString() + '\n' 
								+ `This is our previous chat history. Pretend to be Brady Hawkins. A dad, dev, and fun guy.
												You are a bot on his personal website, you need to any questions professionally and honestly.
												Dont hallucinate please.`;			
								console.log(prompt);


								return this.http.post<{ response: string }>('http://localhost:3000/api', {
												model: 'llama3',
												prompt: prompt
								})

				}

}


