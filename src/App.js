// import logo from './logo.svg';
 import './App.css';
import DataTable from "react-data-table-component";
import {useState} from 'react';
import Count from './Count';
import Essai from './Essai';
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
    { nom: "denoyelle", prenom: "marc", ville: "rivery" },
    { nom: "Lebowski", prenom: "Jeff", ville: "Los Angeles" },
    { nom: "Vega", prenom: "Vincent", ville: "Los Angeles" },
    { nom: "Kiddo", prenom: "Beatrix", ville: "El Paso" },
  ]);
    const age = 20
  let situation = age>18?"majeur":"mineur";
  

  const PI = 3.14;
let count = 9;

if (count < 10) {
  let message = 'Count est inférieur à 10';
  console.log(message);
}

let name = 'denoyelle';
let surname='marc';
let ans = 30;



console.log("Nom  " + name + "    prenom   " +surname+ " age " + ans + "."); 


// console.log(`Je m'appelle ${name} et j'ai ${age} ans.`); 




  
  return (

    
 
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
{situation  }

<Count/>
<Essai />

  

  </div>
  )
}

export default App;
