import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link to="/table">Table</Link>

      <Link to="/allcards">All cards</Link>

      <Link to="/carousel">Carousel</Link>
    </nav>
  );
}
export default NavBar;
