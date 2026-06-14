function confirmEnding(str, target) {
  const startIndex = str.length - target.length;
  const endPart = str.substring(startIndex);

  return endPart === target;
}
