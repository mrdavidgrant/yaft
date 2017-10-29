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


class Motion extends Component {
    render() {
        return (
            <div>
                <h3> CREATE YOUR OWN WORKOUT </h3> 
                <h4> 1. CHOOSE MOTION </h4>
                <div style={styles.root}>
                    <GridList
                    cellHeight={150}
                    cols={3}
                    style={styles.gridList}
                    >
                    <Subheader>Step 1</Subheader>
                    {tilesData.map((tile) => (
                        <GridTile
                        key={tile.img}
                        title={tile.title}
                        subtitle={<span><b>{tile.author}</b></span>}
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

export default Motion;