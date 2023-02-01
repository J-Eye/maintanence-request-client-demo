import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { createRequest } from "../Services/RequestService";
import { TextField } from "@mui/material";

const theme = createTheme();

export function Add(){
    const navigate = useNavigate();
    const [firstName, setFirstName] = useNavigate('');
    const [lastName, setLastName] = useNavigate('');
    const [email, setEmail] = useNavigate('');
    const [aptNo, setAptNo] = useNavigate('');
    const [createdAt, setCreatedAt] = useNavigate('');
    const [description, setdescription] = useNavigate('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const request = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email:data.get('email'),
            aptNo:data.get('aptNo'),
            createdAt: data.get('createdAt'),
            description: data.get('description')
        }
        createRequest(request)
        .then(response =>{
            navigate('/');
        })
        
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" id="fname" name="fname">First Name</input>
                <input type="text" id="lname" name="lname">Last Name</input>
                <button type="submit"/>
            </form>
        </>
    )

}