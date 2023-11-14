// import logo from './logo.svg';
// import './App.css';
import DataTable from "react-data-table-component";
import {useState} from 'react';
function App() {
  const columns = [
    {
      name: <b>Nom</b>,
      selector: (row) => row.nom,
      sortable: true,
    },
    {
      name: <b>Prenom</b>,
      selector: (row) => row.prenom,
      sortable: true,
    },
    {
      name: <b>Ville</b>,
      selector: (row) => row.ville,
      sortable: true,
    }
  ];
  const [data, setData] = useState([
    { nom: "Booth", prenom: "Cliff", ville: "Hollywood" },
    { nom: "Lebowski", prenom: "Jeff", ville: "Los Angeles" },
    { nom: "Vega", prenom: "Vincent", ville: "Los Angeles" },
    { nom: "Kiddo", prenom: "Beatrix", ville: "El Paso" },
  ]);
  return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  <div >
    <p>denoyelle</p>
    <p>marc</p>
    <ol>
    <li>alligator</li>
    <li>snake</li>
    <li>lizard</li>
  </ol>

  <DataTable
    columns={columns}
    data={data}
    defaultSortFieldId={1}
/>



  </div>
  )
}

export default App;
