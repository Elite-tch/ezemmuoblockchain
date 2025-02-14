import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GalleryForm = () => {
    const [base64, setBase64] = useState('');
    const [isGallery, setIsGallery] = useState('');
    const [isError, setIsError] = useState('');
    const [sub, setSub] = useState(true);
    const [preview, setPreview] = useState(null); // For image preview

    const [formData, setFormData] = useState({
        image: '',
       
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleImage(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const convertedString = reader.result;
                setBase64(convertedString);
                setPreview(convertedString); // Set preview for the image
            };
            reader.readAsDataURL(file);
        }
    }

    const body = {
        image: base64,
    };

    function handleSubmit(e) {
        e.preventDefault();
        setSub(false);
        axios.post('https://ezemmuoblockchain-5.onrender.com/api/gallery', body)
            .then(response => {
                setIsGallery('Gallery added Successfully - View Gallery');
                setIsError('');
                setPreview(null); // Clear the preview
                setBase64(''); // Reset the image data
                setSub(true);
            })
            .catch(err => {
                setIsError('Could not upload Gallery at the moment');
                setIsGallery('');
                setSub(true);
            });
    }

    useEffect(() => {
        setSub(true);
    }, []);

    return (
        <>
            <div className="blogForm">
                <h1>Upload New Gallery</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="image">
                            Image:
                            <input
                                required={true}
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleImage}
                            />
                        </label>
                        {preview && (
                            <div style={{ paddingTop: '20px', width:'80%', margin:'auto' }}>
                                <img
                                    src={preview}
                                    alt="Preview"
                                    style={{
                                        maxWidth: '300px',
                                        maxHeight: '300px',
                                        border: '1px solid #ccc',
                                    }}
                                />
                            </div>
                        )}
                    </div>
                    <div className="blog-form-button" style={{  marginTop: '80px' }}>
                        <button type="submit" disabled={!sub}>
                            {sub ? 'Create' : 'Loading...'}
                        </button>
                    </div>
                </form>
                {isGallery && <p style={{ color: 'green', marginTop: '10px', textAlign:'center' }}>{isGallery}</p>}
                {isError && <p style={{ color: 'red', marginTop: '10px', textAlign:'center' }}>{isError}</p>}
            </div>
        </>
    );
};

export default GalleryForm;
