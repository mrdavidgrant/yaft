import React from 'react'

const img = require('../images/avatar.png')

const style = {
    borderRadius: '50%',
    height: '130px',
    width: '130px'
}

const AvatarImage = () => (
    <div>
        <img src={img} alt='avatar' style={style} /> 
    </div>
)

export default AvatarImage