import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Orders from "./pages/Orders/Orders";
import Error from "./pages/Error/Error";
import "./App.css";

//fonts
import "./fonts/Poppins-Black.ttf";
import "./fonts/Poppins-BlackItalic.ttf";
import "./fonts/Poppins-Bold.ttf";
import "./fonts/Poppins-BoldItalic.ttf";
import "./fonts/Poppins-ExtraBold.ttf";
import "./fonts/Poppins-ExtraBoldItalic.ttf";
import "./fonts/Poppins-ExtraLight.ttf";
import "./fonts/Poppins-ExtraLightItalic.ttf";
import "./fonts/Poppins-Italic.ttf";
import "./fonts/Poppins-Light.ttf";
import "./fonts/Poppins-LightItalic.ttf";
import "./fonts/Poppins-Medium.ttf";
import "./fonts/Poppins-MediumItalic.ttf";
import "./fonts/Poppins-Regular.ttf";
import "./fonts/Poppins-SemiBold.ttf";
import "./fonts/Poppins-SemiBoldItalic.ttf";
import "./fonts/Poppins-Thin.ttf";
import "./fonts/Poppins-ThinItalic.ttf";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/order" element={<Orders />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
