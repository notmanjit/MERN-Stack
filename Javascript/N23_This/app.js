// "this" keyword refers to an object that is executing the current piece of code

const student = {
    name: "monu",
    math: 99,
    eng: 97,
    phy: 80,
    getAvg() {
        console.log(this);
        let avg = (this.math + this.eng + this.phy) / 3;
        console.log(`${this.name} got an average of ${avg}`);
    }
}