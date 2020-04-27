import React, {ReactComponentElement, useEffect, useRef, useState} from 'react';
import './NavbarDropdown.css';
import { ReactComponent as BellIcon } from '../../../src/assets/NavbarAnimation-Icons/bell.svg';
import { ReactComponent as MessengerIcon } from '../../../src/assets/NavbarAnimation-Icons/messenger.svg';
import { ReactComponent as CaretIcon } from '../../../src/assets/NavbarAnimation-Icons/caret.svg';
import { ReactComponent as PlusIcon } from '../../../src/assets/NavbarAnimation-Icons/plus.svg';
import { ReactComponent as CogIcon } from '../../../src/assets/NavbarAnimation-Icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../../src/assets/NavbarAnimation-Icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../../src/assets/NavbarAnimation-Icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../../../src/assets/NavbarAnimation-Icons/bolt.svg';
import { CSSTransition } from 'react-transition-group';

interface NavItemProps {
    children?: ReactComponentElement<any>;
    icon: ReactComponentElement<any>
}
function NavbarDropdown(): JSX.Element {
    return(
        <nav className= "navbar">
            <ul className= "navbar-nav">
                <NavItem icon={<PlusIcon />}/>
                <NavItem icon={<BellIcon />}/>
                <NavItem icon={<MessengerIcon />}/>
                <NavItem icon={<CaretIcon />}>
                    <DropdownMenu/>
                </NavItem>
            </ul>
        </nav>
    )
}

function NavItem(props:NavItemProps) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}
function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(0);
    const dropdownRef = useRef(null);

    useEffect(() => {
        // @ts-ignore
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el:any) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props:any) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="settings">
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        rightIcon={<ChevronIcon />}
                        goToMenu="animals">
                        Animals
                    </DropdownItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h2>My Tutorial</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                    <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                    <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
                    <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

export default NavbarDropdown
