import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../Services/account.service";
import {Router} from "@angular/router";
import {matchValidator} from "./CustomValidators";
import {IRole} from "../../Interfaces/Role";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: UntypedFormGroup;
  success = '';
  submitted = false;

  selectedValue!: string;

  roles: IRole[] = [
    {value: 'Student', viewValue: 'Student'},
    {value: 'Teacher', viewValue: 'Teacher'},
    {value: 'Expert', viewValue: 'Expert'},
  ];

  constructor(private formBuilder: UntypedFormBuilder, private accountService: AccountService, private router: Router) {}



  ngOnInit(): void {
    this.createRegisterForm();
  }

  private createRegisterForm() {
    this.registerForm = new UntypedFormGroup({
      username: new UntypedFormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25), Validators.pattern('^[A-Za-zÀ-ž0-9]+$')]),
      email: new UntypedFormControl('', [Validators.email, Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      role: new UntypedFormControl('', [Validators.required]),
      password: new UntypedFormControl('', [Validators.required, Validators.minLength(8),
        matchValidator('confirmPasswordFormReg', true), Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*?[0-9])(?=.*?[!@#\$&*~]).{8,}$')]),
      confirmPassword: new UntypedFormControl('', [Validators.required, matchValidator('password')])
    })
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.accountService.register(this.registerForm.value).subscribe(response => {
      console.log("Successfully registered.");
      this.router.navigateByUrl('/').then(() => {
        window.location.reload();
      });
    }, error => {
      console.log(error);
    })
  }
}
