const phones = [
    { brand: 'Walton', RAM: 8, camera: 12, price: 15000 },
    { brand: 'Samsung', RAM: 12, camera: 24, price: 85000 },
    { brand: 'Iphone', RAM: 8, camera: 12, price: 95000 },
    { brand: 'Xiaomi', RAM: 8, camera: 12, price: 25000 },
    { brand: 'Oppo', RAM: 8, camera: 12, price: 20000 },
    { brand: 'Realme', RAM: 8, camera: 12, price: 13000 },
];

var cheapestPrice = phones[0].price;
for (let i = 0; i < phones.length; i++) {
    if (cheapestPrice > phones[i].price)
        {
            cheapestPrice = phones[i].price;
            cheapestBrand = phones[i].brand;
        }
}
console.log('brand:', cheapestBrand, 'price:', cheapestPrice);
