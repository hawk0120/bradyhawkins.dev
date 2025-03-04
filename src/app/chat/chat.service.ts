import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  private messages: BehaviorSubject<{ user: string, text: string }[]> = new BehaviorSubject<{ user: string, text: string }[]>([]);

  constructor() {}

  sendMessage(user: string, text: string) {
    const currentMessages = this.messages.getValue();
    this.messages.next([...currentMessages, { user, text }]);
  }

  getMessages(): Observable<{ user: string, text: string }[]> {
    return this.messages.asObservable();
  }
}

