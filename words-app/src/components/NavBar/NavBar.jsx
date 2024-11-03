import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../assets/screen-svgrepo-com.svg";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src={logo} alt="Learn Words" />
      </Link>
      <Link to="/">Table</Link>

      <Link to="/allcards">All cards</Link>

      <Link to="/carousel">Carousel</Link>
    </nav>
  );
}
export default NavBar;
