import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { updateRequest } from "../Services/RequestService";
import { getRequestById } from "../Services/RequestService";
import './Form.css';


export function Update(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [aptNumber, setAptNumber] = useState('');
    const [description, setDescription] = useState('');
    useEffect(()=>{
        getRequestById(id)
        .then(response =>{
            const user = response.data;
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setEmail(user.email);
            setAptNumber(user.aptNumber);
            setDescription(user.description);
        })
    })
    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const request = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            aptNumber: data.get('aptNumber'),
            createdAt: data.get(currentDate),
            description: data.get('description'),
        }
        updateRequest(request)
        .then(response =>{
            navigate('/');
        })
        
    };

    const currentDate = function(){
        const date = new Date();
        return date.toISOString();
    }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder={firstName}/>

                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder={lastName}/>

                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder={email}/>

                <label for="aptNo">Apartment Number</label>
                <input type="text" id="aptNo" name="aptNo" placeholder={aptNumber}/>

                <label for="description">Description</label>
                <input type="text" id="description" name="description" placeholder={description}/>

                <button type="submit" id="submitForm">Submit</button>
            </form>
        </>
    )

}