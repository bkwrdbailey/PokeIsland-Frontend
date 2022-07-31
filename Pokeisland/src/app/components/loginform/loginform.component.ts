import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {

  constructor(private fb: FormBuilder) { }

  loginForm = this.fb.group({
    username: [''],
    password: ['']
  })

}
