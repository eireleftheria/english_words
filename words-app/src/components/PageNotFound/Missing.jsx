import { Link } from "react-router-dom";
import styles from "../PageNotFound/Missing.module.css";
import notFoundImg from "../../assets/404.jpg";

function Missing() {
  return (
    <div className={styles.missing_container}>
      <img src={notFoundImg} alt="404 page not found" />
      <Link to="/table">
        <button className={styles.backButton}>
          Вернуться на главную страницу
        </button>
      </Link>
    </div>
  );
}
export default Missing;
