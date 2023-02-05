import  products  from './products'

let shipping:number;
let taxPercent:number;
let taxTotal: number;
let total:number;
let shippingAddress:string = 'New York';
const productName: string = 'fanny pack';

let discountCity:string = 'New York';
let pattern = /New York/;
//Utilising Array.prototype.find()
let product = products.find(e => e.name === productName);

// console.log(product)

// You need to guarantee that the product object is defined at the time you're trying to acess its properties
if(product){

  

  if(shippingAddress.match(pattern)){
    taxPercent = 0.1;
  }
  else{
    taxPercent = 0.5;
  }
  if(Number(product.price) > 25){
    shipping = 0;
    // console.log(`Your shipping cost will be ${shipping}`)
  }
  else{
    shipping = 5;
  }
  if(product.preOrder === 'true'){
    // console.log('Your order will be shipped')
  }
  taxTotal = Number(product.price) * taxPercent;
  total = Number(product.price) + taxTotal + shipping;

console.log(`Product name: ${product.name}\nShipping address: ${shippingAddress}\nPrice: ${product.price}\nTax total: ${taxTotal}\nShipping: ${shipping}\nTotal: ${total}`)
}

