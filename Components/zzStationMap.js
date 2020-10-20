import React, { Children } from 'react'
import MapView from 'react-native-maps'

class StationMap extends React.Component{

    constructor(props){
        super(props)
        region = {
            latitude: 50.64116,
            longitude: 3.06376,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
        this.map = new MapView({
        style: {flex:1},
        region: region,
        children: this.props.stations.map( station => {
            return (
                <MapView.Marker
                key={station.recordid}
                coordinate={{latitude:station.fields.localisation[0], longitude:station.fields.localisation[1]}}
                title={station.fields.nom}
                description={station.fields.adresse}
                />
            ) 
            /*{
                latitude: station.fields.localisation[0],
                longitude: station.fields.localisation[1],
                title: station.fields.nom,
                subtitle: station.fields.adresse
            }*/
        })
        })
    }
    
    goto(region){
        this.map.animateToRegion(region)
    }

    render(){
        console.log(this.map);
        return this.map.render()
    }
}


export default StationMap
