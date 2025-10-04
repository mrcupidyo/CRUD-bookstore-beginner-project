import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const [book, setBook] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    });
    const navigate = useNavigate()

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/books", book);
            navigate("/")
            console.log("Book added successfully!");
        } catch (err) {
            console.error("Error adding book:", err);
        }
    };

    console.log(book);

    return (
        <div className="form">
            <h1>Add book details</h1>
            <input type="text" placeholder="Title" name="title" onChange={handleChange} />
            <input type="text" placeholder="Description" name="desc" onChange={handleChange} />
            <input type="number" placeholder="Price" name="price" onChange={handleChange} />
            <input type="text" placeholder="Cover URL" name="cover" onChange={handleChange} />
            <button onClick={handleClick} className="formButton">Add</button>
        </div>
    );
};

export default Add;
