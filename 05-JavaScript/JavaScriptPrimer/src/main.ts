// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
// let myFunction = function (){
//   console.log("Hey");
// }
// console.log("Hello World");
// myFunction();

let products = [
  {name: "Hat", price: 24.5, stock:10},
  {name: "Kayak", price: 289.99, stock:1},
  {name: "Soccer Ball", price: 10, stock:0},
  {name: "Running Shoes", price: 116.50, stock: 20}
];

let totalValue = products
.filter(item => item.stock > 0)
.reduce((prev,item) => prev + (item.price * item.stock), 0);

console.log("Total value: $" + totalValue.toFixed(2));
