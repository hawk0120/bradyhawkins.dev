import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
	templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  imports: [NgFor, FormsModule],
})
export class ChatComponent implements OnInit {
  messages: { user: string, text: string }[] = [];
  messageText: string = 'Hello!';
  user: string = 'Brady'; // Can be dynamic in a real app

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

