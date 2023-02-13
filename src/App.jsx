import { useEffect, useState } from "react";
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
    <ShipwreckForm
      value={selectedShipwreckType}
      setValue={setSelectedShipwreckType}
    />
  );
}

export default App;
