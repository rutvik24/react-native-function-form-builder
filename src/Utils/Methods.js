export function getKeyboardType(textType) {
  switch (textType) {
    case 'email':
      return 'email-address';
    case 'number':
      return 'numeric';
    default:
      return 'default';
  }
}

export default validateEmail = email => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};
