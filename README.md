# Virtualization List Demo

Bu proje, büyük veri setleriyle çalışırken liste performansını karşılaştırmak için oluşturulmuş bir demo uygulamasıdır. Proje, aynı veri setini iki farklı yaklaşımla göstermektedir:
1. Standart liste görünümü (main branch)
2. React Window ile virtualize edilmiş liste görünümü (virtualized branch)

## 🌟 Özellikler

### Main Branch
- 10.000 ürünlük statik veri seti
- Grid tabanlı tablo görünümü
- Sıralama ve filtreleme yok
- Tüm veriler aynı anda DOM'a yüklenir

### Virtualized Branch
- Aynı veri seti (10.000 ürün)
- React Window ile virtualization uygulanmış
- Sadece görünür alandaki öğeler render edilir
- Geliştirilmiş scroll performansı
- Özelleştirilmiş scrollbar tasarımı

## 💻 Kurulum

```bash
# Projeyi klonlayın
git clone https://github.com/your-username/virtualization-list.git

# Proje dizinine gidin
cd virtualization-list

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

## 🔄 Branch'ler Arası Geçiş

```bash
# Standart liste görünümü için
git checkout main

# Virtualized liste görünümü için
git checkout virtualized
```

## 📊 Performans Karşılaştırması

### Main Branch (Standart Liste)
- İlk yüklenme süresi: Daha yüksek
- Memory kullanımı: Yüksek
- DOM node sayısı: 100.000+ (tüm liste öğeleri)
- Scroll performansı: Düşük

### Virtualized Branch
- İlk yüklenme süresi: Düşük
- Memory kullanımı: Düşük
- DOM node sayısı: ~20-30 (sadece görünür öğeler)
- Scroll performansı: Yüksek

## 📜 Lisans

MIT License - daha fazla detay için [LICENSE](LICENSE) dosyasına bakın.
