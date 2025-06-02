import React, { useState } from "react";
import axios from "axios";

export function Upload({ children }) {
    const [files, setFiles] = useState("");

    const handleChange = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
            console.log("e.target.result", e.target.result);
            setFiles(e.target.result);
        };
    };

    const handleUpload = e => {

        console.log(files)

        axios({
            // Endpoint to send files
            url: "http://localhost:8080/items",
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // Add any auth token here
                authorization: "your token comes here",
            },
            // Attaching the form data
            data: files,
        })
            .then((res) => {
                console.log(res.data)
            }) // Handle the response from backend here
            .catch((err) => { });
    }

    return (
        <>
            <h1>Upload Json file - Example</h1>

            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
            <br />
            {"uploaded file content -- " + files}
        </>
    );
}