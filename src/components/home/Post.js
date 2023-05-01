import React from 'react'
import snapshot from '../../utils/Data'
function Post() {
  return (
    <section className='post'>
      <h2 className="post--title">
        Mountains Picture
      </h2>
    <div className='post--container'>
      
      {snapshot.map((snap) => (
        <img src={snap.img} alt='snap images' className='post--img'/>
      ))}
    </div>
    </section>
   
  )
}

export default Post
