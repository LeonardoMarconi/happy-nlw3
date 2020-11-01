import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
    iconSize:[48,58],
    iconAnchor:[24,58],
    popupAnchor:[170,2],
    iconUrl: mapMarkerImg,
});

export default mapIcon;