const isPalindrome = require('./palindrome');

test('madam is a palindrome', () => {
  expect(isPalindrome('madam')).toBe(true);
});

test('hello is not a palindrome', () => {
  expect(isPalindrome('hello')).toBe(false);
});
test('A man, a plan, a canal, Panama is a palindrome', () => {
  expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
});
test('No lemon, no melon is a palindrome', () => {
  expect(isPalindrome('No lemon, no melon')).toBe(true);
}); 