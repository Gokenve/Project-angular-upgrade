import { AbstractControl, ValidatorFn } from "@angular/forms";
//? Validator to be used in movies form's year
export function isNotValidYear(): ValidatorFn {
    return (control: AbstractControl) => {
        const isNotValid = control.value > new Date().getFullYear();
        return isNotValid ? {
            isNotValid: true
        } : null;
    };
}