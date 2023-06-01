import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MyValidatorsService {

  constructor() { }

  public getValidatorErrorMessage(fieldName:string, error:ValidationErrors){
    if (error['required']) {
      return fieldName + " is required";
    }else if (error['minlength']) {
      return fieldName + " should hava at least " + error['minlength']['requiredLength'] + "Characters";
    }else if (error['min']) {
      return fieldName + " should have min value " + error['min']['min'];
    }else if (error['email']) {
      return fieldName + " should be an email address";
    }else return "";
  }

}
