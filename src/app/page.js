'use client';

import styles from "./page.module.css";
import productsData from '../data/products.json';
import { FixedSizeList as List } from 'react-window';
import { useEffect, useState } from 'react';

export default function Home() {
  const { products } = productsData;
  const [windowSize, setWindowSize] = useState({
    width: 1200,
    height: 800
  });

  useEffect(() => {
    // Pencere boyutunu güncelle
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    // İlk yüklemede boyutu al
    handleResize();

    // Pencere boyutu değiştiğinde güncelle
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Her bir satırın yüksekliği
  const ROW_HEIGHT = 60;

  // Tablo başlıkları
  const TableHeader = () => (
    <div className={styles.headerRow}>
      <div className={styles.headerCell}>ID</div>
      <div className={styles.headerCell}>Ürün Adı</div>
      <div className={styles.headerCell}>Marka</div>
      <div className={styles.headerCell}>Fiyat</div>
      <div className={styles.headerCell}>Puan</div>
    </div>
  );

  // Her bir satırın render fonksiyonu
  const Row = ({ index, style }) => {
    const product = products[index];
    return (
      <div className={styles.row} style={style}>
        <div className={styles.cell}>{product.id}</div>
        <div className={styles.cell}>
          <div className={styles.productName}>{product.name}</div>
        </div>
        <div className={styles.cell}>{product.brand}</div>
        <div className={styles.cell}>{product.price}₺</div>
        <div className={styles.cell}>
          <div className={styles.rating}>
            {'★'.repeat(Math.floor(product.rating))}
            {'☆'.repeat(5 - Math.floor(product.rating))}
            <span className={styles.ratingNumber}> ({product.rating})</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <h1>Ürün Listesi ({products.length} Ürün)</h1>
      <div className={styles.gridContainer}>
        <TableHeader />
        <List
          height={Math.min(800, windowSize.height - 200)} // Maksimum 800px veya pencere yüksekliğinden 200px az
          itemCount={products.length}
          itemSize={ROW_HEIGHT}
          width="100%"
          className={styles.gridBody}
        >
          {Row}
        </List>
      </div>
    </div>
  );
}
