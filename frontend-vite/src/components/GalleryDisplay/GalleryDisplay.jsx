import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GalleryDisplay.css';

const GalleryDisplay = () => {
    const [gallery, setGallery] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        axios
            .get('https://ezemmuoblockchain-5.onrender.com/gallery')
            .then((response) => {
                setGallery(response.data.gallery);
                setIsLoading(false);
            })
            .catch((error) => {
                setError('Failed to fetch gallery');
                setIsLoading(false);
            });
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this image?")) {
            axios.delete(`https://ezemmuoblockchain-5.onrender.com/gallery/${id}`)
                .then(() => {
                    setGallery(gallery.filter(item => item._id !== id));
                })
                .catch((error) => {
                    console.error("Error deleting image:", error);
                });
        }
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Gallery</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <div className="gallery-grid">
                    {gallery.map((item) => (
                        <div key={item._id} className="gallery-item">
                            <img
                                src={item.image}
                                alt="Gallery"
                                className="gallery-image"
                            />
                            <button onClick={() => handleDelete(item._id)} className="delete-button">Delete</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GalleryDisplay;
