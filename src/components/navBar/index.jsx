import React, { useState } from "react";
import { Link , NavLink} from "react-router-dom";
import {  FaBars } from 'react-icons/fa'
import logo from '../../images/logo.png'
import { HiX } from 'react-icons/hi'
import navMenus from "./config";
import './styles.scss';

const Navbar = () => {

    // var isActive = this.context.router.route.location.pathname === this.props.to;
    // var className = isActive ? 'active' : '';

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    }


    return (
        <div className="nav">
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo">
                        {/* <FaReact size={30} /> */}
                        <img src={logo} alt="logo" />
                    </Link>
                    <ul onClick={handleClick} className={click ? "navbar__container__menu active" : "navbar__container__menu"}>
                        {navMenus.map((item, key) => (
                            <li key={key} className="navbar__container__menu__item">
                                {/* <Link to={item.to}   activeClassName="active"> */}
                                <NavLink to={item.to}   className={ ({isActive}) => "navbar__container__menu__item__links " + (isActive ? "active" : "")}>
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {
                            click ? <HiX size={30} /> : <FaBars size={30} />
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;