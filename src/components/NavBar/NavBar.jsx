import { Link, NavLink, useLocation } from "react-router-dom";
import "./navbar.css";
import { useContext, useEffect } from "react";
import { cartContext } from "../../context/cartContext";

export default function NavBar() {
  // re-scroll to top cada vez que cambia la URL ("location")
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav>
      <ul className="nav-menu">
        <h2>
          <li>
            <NavLink to="/">FEFERONI'S <br /> PIZZA <br /> 🍕</NavLink>
          </li>
        </h2>
        <li className="nav-item">
          <NavLink className="nav-link" to="/category/Pastas">
            Pastas
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/category/Pizzas">
            Pizzas
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/category/Empanadas">
            Empanadas
          </NavLink>
        </li>
        <CartWidget />
      </ul>
    </nav>
  );
}

function CartWidget() {
  const { countItems } = useContext(cartContext);

  return (
    <Link to="/cart">
      🛒
      {}
      <span>{countItems()}</span>
    </Link>
  );
}
