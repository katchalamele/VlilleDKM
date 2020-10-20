import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

class StationItem extends React.Component{

    render(){
        const bgColor = this.props.isSelected ? '#DDDDDD' : '#FFFFFF'
        return (
            <TouchableOpacity 
            style={styles.stationContainer, {backgroundColor: bgColor}}
            onPress={() => this.props.selectListChanged(this.props.station.recordid)}
            >
                <Text style={styles.nom}>{this.props.station.fields.nom}</Text> 
                <Text>
                    Places Disponible: {this.props.station.fields.nbplacesdispo} Vélos disponibles: {this.props.station.fields.nbvelosdispo}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    nom: {
        fontSize: 20
    },
    stationContainer: {
        flex:1,
        marginBottom: 10
    }
})

export default StationItem