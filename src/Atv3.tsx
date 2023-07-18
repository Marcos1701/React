import React, { FC } from 'react';
import Header2 from './Header2';
import Produtos from './Produtos';
import Home from './Home';


const App = () => {
    const { pathname } = window.location;
    const Component: FC = pathname === "/produtos" ? Produtos : Home;

    return (
        <>
            <Header2 />
            <Component />
        </>
    )
}

export default App;