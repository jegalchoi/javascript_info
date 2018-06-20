let login = prompt("Who's there?");

if (login == "Admin") {
  let password = prompt("Password?");
  if (password == "TheMaster") {
  alert("Welcome!");
} else if (password == '') {
  alert("Cancelled!");
} else if (password == null){
  alert("Cancelled!");
} else {
  alert("Wrong password.");
}
  } else if (login == '') {
  alert("Cancelled");
} else if (login == null){
  alert("Cancelled");
} else {
  alert("I don't know you.");
}
