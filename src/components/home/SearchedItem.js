import React from 'react'

function SearchedItem({item}) {
  return (
    <div className='min-container'>
      <h2 className='min-container-title'>{item.title}</h2>
     <div className='item'>
     <div className='item-img'>
           <img src={item.img === 'N/A'? 'https://placehold.co/400': item.img } alt="Items figure" className='post--img' />

           </div>
           <div className='item-desc'>
            <p>
             <span className='bold'>Description</span>:&nbsp; 
              {item.description}
            </p>
            {item.height && <div><span className='bold'>Height</span>: {item.height}m</div>}
            {item.location && <div><span className='bold'>Location</span>: {item.location}m</div>}
           </div>
     </div>
      
    </div>
  )
}

export default SearchedItem
