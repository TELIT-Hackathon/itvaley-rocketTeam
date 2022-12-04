import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../Services/account.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // @ts-ignore
  loginForm: UntypedFormGroup;
  success = '';
  submitted = false;

  constructor(private accountService: AccountService, private router: Router, private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = new UntypedFormGroup({
      username: new UntypedFormControl('', [Validators.required, Validators.maxLength(25), Validators.pattern('^[A-Za-zÀ-ž0-9]+$')]),
      password: new UntypedFormControl('', Validators.required)
    })
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.accountService.login(this.loginForm.value).subscribe(() => {
      console.log('user logged in');
      console.log(localStorage.getItem('token'));
      this.router.navigateByUrl('/').then(() => {
        window.location.reload();
      });
    }, error => {
      console.log(error);
    });
  }
}
