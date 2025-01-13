import 'leaflet/dist/leaflet.css';

import {
  Circle,
  MapContainer,
  Popup,
  TileLayer,
} from 'react-leaflet';

interface CityServiceMapProps {
  city: {
    name: string;
    lat: number;
    lng: number;
  };
  serviceRadius?: number; // in kilometers
}

export function CityServiceMap({ city, serviceRadius = 30 }: CityServiceMapProps) {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[city.lat, city.lng]}
        zoom={11}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Circle
          center={[city.lat, city.lng]}
          radius={serviceRadius * 1000} // Convert km to meters
          pathOptions={{
            color: '#1a237e',
            fillColor: '#1a237e',
            fillOpacity: 0.2
          }}
        >
          <Popup>
            <div className="text-center">
              <h3 className="font-semibold text-blue-900">Service Area</h3>
              <p className="text-sm text-gray-600">
                Serving {city.name} and surrounding areas within {serviceRadius}km
              </p>
            </div>
          </Popup>
        </Circle>
      </MapContainer>
    </div>
  );
}
