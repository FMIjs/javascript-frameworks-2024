import { Directive, Input, inject } from '@angular/core';
import {
  AbstractControl,
  NgForm,
  ValidationErrors,
  Validator,
  NG_VALIDATORS,
} from '@angular/forms';
import { matchingFieldValue } from './fns/matching-field-value';

@Directive({
  selector: '[appMatchingField]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatchingFieldDirective,
      multi: true,
    },
  ],
})
export class MatchingFieldDirective implements Validator {
  @Input() appMatchingField!: string;
  form = inject(NgForm);
  validatorChange!: () => void;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return matchingFieldValue(this.appMatchingField)(control);
  }
}
