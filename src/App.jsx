import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ShipwreckForm from "./components/shipwreck-form";
import { shipwrecksApi } from "./services";

function App() {
  const [data, setData] = useState([]);

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

  return (
    <main>
      <ShipwreckForm
        value={selectedShipwreckType}
        setValue={setSelectedShipwreckType}
      />
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: "100vh",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </main>
  );
}

export default App;
