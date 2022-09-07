import { REGEX_VALIDATE_ENTRIES } from "../constants";

export const validateUsername = (value: string) => {
  let error;

  if (!value) {
    error = 'Required';
  } 
  
  if (!REGEX_VALIDATE_ENTRIES.test(value)) {
    error = 'Invalid username, enter minimum 6 symbols and 1 digit';
  }
  
  return error;
}

export const validatePassword = (value: string) => {
  let error;

  if (!value) {
    error = 'Required';
  } 
  
  if (!REGEX_VALIDATE_ENTRIES.test(value)) {
    error = 'Invalid password, enter minimum 6 symbols and 1 digit';
  }
  
  return error;
}