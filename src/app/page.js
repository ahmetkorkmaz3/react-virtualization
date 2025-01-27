import styles from "./page.module.css";
import productsData from '../data/products.json';

export default function Home() {
  const { products } = productsData;

  return (
    <div className={styles.container}>
      <h1>Ürün Listesi ({products.length} Ürün)</h1>
      <div className={styles.gridContainer}>
        <div className={styles.headerRow}>
          <div className={styles.headerCell}>ID</div>
          <div className={styles.headerCell}>Ürün Adı</div>
          <div className={styles.headerCell}>Marka</div>
          <div className={styles.headerCell}>Fiyat</div>
          <div className={styles.headerCell}>Puan</div>
        </div>
        <div className={styles.gridBody}>
          {products.map((product) => (
            <div key={product.id} className={styles.row}>
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
          ))}
        </div>
      </div>
    </div>
  );
}
