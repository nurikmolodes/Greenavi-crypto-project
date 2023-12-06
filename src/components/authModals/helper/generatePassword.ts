const generatePassword = () => {
  const charset =
    'abcdef+_)*(&^%ghijkl|"?">"|?||>:234"mnop$#%&*(qrstuvwxy234zABCDEF#$@&*(GHIJ123KLMN":>()*&%$OPQRSTUVWXYZ01234567-*/+89';
  let password = '';

  for (let i = 0; i < 9; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
};

export default generatePassword;
