import React from 'react'

const img = require('../images/logo.png')

const style = {
    width: '60px',
    height: '50px'
}

const Logo = () => (
    <div>
        <a> <img src={img} alt='logo' style={style} /> </a>
    </div>
)

export default Logo
