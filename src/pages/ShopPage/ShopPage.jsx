import React from "react";
import styles from "./ShopPage.module.css";
import Pagination from "../../components/Pagination/Pagination";

const ShopPage = () => {
  return (
    <div className={styles.ShopPage}>
      <div className={styles.bText}>Магазин</div>
      <div className={styles.linkToThisPage}>
        Главная <span className={styles.defis}>—</span>{" "}
        <span className={styles.opacityText}>Магазин</span>
      </div>
      <div className={styles.categories_row}>
        <div className={styles.category} id={styles.activeCategory}>
          <button>Все</button>
        </div>
        <div className={styles.category}>
          <button>Пальто</button>
        </div>
        <div className={styles.category}>
          <button>Пальто</button>
        </div>
        <div className={styles.category}>
          <button>Кардиганы</button>
        </div>
        <div className={styles.category}>
          <button>Толстовки</button>
        </div>
      </div>
      <div className={styles.countOfVisibleItems}>
        Показано: 9 из 12 товаров
      </div>
      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.item_img}>
            <img src="" alt="" />
          </div>
          <div className={styles.item_name}>Футболка USA</div>
          <div className={styles.item_priceRow}>
            <div className={styles.priceRow_oldPrice}>$229</div>
            <div className={styles.priceRow_newPrice}>$129</div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.item_img}>
            <img src="" alt="" />
          </div>
          <div className={styles.item_name}>Купальник Glow</div>
          <div className={styles.item_priceRow}>
            <div className={styles.priceRow_newPrice}>$129</div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.item_img}>
            <img src="" alt="" />
          </div>
          <div className={styles.item_name}>Свитшот Sweet Shot</div>
          <div className={styles.item_priceRow}>
            <div className={styles.priceRow_newPrice}>$129</div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.item_img}>
            <img src="" alt="" />
          </div>
          <div className={styles.item_name}>Футболка USA</div>
          <div className={styles.item_priceRow}>
            <div className={styles.priceRow_oldPrice}>$229</div>
            <div className={styles.priceRow_newPrice}>$129</div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.item_img}>
            <img src="" alt="" />
          </div>
          <div className={styles.item_name}>Купальник Glow</div>
          <div className={styles.item_priceRow}>
            <div className={styles.priceRow_newPrice}>$129</div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.item_img}>
            <img src="" alt="" />
          </div>
          <div className={styles.item_name}>Свитшот Sweet Shot</div>
          <div className={styles.item_priceRow}>
            <div className={styles.priceRow_newPrice}>$129</div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.item_img}>
            <img src="" alt="" />
          </div>
          <div className={styles.item_name}>Футболка USA</div>
          <div className={styles.item_priceRow}>
            <div className={styles.priceRow_oldPrice}>$229</div>
            <div className={styles.priceRow_newPrice}>$129</div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.item_img}>
            <img src="" alt="" />
          </div>
          <div className={styles.item_name}>Купальник Glow</div>
          <div className={styles.item_priceRow}>
            <div className={styles.priceRow_newPrice}>$129</div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.item_img}>
            <img src="" alt="" />
          </div>
          <div className={styles.item_name}>Свитшот Sweet Shot</div>
          <div className={styles.item_priceRow}>
            <div className={styles.priceRow_newPrice}>$129</div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.item_img}>
            <img src="" alt="" />
          </div>
          <div className={styles.item_name}>Футболка USA</div>
          <div className={styles.item_priceRow}>
            <div className={styles.priceRow_oldPrice}>$229</div>
            <div className={styles.priceRow_newPrice}>$129</div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.item_img}>
            <img src="" alt="" />
          </div>
          <div className={styles.item_name}>Купальник Glow</div>
          <div className={styles.item_priceRow}>
            <div className={styles.priceRow_newPrice}>$129</div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.item_img}>
            <img src="" alt="" />
          </div>
          <div className={styles.item_name}>Свитшот Sweet Shot</div>
          <div className={styles.item_priceRow}>
            <div className={styles.priceRow_newPrice}>$129</div>
          </div>
        </div>
      </div>
      <div className={styles.countOfVisibleItems}>
        Показано: 9 из 12 товаров
      </div>
      <Pagination currentPage={1} onChangePage={() => {}}/>
    </div>
  );
};

export default ShopPage; 
