//from binary
function fromBinary() {
  var str = document.getElementById("binary").value;
  let arr = [];
  arr = str.split(" ");
  let newStr = "";
  for (let i = 0; i < arr.length; i++) {
    let tempSlot = parseInt(arr[i], 2);
    newStr += String.fromCharCode(tempSlot);
  }
  document.getElementById("trans_eng").innerHTML = newStr;
  document.getElementById("trans_bin").innerHTML = str;
}
// to binary
function toBinary() {
  let str = document.getElementById("english").value;
  let newStr = "";
  for (let char = 0; char < str.length; char++) {
    let tempStr = parseInt(str.charCodeAt(char), 10).toString(2);
    while (tempStr.length < 8) {
      let tempArr = tempStr.split("");
      tempArr.splice(0, 0, 0);
      tempStr = tempArr.join("");
    }
    newStr = newStr + " " + tempStr;
  }
  console.log(newStr);
  document.getElementById("trans_eng").innerHTML = str;
  document.getElementById("trans_bin").innerHTML = newStr;
}
