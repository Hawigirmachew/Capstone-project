import React from "react";
function Post(props) {
  return (
    <section className="post">
      <h2 className="post--title">{props.type} Picture</h2>
      <ul className="post--container">
        {props.snapshot.map((snap,index) => {
          return (
            <li key={index}>
              <img src={snap.img.status === 404? 'https://placehold.co/400': snap.img } alt="snap images" className="post--img" />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
Post.defaultProps ={
  type:'All'
}

export default Post;
