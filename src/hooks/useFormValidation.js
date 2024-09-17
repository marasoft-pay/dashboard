import { useState } from 'react';

const useFormValidation = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [passwordValid, setPasswordValid] = useState({
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
    isLengthValid: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoginValid, setIsLoginValid] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'password') {
      validatePassword(value);
    } else if (name === 'confirmPassword') {
      validatePassword(formData.password, value);
    }
  };

  const validatePassword = (password, confirmPassword = formData.confirmPassword) => {
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    const isUpperCase = upperCaseRegex.test(password);
    const isLowerCase = lowerCaseRegex.test(password);
    const isNumber = numberRegex.test(password);
    const isSpecialChar = specialCharRegex.test(password);
    const isLengthValid = password.length >= 8;

    const isPasswordValid = isUpperCase && isLowerCase && isNumber && isSpecialChar && isLengthValid;
    const isLoginValid = isLengthValid;
    const isConfirmValid = password === confirmPassword;

    setPasswordValid({
      hasUpperCase: isUpperCase,
      hasLowerCase: isLowerCase,
      hasNumber: isNumber,
      hasSpecialChar: isSpecialChar,
      isLengthValid: isLengthValid,
    });

    setPasswordMatch(isConfirmValid);
    setIsFormValid(isPasswordValid);
    setIsLoginValid(isLoginValid);
  };
  

  return {
    formData,
    passwordValid,
    isFormValid,
    isLoginValid,
    passwordMatch,
    handleChange,
  };
};

export default useFormValidation;
