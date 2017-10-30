import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
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


class BodyPart extends Component {
    render() {
        const {bodyParts, bodyState, handleCheck} = this.props
        return (
            <div>
                <h3> CREATE YOUR OWN WORKOUT </h3> 
                <h4> 1. CHOOSE BODY PART </h4>
                <div style={styles.root}>
                    <GridList style={styles.gridList} cols={2.2} >
                    {bodyParts.map((part, i) => (
                        <GridTile
                            key={i}
                            title={part.title}
                            actionIcon={
                                <Checkbox
                                    checked={bodyState.checked}
                                    disabled={bodyState.checked && i !== bodyState.index}
                                    onCheck={(event, isInputChecked) => handleCheck(event, isInputChecked, i) } 
                                />}
                            titleStyle={styles.titleStyle}
                            titleBackground="gray"
                        >
                            <img src={part.img} />
                        </GridTile>
                    ))}
                    </GridList>
                </div>
            </div>
        )
    }
} 

export default BodyPart;