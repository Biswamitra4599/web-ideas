import { useState, useEffect } from "react";
import LotusLoader from "./LotusLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LotusLoader />}

      <main>
        <h1>My Website</h1>
        <p>Website content goes here...</p>
      </main>
    </>
  );
}

export default App;