import React from 'react'
import {StyleSheet, FlatList} from 'react-native'
import StationItem from './StationItem' 
import StationMap from './StationMap'

class StationList extends React.Component{

    selectListChanged = (recordid) => {
        const id = this.props.stations.findIndex((item) => item.recordid === recordid)
        this.props.selectChanged(id)
    }

    render(){
        return (
        <FlatList
        style={styles.ListContainer}
        data={this.props.stations}
        keyExtractor={(item) => item.recordid}
        extraData={this.props.stations[this.props.selected]}
        renderItem={({item}) => (
            <StationItem 
            isSelected={item.recordid === this.props.stations[this.props.selected].recordid ? true : false}
            selectListChanged={this.selectListChanged} 
            station={item}
            />
        )}
        />
        )
    }
}

const styles = StyleSheet.create({
    ListContainer: {
        flex:1
    }
})

export default StationList