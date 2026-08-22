import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { CONTACT_EMAIL, CV_URL, LINKEDIN_URL } from '../../core/app.constants';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {

  private readonly fb = inject(FormBuilder);
   submitted = signal(false);

  readonly contactEmail = CONTACT_EMAIL;
  readonly linkedinUrl = LINKEDIN_URL;
  readonly cvUrl = CV_URL;;

  contactForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);

    return !!control &&
      control.invalid &&
      (control.dirty || control.touched);
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { name, email, subject, message } = this.contactForm.getRawValue();

    const body = `
Name: ${name}
Email: ${email}

${message}
    `.trim();

    const mailtoUrl =
      `mailto:${this.contactEmail}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    this.submitted.set(true);
    this.contactForm.reset();
  }
}
