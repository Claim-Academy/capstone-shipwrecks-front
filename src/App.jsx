import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet/Marker";
import ShipwreckForm from "./components/shipwreck-form";
import marker from "./pindrop.svg";
import { shipwrecksApi } from "./services";

const renderMarkers = ({ data, selectedShipwreckType, icon }) => {
  return data
    .filter((shipwreck) => shipwreck.feature_type === selectedShipwreckType)
    .map((shipwreck) => {
      return (
        <Marker
          key={shipwreck._id}
          position={[shipwreck.latdec, shipwreck.londec]}
          icon={icon}
        ></Marker>
      );
    });
};

function App() {
  const [data, setData] = useState(null);

  // This is the state that will be updated when the user selects a shipwreck type
  const [selectedShipwreckType, setSelectedShipwreckType] = useState(
    "Wrecks - Submerged, dangerous"
  );

  useEffect(() => {
    shipwrecksApi
      .index()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  const icon = new Icon({
    iconUrl: marker,
    iconSize: [24, 24],
  });

  return (
    <main>
      <ShipwreckForm
        value={selectedShipwreckType}
        setValue={setSelectedShipwreckType}
      />
      {data && (
        <MapContainer
          center={[0, 0]}
          zoom={2}
          scrollWheelZoom={false}
          style={{
            height: "100vh",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {renderMarkers({ data, selectedShipwreckType, icon })}
        </MapContainer>
      )}
    </main>
  );
}

export default App;
