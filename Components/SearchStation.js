import React from 'react'
import {View, TextInput, StyleSheet, Text} from 'react-native'
import StationList from './StationList'
import StationMap from './StationMap'
import {getAllStations} from '../API/VlilleAPI'

class SearchStation extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            stations: [],
            selected: 0
        }
        this.stationMap = null
        this.initialData = null
    }

    componentDidMount(){
        console.log('OKOK')
        getAllStations()
        .then((response) => {
            this.initialData = response.records
            this.setState({
            stations: response.records
            })
        })
        this.searchedText = ''
    }

    _searchTextInputChanged(text){
        this.searchedText = text
    }

    _searchStation(){
        let text = this.searchedText.toLowerCase()
        let filteredStations = this.initialData.filter((item) => {
            return item.fields.nom.toLowerCase().match(text)
        })
        if (!text || text === '') {
            this.setState({
                stations: this.initialData
            })
        } else {
            this.setState({
                stations: filteredStations
            })
        }
        
        this.stationMap.goto()
    }

    _selectChanged = (index) => {
        this.setState({
            selected: index
        })
        this.stationMap.goto({
            latitude: this.state.stations[index].fields.localisation[0] || 50.64116,
            longitude: this.state.stations[index].fields.localisation[1] || 3.06376,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        })
        
    }

    render(){
        return (
        <View style={{flex:1}}>
            <StationMap
                ref={(stationMap) => {this.stationMap=stationMap}}
                stations={this.state.stations}
                selected={this.state.selected}
            />
            <TextInput onSubmitEditing={() => this._searchStation()} onChangeText={(text) => this._searchTextInputChanged(text)} style={styles.textinput} placeholder="Nom d'une station"/>
            <Text style={styles.info}>{this.state.stations.length} Résultats</Text>            
            <StationList 
            selectChanged={this._selectChanged}
            selected={this.state.selected}
            stations={this.state.stations}
            />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    textinput: {
        paddingLeft: 5,
        paddingRight: 5,
        height: 40,
        borderColor: '#000000',
        borderWidth: 1
    },
    info: {
        color: '#AAAAAA',
        textAlign: 'center'
    }
})

export default SearchStation