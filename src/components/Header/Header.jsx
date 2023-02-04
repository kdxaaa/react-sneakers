import { NavLink } from "react-router-dom";
import { CartIcon, HeartIcon, OrderIcon,} from "../Icons/Icons";

import Logo from "../Header/Logo/Logo"

const CartButton = () => {
    return (
        <button>
            <CartIcon /> <span>1205 руб.</span>
        </button>
    );
};

const Header = () => {
    return (
        <header className="header">
            <Logo/>
            <nav>
                <CartButton />

                <NavLink to="/favorites">
                    <HeartIcon />
                </NavLink>

                <NavLink to="/orders">
                    <OrderIcon />
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;