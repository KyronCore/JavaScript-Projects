function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  // Find where our input string starts in the alphabet
  const startIndex = alphabet.indexOf(str[0].toLowerCase());

  for (let i = 0; i < str.length; i++) {
    // Compare input letter to the expected alphabet letter at the shifted index
    if (str[i].toLowerCase() !== alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }
  }

  return undefined;
}

// Test Execution
console.log(fearNotLetter("abce")); // Output: "d"
console.log(fearNotLetter("stvw")); // Output: "u"
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // Output: undefined
