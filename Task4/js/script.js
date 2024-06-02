class Uberprice {
    constructor(baseFare, distance, costpermile) {
      this.baseFare = baseFare;
      this.distance = distance;
      this.costpermile = costpermile;
    }
    totalprice(){
      return this.baseFare + (this.distance * this.costpermile)
    }
  }
  let price = new Uberprice(7,50,10);
  console.log(price.totalprice());