import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Subscription } from 'rxjs';

export const matchingFieldValue: (fieldName: string) => ValidatorFn = (
  fieldName: string
) => {
  let targetSubscription: Subscription | null;
  return (control: AbstractControl): ValidationErrors | null => {
    const form = control.parent;
    if (!form) return null;
    const otherControl = form.get(fieldName);
    if (!otherControl) return null;
    if (!targetSubscription) {
      targetSubscription = otherControl.valueChanges.subscribe({
        next: () => control.updateValueAndValidity({ onlySelf: true }),
        complete: () => {
          targetSubscription!.unsubscribe();
          targetSubscription = null;
        },
      });
    }
    return otherControl.value === control.value
      ? null
      : {
          matchField: {
            currentControlValue: control.value,
            otherControlValue: otherControl.value,
          },
        };
  };
};
