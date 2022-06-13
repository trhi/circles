var variations = {
  "moves" : {
    "solitaireEnding" : function () {
      return "solitaire";
    },
    "moveRight" : function () { //move right
        this.x = this.x + random(0, 1);
        this.y = this.y + random(-1, 1);
    },
    "moveDown" : function () { //move right
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 0);
    },
    "jitter" : function () { //jitter
      this.x = this.x + random(-1, 1);
      this.y = this.y + random(-1, 1);
    },
    "moveLeft" : function () { //move right
        this.x = this.x + random(1, 0);
        this.y = this.y + random(-1, 1);
    },
    "moveUp" : function () { //move right
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(0, 1);
    },
    "drawing" : function () {
      return "drawing";
    },
    "perlin" : function () {
      let randomXNoise = noise(this.xoff);
      this.xoff += 0.02;
      let randomYNoise = noise(this.yoff);
      this.yoff += 0.01;

      //generate random number based on perlin noise:
      let randomXSpeedFactor = map(randomXNoise, 0, 1, -7, 7);
      let randomYSpeedFactor = map(randomYNoise, 0, 1, -7, 7);

      //makes the particles move MUCH slower
      //effect of this is: that its easier to notice
      //once they start going very quickly towards an attractor
      randomXSpeedFactor = this.factor*randomXSpeedFactor;
      randomYSpeedFactor = this.factor*randomYSpeedFactor;

      this.x += randomXSpeedFactor;
      this.y += randomYSpeedFactor;
      //this.positionVector.add(randomXSpeedFactor, randomYSpeedFactor);

      //finally, don't let the particles go off the canvas:
      this.x = constrain(this.x, 0, width);
      this.y = constrain(this.y, 0, height);
    }
  }
};
