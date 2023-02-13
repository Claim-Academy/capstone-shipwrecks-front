import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";

export default function ShipwreckForm({ value, setValue }) {
  return (
    <form className="flex flex-col gap-y-4 px-4 pt-4">
      <Select
        onChange={(event) => {
          setValue(event.target.value);
        }}
        label="Shipwreck Type"
        labelId="shipwreck-type-label"
        id="shipwreck-type"
        value={value}
      >
        <InputLabel id="shipwreck-type">Shipwreck Type</InputLabel>
        <MenuItem value="Wrecks - Visible">Visible</MenuItem>
        <MenuItem value="Wrecks - Submerged, dangerous">Submerged</MenuItem>
        <MenuItem value="Wrecks - Submerged, nondangerous">Dangerous</MenuItem>
      </Select>

      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
}

ShipwreckForm.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
