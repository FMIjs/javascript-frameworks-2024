import { Component, HostListener, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  get canLeave() {
    return this.formSubmitted || !this.form.dirty;
  }
  formSubmitted = false;

  @ViewChild(NgForm) form!: NgForm;

  onSubmit(): void {
    console.log('Form submitted');
    this.formSubmitted = true;
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    if (!this.canLeave) {
      $event.returnValue = true; // Chrome requires this to show the prompt
    }
  }
}
