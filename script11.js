// . The Coffee Machine:
//     In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay

async function brewCoffee(coffe_type){
    let r = Math.floor(Math.random()*5)
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(coffe_type+" is ready kindly collect it")
        }, r*1000);
    })
}

async function startMakingCoffee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Making your delicious coffee");
            resolve();
        }, 3000);
    });
}

async function main(){
    console.log("Order Confirmed");
    await startMakingCoffee();
    let res_2 = await brewCoffee("Esperesso")
    console.log(res_2);
    console.log("Thanks for choosing us");
}
main()