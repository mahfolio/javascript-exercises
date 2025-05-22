const fibonacci = function(position) {
  let prevNum = 0;
  let num = 1;
  let nextNum = prevNum + num;

  position = Number(position);

  if (position < 0) {
    nextNum = "OOPS";
  }

  switch (position) {
    case 0:
      nextNum = 0;
      break;

    case 1:
    case 2:
      nextNum = 1;
      break;

    default:
      break;
  }

  for (let i = 3; i <= position; i++) {
    prevNum = num;
    num = nextNum;
    nextNum = prevNum + num;
  }

  return nextNum;
};

// Do not edit below this line
module.exports = fibonacci;