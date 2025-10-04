import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
    const [book, setBook] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    });
    const navigate = useNavigate()
    const location = useLocation()
    const bookId = location.pathname.split("/")[2]

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://localhost:8800/books/"+bookId, book);
            navigate("/")
            console.log("Book added successfully!");
        } catch (err) {
            console.error("Error adding book:", err);
        }
    };

    console.log(book);

    return (
        <div className="form">
            <h1>Update book details</h1>
            <input type="text" placeholder="Title" name="title" onChange={handleChange} />
            <input type="text" placeholder="Description" name="desc" onChange={handleChange} />
            <input type="number" placeholder="Price" name="price" onChange={handleChange} />
            <input type="text" placeholder="Cover URL" name="cover" onChange={handleChange} />
            <button onClick={handleClick} className="formButton">Update</button>
        </div>
    );
};

export default Update;
