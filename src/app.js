 export  class Cube {
    constructor(length) {
    this.length = length;
    }
    
    getSideLength () {
    return this.length;
    }
    
    getSurfaceArea () {
    return (this.length * this.length) * 6;
    }
    
    getVolume () {
    return Math.pow(this.length,3);
    }
    }
    

    export class Calculator {
      constructor() { this._calculator = 'CALCULATOR' }
      calculate(a, b) { return a + b }
  }
  const calc = Object.create(Calculator.prototype)
  console.log(calc instanceof Calculator) // => true
    // module.exports = {
    // Cube:Cube
    // }
    // module.exports = Cube;

