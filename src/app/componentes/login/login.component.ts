import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private logins: LoginService, private router:Router)  { }
  loginForm: FormGroup
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''

    })
  }

  loguear() {

    const { username, password } = this.loginForm.value

    this.logins.login(username, password).subscribe(respuesta => {
    
      localStorage.setItem('ACCESS_TOKEN', respuesta.access_token)
      this.router.navigate([''])
    })
  }

}
