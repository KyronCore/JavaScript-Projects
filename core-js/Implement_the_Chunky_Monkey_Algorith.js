function chunkArrayInGroups(arr, num) {
  const arrDM = [];

  for (let i = 0; i < arr.length; i += num) {
    arrDM.push(arr.slice(i, i + num));
  }

  return arrDM;
}
