function randomRoll () {
  return Math.floor(Math.random()*6) + 1
}

function createDice () {
  fill('white')
  stroke('black')
  strokeWeight(3)
  square(270, 350, 80, 20)
  square(400, 350, 80, 20)
  x = randomRoll()
  y = randomRoll()
  total = x + y
  switch(x) {
    case 1:
      rolled1(1)
      break
    case 2:
      rolled2(1)
      break
    case 3:
      rolled3(1)
      break
    case 4:
      rolled4(1)
      break
    case 5:
      rolled5(1)
      break
    case 6:
      rolled6(1)
      break
  }
  switch(y) {
    case 1:
      rolled1(2)
      break
    case 2:
      rolled2(2)
      break
    case 3:
      rolled3(2)
      break
    case 4:
      rolled4(2)
      break
    case 5:
      rolled5(2)
      break
    case 6:
      rolled6(2)
      break
  }
  return [total, x, y]
}

function rolled1 (die) {
  fill('black')
  noStroke()
  if(die == 1) {
    circle(310, 390, 12)
  }
  else {
    circle(440, 390, 12)
  }
}

function rolled2 (die) {
  fill('black')
  noStroke()
  if(die == 1) {
    circle(331, 411, 12)
    circle(289, 369, 12)
  }
  else {
    circle(419, 369, 12)
    circle(461, 411, 12)
  }
}

function rolled3 (die) {
  fill('black')
  noStroke()
  if(die == 1) {
    circle(331, 411, 12)
    circle(289, 369, 12)
    circle(310, 390, 12)
  }
  else {
    circle(419, 369, 12)
    circle(461, 411, 12)
    circle(440, 390, 12)
  }
}

function rolled4 (die) {
  fill('black')
  noStroke()
  if(die == 1) {
    circle(331, 411, 12)
    circle(289, 369, 12)
    circle(289, 411, 12)
    circle(331, 369, 12)
  }
  else {
    circle(419, 369, 12)
    circle(461, 411, 12)
    circle(461, 369, 12)
    circle(419, 411, 12)
  }
}

  function rolled5 (die) {
  fill('black')
  noStroke()
  if(die == 1) {
    circle(331, 411, 12)
    circle(289, 369, 12)
    circle(289, 411, 12)
    circle(331, 369, 12)
    circle(310, 390, 12)
  }
  else {
    circle(419, 369, 12)
    circle(461, 411, 12)
    circle(461, 369, 12)
    circle(419, 411, 12)
    circle(440, 390, 12)
  }
}

function rolled6 (die) {
  fill('black')
  noStroke()
  if(die == 1) {
    circle(331, 411, 12)
    circle(289, 369, 12)
    circle(289, 411, 12)
    circle(331, 369, 12)
    circle(331, 390, 12)
    circle(289, 390, 12)
  }
  else {
    circle(419, 369, 12)
    circle(461, 411, 12)
    circle(461, 369, 12)
    circle(419, 411, 12)
    circle(419, 390, 12)
    circle(461, 390, 12)
  }
}

// double(input) {
//   x = randomRoll()
//   y = randomRoll()
//   input = input + x + y
//   switch(x) {
//     case 1:
//       rolled1(1)
//       break
//     case 2:
//       rolled2(1)
//       break
//     case 3:
//       rolled3(1)
//       break
//     case 4:
//       rolled4(1)
//       break
//     case 5:
//       rolled5(1)
//       break
//     case 6:
//       rolled6(1)
//       break
//   }
//   switch(y) {
//     case 1:
//       rolled1(2)
//       break
//     case 2:
//       rolled2(2)
//       break
//     case 3:
//       rolled3(2)
//       break
//     case 4:
//       rolled4(2)
//       break
//     case 5:
//       rolled5(2)
//       break
//     case 6:
//       rolled6(2)
//       break
//   }
//   return [input, x, y]
// }