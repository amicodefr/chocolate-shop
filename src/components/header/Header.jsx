import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems, openCart } from "../../features/cart/cartSlice";
import { FiShoppingCart } from "react-icons/fi";
import "./Header.css"

const Header = () => {

    const cartItems = useSelector(selectCartItems);

// считаем общее количество
const totalCount = cartItems.reduce(
  (sum, item) => sum + item.quantity,
  0
);


  return (
    <nav className="header-nav" >
      <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      <Link to="/menu">Menu</Link>


      <Link to="/cart">
      <div className="cart-icon"
  onClick={() => dispatch(openCart())}
>
  <FiShoppingCart size={26} />

  {totalCount > 0 && (
    <span
    className="cart-badge"
    >
      {totalCount}
    </span>
  )}
</div>
      
      </Link>
    
    </nav>
  );
};

export default Header;
