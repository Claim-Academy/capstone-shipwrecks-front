import { useEffect, useState } from "react";
import { shipwrecksApi } from "./services";

function App() {
  const [data, setData] = useState([]);

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
    <ul>
      {/* Need braces around JS code in JSX */}
      {data.map((shipwreck) => {
        return (
          <li key={shipwreck._id}>
            {shipwreck.latdec}, {shipwreck.londec}
          </li>
        );
      })}
    </ul>
  );
}

export default App;
