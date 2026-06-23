function repeatStringNumTimes(str, num){
  let newStr ="";
  if ( num <= 0){
    return "";
  }else {
  for (let i = 0; i < num; i++){
    newStr += str
  }
  console.log(newStr);
  return newStr;
  }
}
repeatStringNumTimes("*", 3)
