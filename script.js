const isDic = (inputStr) => {
  if (inputStr.length < 11) {
    return false;
  }
  if (inputStr.length > 12) {
    return false;
  }
  const prefix = inputStr.slice(0, 2);
  if (prefix !== 'CZ') {
    return false;
  }
  const digits = inputStr.slice(3);
  const cisla = validator.isInt(digits);
  if (cisla === false) {
    return false;
  }
  return true;
};
const result = isDic('CZ1234567890');
document.body.innerHTML += result;
