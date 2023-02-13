import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet/Marker";
import ShipwreckForm from "./components/shipwreck-form";
import marker from "./pindrop.svg";
import { shipwrecksApi } from "./services";

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
          center={[-78.8790131, 9.5574865]}
          zoom={3}
          scrollWheelZoom={false}
          style={{
            height: "100vh",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[data[0].latdec, data[0].londec]}
            icon={icon}
            sx={{ fill: "red", stroke: "red", strokeWidth: 2, color: "red" }}
          ></Marker>
        </MapContainer>
      )}
    </main>
  );
}

export default App;
