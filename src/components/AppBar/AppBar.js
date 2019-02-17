import React from 'react';
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';
import './styles.css'

const AppBar = () => {
    return (
        <div>
            <Navbar color="dark" dark expand="md" style={{ display: 'block', textAlign: 'center' }}>
                <NavbarBrand href="/">
                    My Awesome TODO{' '}
                    <i className='fas fa-check bounceIn slideDown'></i>
                </NavbarBrand>
            </Navbar>
        </div>
    )
}

export default AppBar;