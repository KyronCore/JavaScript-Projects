function maskEmail(email) {
  const atIndex = email.indexOf("@");

  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  if (username.length <= 2) {
    return username[0] + "*".repeat(username.length - 1) + domain;
  }

  const first = username[0];
  const last = username[username.length - 1];
  const middle = "*".repeat(username.length - 2);

  return first + middle + last + domain;
}

let email = "apple.pie@example.com";

console.log(maskEmail(email));
