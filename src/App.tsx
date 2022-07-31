import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Calendar } from "./pages/Calendar";
import Main from "./pages/Main";
import GlobalStyle from "./styles/global";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/calendar" element={<Calendar/>} />
          </Routes>

          <GlobalStyle/>
        </div>
      </BrowserRouter>
  );
}

export default App;
