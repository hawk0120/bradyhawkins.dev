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
				messageText: string = '';
				user: string = 'Brady'; 

				constructor(private chatService: ChatService) {}

				ngOnInit() {
								this.chatService.getMessages().subscribe((messages: { user: string, text: string }[]) => {
												this.messages = messages;
								});
				}

				sendMessage() {
								if (this.messageText.trim()) {
												// Push user message first

												this.chatService.fetchChatFromApi(this.user, this.messageText).subscribe(
																response => {
																				console.log('Server response:', response);
																				this.messages.push({ user: 'bot', text: response.response });
																},
																error => {
																				console.error('Error:', error);

																				this.messages.push({ user: 'bot', response: 'Error communicating with server.' });
																}
												);
												this.messageText = '';
								}
								}
				}

}

