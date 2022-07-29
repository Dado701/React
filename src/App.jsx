// import e from "express";
// import { useEffect, useState } from "react";
import { useEffect,useState } from "react";
import "./App.css";


// const App = () => {
//   const [users, setUsers] = useState([]);
// let searchvalue="";

//   function getData(user) {
//     fetch(`https://api.github.com/users/${user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setFacts(data)
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// useEffect(()=>{
//  getData();
// },[]
// );
  
//   return (
//     <div>
//      <input type="text"
//      onChange={(e)={
//       searchvalue= e.target.value;
//      }} />

//      <button onClick={
//       getData(searchvalue)
//      }>Sumbit</button>

//      <h1>{user?.name}</h1>
//      <img src={user?.avatar_url}  />
//     </div>
//   );
// };

// export default App;

// import { useEffect, useState } from "react";
// import "./App.css";

// export default function App(){
// const [users, setUsers] = useState([]);



// return(
//  <div>
//   <input type="text" placeholder="First Name"/>
//   <input type="text" placeholder="Last Name"/>
//   <input type="text" placeholder="Email"/>

//   <button onClick={
//    ()=>{
//     console.log(object);
//    }
//   }>Register</button>
//  </div>
// )
// }


// import DessertCard from "./DessertCard"

// export default function App(){
//  let inputValue="";
//  const [dessert,setDessert]=useState([])
//  const getDessert = async (size)=>{
//   const res = await fetch(
//    `https://random-data-api.com/api/dessert/random_dessert?size=${size}`
//   );
//   const data = await res.json();
//   setDessert(data);
//   console.log(data);
//  }
//  useEffect(()=>{
//   getDessert(100);
//  },[])
//  return(
//   <div>
//   <input type="text" onChange={(el)=>{
//    inputValue=el.target.value;
//   }}/>
//   <button onClick={()=>{
//    getDessert(inputValue)
//   }}>Submit</button>
//    {dessert.map((dessert)=>{
//     return <DessertCard des={dessert} key={dessert.uid}/>
//    })}
//   </div>
//  )
 

// }




export default function App(){
  const [calc,setCalc]= useState("");
  const [res,setRes]= useState("");
  const ops=[`/`,`*`,`+`,`-`,`.`];

  const UpdateCalc = value=>{
    if(
      ops.includes(value) && calc==="" ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    )
      {
        return;
      }
    setCalc(calc+value);
  }
  const calculate =()=>{
    setCalc(eval(calc.toString()))
  }
  const deletecal =()=>{
    if(calc===""){
      return;
    }
    const value=calc.slice(0,-1);
    setCalc(value)
  }
 function brojevi(){
  const broj=[]
  for (let index = 1; index < 10; index++){
broj.push(
 <button onClick={()=>{UpdateCalc(index.toString())}} key={index}>{index}</button>
)  
  }
  return broj;
 }

return(
 <div className="App">
 <div className="main">
<div className="prvi">
<h1>{calc || "0"}</h1>
</div>
<div className="drugi">
 <button onClick={()=>{UpdateCalc(`/`)}}>/</button>
 <button onClick={()=>{UpdateCalc(`*`)}}>*</button>
 <button onClick={()=>{UpdateCalc(`+`)}}>+</button>
 <button onClick={()=>{UpdateCalc(`-`)}}>-</button>
 <button onClick={()=>{deletecal()}}>DEL</button>
</div>
<div className="treci">

 {brojevi()}
</div>

<div className="cetvrti">
 <button onClick={()=>{UpdateCalc(`0`)}}>0</button>
 <button onClick={()=>{UpdateCalc(`.`)}}>.</button>
 <button onClick={()=>{calculate()}}>=</button>
</div>
 </div></div>
)
}