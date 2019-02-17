import React from 'react';
import './styles.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container text-center'>
                <span className='text-muted'>
                    <i className='far fa-smile'></i>&nbsp;
                    Made with love by <a href="https://tasoskakour.me" target="_blank" rel="noreferrer noopener">Tasos Kakouris</a>
                </span>
            </div>
        </footer>
    )
}

export default Footer;
