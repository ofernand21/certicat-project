function randomString(length: number): string {
  const characters = '0123456789';

  let randomChar = '';
  for (let i = 0; i < length; i++) {
    randomChar += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return randomChar;
}

export { randomString };