import React from "react";
import "./styles.scss";

enum Orientation { HORIZONTAL, VERTICAL}

/**
 * Simple function to get the current orientation of the device viewing
 * the website. This will then be used for mobile compatibility.
 */
const getOrientation = (): Orientation => {
    if (window) {
        return window.innerWidth > 500 ? Orientation.HORIZONTAL : Orientation.VERTICAL;
    } else {
        return Orientation.HORIZONTAL;
    }
};

const MenuComponent = (): JSX.Element => {
    const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

    const toggleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };

    const MenuIcon = (): JSX.Element => {
        return (
            <div className={"menu-icon"} onClick={toggleMenuOpen} style={{ width: `${menuOpen ? "325px" : "75px"}`}}>
                +
            </div>
        );
    };

    const FullMenu = (): JSX.Element => {
        return (
            <div>
                <MenuIcon/>
                <div className={"main-menu"}>
                    <p>Contact</p>
                    <p>Contact</p>
                    <p>Contact</p>
                    <p>Contact</p>
                    <p>Contact</p>
                </div>
            </div>
        );
    };

    return (
        <div>
            {menuOpen && <FullMenu/> || <MenuIcon/>}
        </div>
    );
};

export default MenuComponent;
