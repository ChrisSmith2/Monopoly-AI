function createMarker() {
  loadImage('assets/shoe.png', img => {
    image(img, 675, 655, 50, 50);
  });
}

class Marker {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  
  draw() {
    image(shoe, x, y, 50, 50);
  }
}