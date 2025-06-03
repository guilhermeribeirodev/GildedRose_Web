import React, {useState} from 'react';
import {ItemList} from "./ItemList";
import axios from "axios";

export default function Inventory() {
    const [items, setItems] = useState([]);

    const handleChange = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
            console.log("e.target.result", e.target.result);
            setItems(e.target.result);
        };
    };

    const handleUpload = async e => {

        axios({
            url: "http://localhost:8080/items",
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // Add any auth token here
                authorization: "your token comes here",
            },
            data: items,
        })
            .then((res) => {
                setItems(res.data);
                console.log(items)

            })
            .catch((err) => {
            });
    }

    return (
        <>
            <input type="file" onChange={handleChange}/>
            <button onClick={handleUpload}>
                Upload
            </button>
            {/*<ItemList items={items} />*/}
        </>
    );
}