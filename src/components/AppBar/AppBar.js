import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
} from 'reactstrap';

const AppBar = () => {
    return (
        <div>
            <Navbar color="dark" dark expand="md" style={{ display: 'block', textAlign: 'center' }}>
                <NavbarBrand href="/">My Awesome TODO 🎉</NavbarBrand>
            </Navbar>
        </div>
    )
}

export default AppBar;