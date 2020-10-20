import React from 'react'
import MapView from 'react-native-maps'

class StationMap extends React.Component{
    constructor(props){
        super(props)
        this.map = null
    }

    goto(region){
        this.map.animateToRegion(region, 2000)
    }

    render(){
        return (
        <MapView 
        ref={(map) => {this.map=map}}
        style={{flex:1}}
        initialRegion={{
            latitude: 50.64116,
            longitude: 3.06376,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        >
            {this.props.stations.map( station => {
                return (
                <MapView.Marker
                    key={station.recordid}
                    coordinate={{latitude:station.fields.localisation[0], longitude:station.fields.localisation[1]}}
                    title={station.fields.nom}
                    description={station.fields.adresse}
                    pinColor="#ee3331"
                />
                )
            })}
        </MapView>
        )
    }
}

export default StationMap
