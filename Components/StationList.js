import React from 'react'
import {StyleSheet, FlatList, TouchableHighlight, View, Platform, TouchableOpacity} from 'react-native'
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
        ItemSeparatorComponent={ Platform.OS !== 'android' && (({ highlighted }) => ( <View style={styles.separator}/> ))}
        style={styles.listContainer}
        data={this.props.stations}
        keyExtractor={(item) => item.recordid}
        extraData={this.props.stations[this.props.selected]}
        renderItem={({item, index}) => (
        <TouchableOpacity
            onPress={() => this.selectListChanged(item.recordid)}
        >
            <StationItem 
                isSelected={index === this.props.selected ? true : false}
                station={item}
             />
      </TouchableOpacity>
            
        )}
        />
        )
    }
}

const styles = StyleSheet.create({
    listContainer: {
        flex:1
    },
    separator: {
        height: 1,
        backgroundColor: '#000000'
    }
})

export default StationList