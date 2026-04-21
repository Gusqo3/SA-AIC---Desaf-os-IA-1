function palindrome(str) {
  // Eliminar caracteres no alfanuméricos y convertir a minúsculas
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  // Verificar si la cadena limpia es igual a su reverso
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

console.log(palindrome("A man, a plan, a canal, Panama")); // true
console.log(palindrome("racecar")); // true
console.log(palindrome("hello")); // false
console.log(palindrome("No 'x' in Nixon")); // true
console.log(palindrome("12321")); // true
console.log(palindrome("12345")); // false