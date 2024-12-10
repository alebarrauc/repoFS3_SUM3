import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class RegisterComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), this.nameValidator]],
      email: ['', [Validators.required, Validators.email]],
      birthdate: ['', [Validators.required, this.ageValidator]],
      password: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(18)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

  nameValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value?.trim();
    if (!value) return null;

    const isValid = /^[a-zA-Z\s]+$/.test(value);
    return isValid ? null : { invalidName: true };
  }

  ageValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;

    const birthdate = new Date(value);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();

    if (
      age < 13 ||
      (age === 13 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))
    ) {
      return { underage: true };
    }
    return null;
  }

  passwordMatchValidator(formGroup: AbstractControl): ValidationErrors | null {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password !== confirmPassword ? { passwordMismatch: true } : null;
  }

  hasErrors(field: string, typeError: string): boolean {
    const control = this.contactForm.get(field);
    return !!control?.hasError(typeError) && control.touched;
  }

  enviar(event: Event): void {
    event.preventDefault();
    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value);
    } else {
      this.contactForm.markAllAsTouched();
      console.error('Formulario inválido');
    }
  }
}
