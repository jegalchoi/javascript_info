//Task #2
function checkAge(age) {
  (age > 18) ? console.log(true) : console.log("Do you have your parents permisssion to access this page?")
};

function checkAge(age) {
  console.log(age > 18 || "Do you have your parents permisssion to access this page?")
};

//Task #3
function min(first, second) {
  if(first < second) {
    return first;
  } else {
    return second;
  }
};

//Task #4
let x = Number(prompt("Provide a value for x"));
let n = Number(prompt("Provide a value for n"));

function pow(x,n) {
  let answer = x;
  for (i = 1; i < n; i++) {
    answer = answer * x
  };
  return answer;
};
console.log(pow(x,n));
