import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: 700,
      height: 250,
      overflowY: 'auto',
    },
}

const tilesData = [
    {
      img: 'images/grid-list/00-52-29-429_640.jpg',
      title: 'Breakfast',
      author: 'jill111',
    },
    {
      img: 'images/grid-list/burger-827309_640.jpg',
      title: 'Tasty burger',
      author: 'pashminu',
    },
    {
        img: 'images/grid-list/burger-827309_640.jpg',
        title: 'Tasty burger',
        author: 'pashminu',
    }
]


class Template extends Component {
    render() {
        return (
            <div>
                <h2> New Workout </h2>
                <h3> PICK A TEMPLATE </h3> 
                <div style={styles.root}>
                    <GridList
                    cellHeight={150}
                    cols={3}
                    style={styles.gridList}
                    >
                    <Subheader>Choose 1</Subheader>
                    {tilesData.map((tile) => (
                        <GridTile
                        key={tile.img}
                        title={tile.title}
                        subtitle={<b>Template Description</b>}
                        >
                        <img src={tile.img} />
                        </GridTile>
                    ))}
                    </GridList>
                </div>
                
            
    
            </div>
        )
    }
} 

export default Template;



