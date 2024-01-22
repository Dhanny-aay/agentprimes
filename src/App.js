import Landing from "./pages/landing";
import { Routes, Route, useLocation } from "react-router-dom";
import Legal from "./pages/legal";
import { useEffect } from "react";
import Contact from "./pages/contact";

function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/Policies" element={<Legal/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
