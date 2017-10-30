import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import _ from 'lodash';

class TemplateDetails extends Component {

    render() {
        const { data, motionslist } = this.props
        let motionSets = []
        if(!_.isEmpty(data)) {
            motionSets = motionslist.map(motion => {
                const setsForEachMotion = data.liftsets.filter(set => set.motion === motion)
                if(!_.isEmpty(setsForEachMotion)) {
                    return {
                        [motion]: setsForEachMotion
                    }
                }
            }).filter(item => item !== undefined )

        }
        return(
            <List>
                <Subheader>Template Details</Subheader>
                {motionSets.map((set, i) => 
                    <ListItem
                        key={i}
                        primaryText={Object.keys(set)[0]}
                        leftIcon={<ContentInbox />}
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        nestedItems={
                            Object.keys(set).map(key => set[key].map((detail, i) =>
                                <ListItem
                                    key={i}
                                    primaryText={`Set: ${i+1}   Reps: ${detail.reps}   weight: ${detail.weight}`}
                                    leftIcon={<ActionGrade />}
                                />)
                            )}
                    />
                )}
            </List>
        )
    }
}

export default TemplateDetails



