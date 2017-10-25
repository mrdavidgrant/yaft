import React from 'react'

const style = {
    borderRadius: '50%',
    height: '130px',
    width: '130px'
}

const AvatarImage = ({img}) => (
    <div>
        <img src={img} alt='avatar' style={style} /> 
    </div>
)


export default AvatarImage