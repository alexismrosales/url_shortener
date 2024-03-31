import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import ShortURL from "./components/shortener";
import ShowShorterURL from "./components/showShortenURL";
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ShortURL />} />
          <Route path="/shortenurl" element={<ShowShorterURL />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
