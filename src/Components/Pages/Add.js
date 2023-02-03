import { useNavigate } from "react-router-dom";
import { createRequest } from "../Services/RequestService";
import './Form.css';



export function Add(){
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);        
        const date = new Date();
        
        console.log(date)
        const request = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            aptNumber: data.get('aptNumber'),
            createdAt: data.get(date),
            description: data.get('description'),
        }
        console.log(request)
        createRequest(request).then(navigate('/'));
    };


    return(
        <>
            <form onSubmit={handleSubmit}>
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder="Value"/>

                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Value"/>

                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Value"/>

                <label for="aptNumber">Apartment Number</label>
                <input type="text" id="aptNumber" name="aptNumber" placeholder="Value"/>

                <label for="description">Description</label>
                <input type="text" id="description" name="description" placeholder="Vist material-ui.com for tools, resources, and guidance to help you build beautiful digital products"/>

                <button type="submit" id="submitForm">Submit</button>
            </form>
        </>
    )

}