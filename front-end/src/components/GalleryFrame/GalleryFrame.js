import React from "react";

import axios from "axios";

const GalleryFrame = (props) => {
  // const encodedUrl = encodeURIComponent(url)
  // const decodeUrl = encodedUrl.replace(/%20/g, '-')
  // const data = {
  //     id: props.id,
  //     img : props.image
  // }

  function deleteBlog() {
    axios
      .delete(`https://ezemmuoblockchain-5.onrender.com/gallery/${props.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="blogFrame">
      {/* <Link to={`/${decodeUrl}`} state= {data} > */}
      <main>
        <img alt="blogImage" src={props.image} />
      </main>
     
      <span className="edDel">
       
        <button onClick={deleteBlog}>Delete</button>
      </span>
      {/* </Link> */}
    </div>
  );
};

export default GalleryFrame;
