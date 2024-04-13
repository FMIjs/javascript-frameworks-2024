import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export function HashTagsValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

    if(control.value){
      const hashTags = control.value.split(',');
      const invalidHashTags = hashTags.filter((hashTag : string) => !hashTag.startsWith('#'));
      if(invalidHashTags.length){
        return { invalidHashTags: true }
      }

      return null;
    }
    
    return null;
  }
}
