import React, { useState, useEffect } from 'react';
import GalleryFrame from '../GalleryFrame/GalleryFrame';
import axios from 'axios';
import Loading from "../../components/Loading/Loading";

const GalleryPost = () => {
  const baseurl = 'http://localhost:3000';
  const [data, setData] = useState(null);

  useEffect(() => {
    const cachedData = localStorage.getItem('cachedData');
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      setData(parsedData);
      console.log('Using cached data');
    } else {
      axios.get(`${baseurl}/gallery`)
        .then(response => {
          localStorage.setItem('cachedData', JSON.stringify(response.data.gallery));
          setData(response.data.gallery);
          console.log('Data is cached');
        })
        .catch(err => {
          console.error('Error fetching data:', err);
        });
    }

    const timer = setTimeout(() => {
      axios.get(`${baseurl}/gallery`)
        .then(response => {
          localStorage.setItem('cachedData', JSON.stringify(response.data.gallery));
          setData(response.data.gallery);
          console.log('Cache updated');
        })
        .catch(err => {
          console.error('Error updating cache:', err);
        });
    }, 300000); // Update cache after 5 minutes

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {data ? (
        data.map(item => (
          <div key={item._id} className="blogPost">
            <GalleryFrame image={item.image ? item.image : '/images/unn.png'} />
          </div>
        ))
      ) : (
        <Loading />
      )}
    </>
  );
};

export default GalleryPost;
