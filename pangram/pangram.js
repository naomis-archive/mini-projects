function check() {
  const alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const missing = [];
  const str = document.getElementById("str").value.toUpperCase();
  if (!str)
    return (document.getElementById("result").innerText =
      "Please enter a string to check!");
  for (let i = 0; i < alpha.length; i++) {
    if (!str.includes(alpha[i])) missing.push(alpha[i]);
  }
  if (missing.length)
    return (document.getElementById(
      "result"
    ).innerText = `This is not a pangram! It is missing the following letters: ${missing}`);
  return (document.getElementById("result").innerText =
    "This is a pangram! It contains every letter of the alphabet at least once!");
}
