import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Pagination = () => {
  return (
    <ReactPaginate
      className={styles.pagination}
      nextLabel={<img width={30} height={30} src={rightArrow} />}
      previousLabel={<img width={30} height={30} src={leftArrow} />}
      pageCount={2}
    />
  );
};

export default Pagination;
