import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/hello")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>HireWise AI</h1>

      <h2>{message}</h2>
    </div>
  );
}

export default App;