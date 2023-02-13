import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
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
    <Select
      onChange={(event) => {
        setSelectedShipwreckType(event.target.value);
      }}
      label="Shipwreck Type"
      labelId="shipwreck-type-label"
      id="shipwreck-type"
      value={selectedShipwreckType}
    >
      <InputLabel id="shipwreck-type">Shipwreck Type</InputLabel>
      <MenuItem value="Wrecks - Submerged, dangerous">Submerged</MenuItem>
      <MenuItem value="Wrecks - Not Visible">Not Visible</MenuItem>
      <MenuItem value="Wrecks - Submerged, nondangerous">Dangerous</MenuItem>
    </Select>
  );
}

export default App;
