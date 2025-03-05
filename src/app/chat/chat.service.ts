import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChatService {
				public messages: BehaviorSubject<{ user: string, text: string }[]> = new BehaviorSubject<{ user: string, text: string }[]>([
								{ user: 'Alice', text: 'Hey, how are you?' },
								{ user: 'Bob', text: 'I’m good, thanks! How about you?' },
								{ user: 'Alice', text: 'Doing well! Just working on a project.' },
								{ user: 'Charlie', text: 'Nice! What’s it about?' }
				]);

				constructor() {}

				sendMessage(user: string, text: string) {
								const currentMessages = this.messages.getValue();
								this.messages.next([...currentMessages, { user, text }]);
				}

				getMessages(): Observable<{ user: string, text: string }[]> {
								return this.messages.asObservable();
				}
}

