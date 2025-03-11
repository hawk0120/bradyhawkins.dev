import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'https://lechat.mistral.ai/v1/chat/completions';
  private apiKey = 'ag:546f031e:20250311:untitled-agent:275ef86d'; // Replace with your actual API key

  constructor(private http: HttpClient) {}

  sendMessage(userMessage: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
    });

    const body = {
      model: 'mistral-7b-instruct', // Adjust model if needed
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: userMessage },
      ],
      temperature: 0.7,
      max_tokens: 200,
    };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}

