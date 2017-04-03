angular
  .module('storeApp')
  .controller('ProductsController', ProductsController);

function ProductsController() {
  this.products = [
    { name: 'Surface Book', price: '1500.43', dateAdded: '1490929458881'},
    { name: 'MacBook Pro 15"', price: '1800.34', dateAdded: '1490929458881'},
    { name: 'Macbook Pro 13"', price: '1600.28', dateAdded: '1490929458881'},
    { name: 'TI-86', price: '100.43', dateAdded: '1490929458881'},
    {name: 'UE Roll Speaker', price: '90.78', dateAdded: '1490929458881'}
  ];
  this.newProduct = {};
  this.addProduct = addProduct;
  // console.log(this.products)

  function addProduct() {
    // var newDate = Date.now();
    this.products.push({
      name: this.newProduct.name,
      price: this.newProduct.price,
      dateAdded: Date.now()
    });
    console.log(this.products)
    this.newProduct = {};
  }
}
