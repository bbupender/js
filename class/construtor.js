class test{
    constructor(number1,number2)
    {
        this.number1=number1;
        this.number2=number2;

    }
    addition(){
        console.log(this.number1+this.number2);
    }
}
let uppi = new test(10,20);
uppi.addition();