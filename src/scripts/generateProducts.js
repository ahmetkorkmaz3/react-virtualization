const fs = require('fs');
const path = require('path');

function generateProducts() {
  // JSON dosyasını oku
  const jsonPath = path.join(__dirname, '../data/products.json');
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const { adjectives, productTypes, brands, features } = data.metadata;

  const products = [];
  const totalProducts = 10000;

  for (let i = 1; i <= totalProducts; i++) {
    const randomBrand = brands[Math.floor(Math.random() * brands.length)];
    const randomAdjective1 = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomAdjective2 = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomType = productTypes[Math.floor(Math.random() * productTypes.length)];
    const randomFeature1 = features[Math.floor(Math.random() * features.length)];
    const randomFeature2 = features[Math.floor(Math.random() * features.length)];
    
    const productName = `${randomBrand} ${randomAdjective1} ${randomAdjective2} ${randomType} - ${randomFeature1} & ${randomFeature2} Özellikli 2024 Model`;
    const basePrice = Math.random() * 10000 + 1000;
    
    products.push({
      id: i,
      name: productName,
      price: basePrice.toFixed(2),
      brand: randomBrand,
      rating: (Math.random() * 5).toFixed(1)
    });

    // Her 10000 üründe bir ilerleme göster
    if (i % 10000 === 0) {
      console.log(`${i} ürün oluşturuldu...`);
    }
  }

  // Metadata'yı koru ama products'ı güncelle
  data.products = products;

  // JSON dosyasını güncelle
  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
  console.log(`Toplam ${totalProducts} ürün oluşturuldu ve kaydedildi.`);
}

generateProducts(); 