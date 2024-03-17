import React, { useState, useEffect } from 'react';
import { LoadScript } from '@react-google-maps/api';

const GoogleMapsComponent = () => {
  const [mapId, setMapId] = useState('');

  useEffect(() => {
    if (mapId) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      window.initMap = () => {
        const locator = document.querySelector('gmpx-store-locator');
        locator.configureFromQuickBuilder(CONFIGURATION);
      };
    }
  }, [mapId]);

  const handleChange = (e) => {
    setMapId(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter map ID"
        value={mapId}
        onChange={handleChange}
      />
      {mapId && (
        <LoadScript googleMapsApiKey={apiKey}>
          <div style={{ height: '100vh', width: '100%' }}>
            <gmpx-store-locator map-id={mapId}></gmpx-store-locator>
          </div>
        </LoadScript>
      )}
    </div>
    );
}

