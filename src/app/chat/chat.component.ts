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
  userMessage = '';
  responseMessage = '';

  constructor(private chatService: ChatService) {}

  sendMessage() {
    this.chatService.sendMessage(this.userMessage).subscribe({
      next: (response) => {
        this.responseMessage = response.choices[0].message.content;
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
}
}

