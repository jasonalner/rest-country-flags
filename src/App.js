import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Results from "./components/Results";
import { Error } from "./components/Error";
import Country from "./components/Country";

function App() {
  return (
    <div>
    <Header />

    <Routes>
      <Route path='/' element={<Results />}></Route>
      <Route path='/country/:id' element={<Country />} /> 

      <Route path="*" element={<Error />} />

    </Routes>


    </div>
  );
}

export default App;
