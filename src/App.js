import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect, useState } from "react";
import Country from './components/Country/Country';
import Home from './components/Home/Home';
import ErrorPage from './ErrorPage';


function App() {
  //TODO ---------- States ----------

  const [datas, setDatas] = useState([]);

  const [selection, setSelection] = useState(null);

  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => { setDatas(data); console.log(data); })
      .catch((error) => console.error(error))
  }, [])


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home datas={datas} setSelection={setSelection} darkMode={darkMode} setDarkMode={setDarkMode} />
    },
    {
      path: "/country/:id",
      element: <Country selection={selection} darkMode={darkMode} setDarkMode={setDarkMode} datas={datas} />
    },
    {
      path:"*",
      element: <ErrorPage />
    }
  ])


  //TODO ---------- Affichage ----------
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;