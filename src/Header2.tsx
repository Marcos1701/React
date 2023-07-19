import React from 'react'


const Header2 = () => {
    const { pathname } = window.location;
    return (
        <header>
            <nav id='navegacao'>
                <ul>
                    <li><a href={pathname === "/produtos" ? "/" : "#"}>Home</a></li>
                    <li><a href={pathname === "/produtos" ? "#" : "/produtos"}>Produtos</a></li>
                </ul>
            </nav>
        </header>
    )
}


export default Header2