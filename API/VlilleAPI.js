export function getAllStations(){
    return fetch('https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&timezone=Europe/Paris&rows=-1')
    .then((response) => response.json())
    .catch((error) => console.log(error))
}