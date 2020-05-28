import Geolocation from '@react-native-community/geolocation'
import {setItem, getItem, deleteItem, getAllItems} from 'react-native-sensitive-info';

// geolocation options
const current_pos_options = {
    timeout: 10000,
    maximumAge: 0,
    enableHighAccuracy: true,
};

const watch_pos_options = {
    timeout: 10000,
    maximumAge: 10,
    enableHighAccuracy: true,
    distanceFilter: 50,
    useSignificantChanges: true,
}

const localStorageOptions = {
    sharedPreferencesName: 'mySharedPrefs',
    keychainService: 'app'
}

function success(pos) {
    const {latitude, longitude} = pos.coords
    const {timestamp} = pos
    setItem(JSON.stringify(timestamp), [latitude, longitude].join(','), localStorageOptions)
    .then(()=>{
        return getAllItems(localStorageOptions)
    })
    .then(allItems => allItems)
    .catch(console.log)
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

// location functions
function start_tracking() {
    return Geolocation.watchPosition(success, error, watch_pos_options)
}

function initial_pos() {
    Geolocation.requestAuthorization()
    Geolocation.getCurrentPosition(success, error, current_pos_options)
}

function stop_tracking() {
    Geolocation.stopObserving()
}

export {start_tracking, initial_pos, stop_tracking, localStorageOptions, watch_pos_options}
