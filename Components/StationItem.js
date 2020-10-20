import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

class StationItem extends React.Component{

    render(){
        const station = this.props.station
        const selectedColor = this.props.isSelected ? '#CCCCCC' : '#FFFFFF'
        const stateColor = station.fields.etat === 'EN SERVICE' ? '#0ccc29' : '#cc0c0c'
        return (
            <View style={[styles.stationContainer, {backgroundColor: selectedColor}]}>   
                    <Text style={styles.nom}>{station.fields.nom}</Text> 
                    <Text>
                        Places Disponible: {station.fields.nbplacesdispo} Vélos disponibles: {station.fields.nbvelosdispo}
                    </Text>
                    <Text style={{right:0, position:'absolute'}}>
                        Etat: <Text style={{color:stateColor, fontWeight:'bold'}}>{station.fields.etat}</Text>
                    </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    nom: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    stationContainer: {
        paddingVertical: 5,
        flexDirection: 'column',
        flex: 1
    }
})

export default StationItem