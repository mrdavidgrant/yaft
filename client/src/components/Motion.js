import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';

const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      display: 'flex',
      flexWrap: 'nowrap',
      overflowX: 'auto'
    },
    titleStyle: {
      color: 'rgb(0, 188, 212)',
    },
};

// const tilesData = [
//     {
//       img: 'images/grid-list/00-52-29-429_640.jpg',
//       title: 'Breakfast',
//       author: 'jill111',
//     },
//     {
//       img: 'images/grid-list/burger-827309_641.jpg',
//       title: 'Tasty burger',
//       author: 'pashminu',
//     },
//     {
//         img: 'images/grid-list/burger-827309_642.jpg',
//         title: 'Tasty burger',
//         author: 'pashminu',
//     }

// ]

const img = require('../images/fit2.png')

class Motion extends Component {
    constructor(props){
        super(props);
        this.state = {
            motionsForBody: []
        }
    }
    componentWillMount() {
        const { bodyId, data, motionNames, partSelected } = this.props
        const motionsForBody = data.filter(item => item.body_part === partSelected).map(item => ({name: item.name, img}))
        this.setState({motionsForBody})
    }
    render() {
        const { motionState, handleMotionCheck } = this.props
        return (
            <div>
                <h4> 2. CHOOSE MOTION </h4>
                <div style={styles.root}>
                    <GridList style={styles.gridList} cols={2.2}>
                    {this.state.motionsForBody.map((motion, i) => (
                        <GridTile
                            key={i}
                            title={motion.name}
                            actionIcon={
                                <Checkbox
                                    disabled={motionState.checked && i !== motionState.index}
                                    onCheck={(event, isInputChecked) => handleMotionCheck(event, isInputChecked, i, motion.name) } 
                                />}
                            titleStyle={styles.titleStyle}
                            titleBackground="gray"
                        >
                        <img src={motion.img} />
                        </GridTile>
                    ))}
                    </GridList>
            </div>
          </div>
        )
    }
} 

export default Motion;