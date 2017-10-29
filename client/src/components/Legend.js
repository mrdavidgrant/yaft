import React from 'react';

const Legend = ({data}) => {
    const ulStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        flexWrap: 'wrap'
    }
    const liStyle = {
        listStyle: 'none',
        marginRight: '10px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '250px',
        marginBottom: '5px'
    }
    return (
        <ul style={ulStyle}>
            {data.map(motionColor => {
                const style = {
                    width: '30px',
                    height: '20px',
                    backgroundColor: motionColor.color,
                    display: 'inline-block',
                    marginRight: '5px'
                }
                return <li style={liStyle} ><div style={style}></div>{motionColor.motion}</li>
              })
            }
        </ul>
    )
}

export default Legend