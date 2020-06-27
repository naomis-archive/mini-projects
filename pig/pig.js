function translatePigLatin() {
  //global variable
  var string = document.getElementById("input").value;
  var str = string.toString();
  var end = false;
  let i = 1;
  //split string into array
  str = str.toLowerCase();
  let mainArray = str.split(" ");
  //split each word into array
  for (let arrPos = 0; arrPos < mainArray.length; arrPos++) {
    let strArray = mainArray[arrPos].split("");
    end = false;
    //strip punctuation
    for (let charPos = 0; charPos < strArray.length; charPos++) {
      if (
        strArray[charPos] == "," ||
        strArray[charPos] == '"' ||
        strArray[charPos] == "'" ||
        strArray[charPos] == "." ||
        strArray[charPos] == "!" ||
        strArray[charPos] == "?"
      ) {
        strArray.splice(charPos, 1);
      }
    }
    //word begins with vowel
    if (
      strArray[0] == "a" ||
      strArray[0] == "e" ||
      strArray[0] == "i" ||
      strArray[0] == "o" ||
      strArray[0] == "u"
    ) {
      strArray.push("w");
      strArray.push("a");
      strArray.push("y");
      mainArray[arrPos] = strArray.join("");
      end = true;
      continue;
    }
    // word begins with consonant, contains vowel
    for (i = 1; i < strArray.length; i++) {
      if (
        strArray[i] == "a" ||
        strArray[i] == "e" ||
        strArray[i] == "i" ||
        strArray[i] == "o" ||
        strArray[i] == "u"
      ) {
        let pushArray = [];
        pushArray = strArray.splice(0, i);
        pushArray = pushArray.join("");
        strArray.push(pushArray);
        strArray.push("a");
        strArray.push("y");
        mainArray[arrPos] = strArray.join("");
        end = true;
        break;
      }
    }
    // word contains no vowel
    if (end == false) {
      strArray.push("a");
      strArray.push("y");
      mainArray[arrPos] = strArray.join("");
    }
  }
  //restringify
  let translation = mainArray.join(" ");
  document.getElementById("entry").innerHTML = string;
  document.getElementById("translation").innerHTML = translation;
}
