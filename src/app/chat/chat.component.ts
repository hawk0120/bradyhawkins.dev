import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: { user: string, text: string }[] = [];
  messageText: string = '';
  user: string = 'User1'; // Can be dynamic in a real app

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getMessages().subscribe((messages: { user: string, text: string }[]) => {
      this.messages = messages;
    });
  }

  sendMessage() {
    if (this.messageText.trim()) {
      this.chatService.sendMessage(this.user, this.messageText);
      this.messageText = '';
    }
  }
}

