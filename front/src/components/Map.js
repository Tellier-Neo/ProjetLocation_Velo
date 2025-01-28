import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/map.css';

const MapSection = () => {
  useEffect(() => {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    const map = L.map(mapContainer).setView([50.07989, 1.823083], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 25,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const popup = L.popup()
      .setLatLng([50.07989, 1.823083])
      .setContent('Vous êtes à la Porte de la Baie de Somme à Abbeville.')
      .openOn(map);

    const onMapClick = (e) => {
      popup
        .setLatLng(e.latlng)
        .setContent("Vous avez cliqué sur la carte à " + e.latlng.toString())
        .openOn(map);
    };

    map.on('click', onMapClick);

    return () => {
      map.off('click', onMapClick);
      map.remove();
    };
  }, []);

  return (
    <div id="map_container">
      <h3>Carte</h3>
      <div id="map" style={{ height: '500px', width: '100%' }}></div>
    </div>
  );
};

export default MapSection;
