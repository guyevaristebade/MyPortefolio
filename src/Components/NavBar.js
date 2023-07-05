import React, {useState} from'react'

const NavBar = () => {

    const [showMenu, setShowMenu] =useState(false)
    const handlerShowMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <header className="navbar navbar-menu">
            <h1 className="navbar-logo">Guy</h1>
            <nav className={`${showMenu ? 'navbar-nav mobile-menu' : 'navbar-nav'}`}>
                <ul className="nav-list">
                    <li className="nav-item">
                        <span className="material-symbols-outlined">
                        home
                        </span>
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <span className="material-symbols-outlined">
                        person
                        </span>
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <span className="material-symbols-outlined">
                        badge
                        </span>
                        <a className="nav-link" href="/projet">Projets</a>
                    </li>
                    <li className="nav-item">
                        <span className="material-symbols-outlined">
                        dvr
                        </span>
                        <a className="nav-link" href="/resume">Resume</a>
                    </li>
                </ul>
            </nav>
            <div onClick={handlerShowMenu}>
                {showMenu ? <span className="material-symbols-outlined responsive-menu">
                    close
                </span> : <span className="material-symbols-outlined responsive-menu">
                    menu
                </span>}
            </div>
        </header>
    )
}

export default NavBar