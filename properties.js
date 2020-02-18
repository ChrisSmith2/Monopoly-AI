class Property {
  constructor(number, marker, baseCost, house, morgage, h1Cost, h2Cost, h3Cost, h4Cost, hotelRent) {
    this.owner = null
    this.location = marker
    this.hotel = false
    this.houseCount = 0
    this.baseRent = baseCost
    this.houseCost = house
    this.morgageCost = morgage
    this.h1Rent = h1Cost
    this.h2Rent = h2Cost
    this.h3Rent = h3Cost
    this.h4Rent = h4Cost
    this.hotelCost = hotelRent
  }
}