import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username = 'jhean';
  message = "";

  onSubmit(e: Event): void {
    if(this.message === "")
      this.message = "Thank you"
    else
      this.message = ""

    console.log(e);
  }
}
