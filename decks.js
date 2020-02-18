function chance() {
  chanceDeck = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  return chanceDeck
}

function chest() {
  chestDeck = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  return chestDeck
}

function drawCard(deck) {
  x = Math.floor(Math.random()*15)
  y = 0
  if(deck == chestDeck)
  {
    y = chestDeck[x]
  }
  else {
    y = chanceDeck[x]
  }
  if(deck == chestDeck) {
  switch(y) {
    case 0:
      chestCard0()
      break
    case 1:
      chestCard1()
      break
    case 2:
      chestCard2()
      break
    case 3:
      chestCard3()
      break
    case 4:
      chestCard4()
      break
    case 5:
      chestCard5()
      break
    case 6:
      chestCard6()
      break
    case 7:
      chestCard7()
      break
    case 8:
      chestCard8()
      break
    case 9:
      chestCard9()
      break
    case 10:
      chestCard10()
      break
    case 11:
      chestCard11()
      break
    case 12:
      chestCard12()
      break
    case 13: 
      chestCard13()
      break
    case 14:
      chestCard14()
      break
    case 15:
      chestCard15()
      break
  }
  }
  else {
    switch(y) {
    case 0:
      chanceCard0()
      break
    case 1:
      chanceCard1()
      break
    case 2:
      chanceCard2()
      break
    case 3:
      chanceCard3()
      break
    case 4:
      chanceCard4()
      break
    case 5:
      chanceCard5()
      break
    case 6:
      chanceCard6()
      break
    case 7:
      chanceCard7()
      break
    case 8:
      chanceCard8()
      break
    case 9:
      chanceCard9()
      break
    case 10:
      chanceCard10()
      break
    case 11:
      chanceCard11()
      break
    case 12:
      chanceCard12()
      break
    case 13: 
      chanceCard13()
      break
    case 14:
      chanceCard14()
      break
    case 15:
      chanceCard15()
      break
  }
}
}

function chestCard0() {

}

function chestCard1() {
  
}

function chestCard2() {
  
}

function chestCard3() {
  
}

function chestCard4() {
  
}

function chestCard5() {
  
}

function chestCard6() {
  
}

function chestCard7() {
  
}

function chestCard8() {
  
}

function chestCard9() {
  
}

function chestCard10() {
  
}

function chestCard11() {
  
}

function chestCard12() {
  
}

function chestCard13() {
  
}

function chestCard14() {
  
}

function chestCard15() {
  
}




function chanceCard0() {

}

function chanceCard1() {
  
}

function chanceCard2() {
  
}

function chanceard3() {
  
}

function chanceCard4() {
  
}

function chanceCard5() {
  
}

function chanceCard6() {
  
}

function chanceCard7() {
  
}

function chanceCard8() {
  
}

function chanceCard9() {
  
}

function chanceCard10() {
  
}

function chanceCard11() {
  
}

function chanceCard12() {
  
}

function chanceCard13() {
  
}

function chanceCard14() {
  
}

function chanceCard15() {
  
}