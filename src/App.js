import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Navigation from "./components/home/Navigation";
import Post from "./components/home/Post";
import Search from "./components/home/Search";
import Title from "./components/home/Title";
// data
import snapshot from "./utils/Data";
import "./index.css";
import SearchedItem from "./components/home/SearchedItem";
// import { useState } from "react";
function App() {
//  
  const options =[
    {id:1, active:'all'},
    {id:2, active:'mountain'},
    {id:3, active:'beach'},
    {id:4, active:'bird'},
    {id:5, active:'food'}
  ]
  
  // active btn
  const [active, setActive] = useState('all')
  const handleSelectedSnapshot = (e) => {
     setActive(e.target.value)
  }
  // search btn
  const [itemSearched, setItemSearched] = useState('')

  const handleSearch = (e) =>{
    setItemSearched(e.target.value)
  }
  const [message, setMessage] = useState('')

  const [itemFound, setItemFound ] = useState(null)

  const displaySearchItem = (title) =>{
     snapshot.map(snap => snap.title.toLowerCase() === title.toLowerCase() ? setItemFound(snap):setMessage('No data found'))
  }
  return (
    <BrowserRouter>
      <div className="container">
        <header className="header">
          <Title />
          <Search handleSearch ={handleSearch} itemSearched={itemSearched} 
          displaySearchItem={displaySearchItem}/>
          <Navigation options={options} handleSelectedSnapshot = {handleSelectedSnapshot}
           />

        </header>
        <main>
        {itemSearched && itemFound? <SearchedItem item ={itemFound}/>:<div>{message}</div>}
        {active === 'all' && <Post snapshot={snapshot}  />}
        {active === 'mountain' && <Post snapshot={snapshot.filter(snap => snap.type === 'mountain')} type='Mountains'/>}
        {active === 'beach' && <Post snapshot={snapshot.filter(snap => snap.type === 'beach')} type='Beaches'/>}
        {active === 'bird' && <Post snapshot={snapshot.filter(snap => snap.type === 'bird')}
        type='Birds'/>}
        {active === 'food' && <Post snapshot={snapshot.filter(snap => snap.type === 'food')}
        type='Foods'/>}
        
        
        
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
