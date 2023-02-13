import ky from "ky";

export default {
  index() {
    return ky.get("http://localhost:3000/shipfinder").json();
  },
};
