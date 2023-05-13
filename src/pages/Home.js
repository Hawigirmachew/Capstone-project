import {useState, useEffect} from 'react'
// components
import Search from '../components/home/Search'
import SearchedItem from '../components/home/SearchedItem'
import NavigationButtons from '../components/home/NavigationButtons'
import Title from '../components/home/Title'
import Post from '../components/home/Post'
import Popup from '../components/home/Popup'

function Home({handleSearch, itemSearched, displaySearchItem,itemFound, active,options, handleSelectedSnapshot,snapshot,message}) {
  const [timePopup, setTimePopup] = useState(false)
  useEffect(() => {
    setTimeout(() =>{
      setTimePopup(true)
    },5000)
  },[])
  return (
    <>
    <section className="header">
      <Popup timePopup = {timePopup} setTimePopup = {setTimePopup}/>
      <Title />
      
      <Search
        handleSearch={handleSearch}
        itemSearched={itemSearched}
        displaySearchItem={displaySearchItem}
      />
     
    </section>
    <section className='snapshots'>

      {itemSearched  && itemFound ? (
        <SearchedItem item={itemFound} />
      ) : (
        <div className="error-message">{message}</div>
      )}
       <NavigationButtons
        options={options}
        handleSelectedSnapshot={handleSelectedSnapshot}
      />
      {active === "all" && <Post snapshot={snapshot} />}
      {active === "mountain" && (
        <Post
          snapshot={snapshot.filter((snap) => snap.type === "mountain")}
          type="Mountains"
        />
      )}
      {active === "beach" && (
        <Post
          snapshot={snapshot.filter((snap) => snap.type === "beach")}
          type="Beaches"
        />
      )}
      {active === "bird" && (
        <Post
          snapshot={snapshot.filter((snap) => snap.type === "bird")}
          type="Birds"
        />
      )}
      {active === "food" && (
        <Post
          snapshot={snapshot.filter((snap) => snap.type === "food")}
          type="Foods"
        />
      )}
    </section>
  </>
  )
}

export default Home
