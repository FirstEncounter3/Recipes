import React from "react";
import axios from 'axios';

const Categories = () => {
    const baseUrl = 'http://127.0.0.1:8000/api'
    const [categories, setCategories] = React.useState([])

    axios.get(`${baseUrl}/categories`).then((response) => {
        console.log(response.data);
        setCategories(response.data);
    })
    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Categories