import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  spinner: Boolean = false;
  contactForm: FormGroup;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      message: new FormControl(''),
      _captcha: new FormControl('false'),
      _autoresponse: new FormControl('Thank You for contacting us. We will get back to you shortly')
    })
  }

  onSubmit() {
    this.spinner = true;
    console.log(this.contactForm.value);
    this.http.post("https://formsubmit.co/balinenis540@gmail.com", this.contactForm.value).subscribe(
      (res) => console.log("res"),
      (err) => {
        this.spinner = false;
        alert("Thank you for writing to us. We will get back to you soon");
        this.contactForm.reset();
      },
      () => console.log("completed")
    )
  }
}
