// The Asynchronous Shopper:
// Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

async function placeOrder(){
    let r = Math.round(Math.random()*5)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Order confirmed.")
        },r*1000)
    })
    
}

async function main(){
    console.log("Taking order");
   let res= await placeOrder()
   console.log(res);
    console.log("Thanks for shopping with us");
}

main()