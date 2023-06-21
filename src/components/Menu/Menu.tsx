import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import './Menu.sass';

const Menu = () => {

    const [opened, setOpened] = useState(false);
    const [menu, setMenu] = useState(false);
    const [hiddenMenu, setHiddenMenu] = useState(false);
    const refLayout = useRef<HTMLDivElement>(null);

    return (
        <div className={"Menu" + (hiddenMenu ? " Menu-active" : '')}>
            <button
                className={"Menu__button" + (opened ? " Menu__button-active" : '')}
                onClick={() => setOpened(p => !p)}
            >
                <div />
            </button>
            <div className={"Menu__list" + (menu ? " Menu__list-active" : '')}>
                <NavLink
                    to={'/'}
                    className={({ isActive }) => isActive ? "Menu__item Menu__item-active" : "Menu__item"}
                    onClick={() => setOpened(false)} >HOME</NavLink>
                <NavLink
                    to={'/skills'}
                    className={({ isActive }) => isActive ? "Menu__item Menu__item-active" : "Menu__item"}
                    onClick={() => setOpened(false)}>SKILLS</NavLink>
                <NavLink
                    to={'/projects'}
                    className={({ isActive }) => isActive ? "Menu__item Menu__item-active" : "Menu__item"}
                    onClick={() => setOpened(false)}>PROJECTS</NavLink>
                <NavLink
                    to={'/about'}
                    className={({ isActive }) => isActive ? "Menu__item Menu__item-active" : "Menu__item"}
                    onClick={() => setOpened(false)}>ABOUT ME</NavLink>
            </div>
            <CSSTransition
                nodeRef={refLayout}
                in={opened}
                timeout={opened ? 500 : 1200}
                classNames="Menu__layout"
                onEnter={() => setHiddenMenu(true)}
                onEntered={() => setMenu(true)}
                onExit={() => setMenu(false)}
                onExited={() => setHiddenMenu(false)}
            >
                <div ref={refLayout} className="Menu__layout" />
            </CSSTransition>
        </div >
    )
}

export default Menu;