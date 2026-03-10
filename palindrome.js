function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

module.exports = isPalindrome;