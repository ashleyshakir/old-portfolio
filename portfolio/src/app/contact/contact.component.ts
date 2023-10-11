import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contact = {
    email: '',
    firstName: '',
    lastName: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) { }
  
  sendMessage(): void {
    this.http.post('https://formspree.io/f/xzblkzjo', this.contact)
    .subscribe(_ => {
        // Successful submission
        alert('Thank you! Your response was submitted.'); 
        this.contact = { email: '', firstName: '', lastName: '', subject: '', message: '' };
      },
      error => {
        // Handle the error case
        console.error("There was an error sending the message:", error);
        alert('Sorry, there was an error sending your message. Please try again later.');
      }
    );
}

}
