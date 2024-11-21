import axios from "axios";
import { useEffect } from "react";

function App() {
  const fetchProfilesData = async () => {
    const response = await axios.get("http://localhost:3001/profiles");
    console.log(response.data, "response.data");
  };

  useEffect(() => {
    fetchProfilesData();
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
