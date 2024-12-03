export const checkValidData = (name, email, password) => {
  const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const checkPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/.test(
    password
  );
  const checkName = /^[a-zA-Z]+$/.test(name)

  if (!checkEmail && !checkPassword && !checkName) return 'Name, Email & Password are Incorrect';
  if (!checkEmail) return 'Email is Incorrect, Please check !';
  if (!checkPassword) return 'Password is Incorrect, Please check !';
  if (!checkName) return 'Enter the correct name !';
  
};
