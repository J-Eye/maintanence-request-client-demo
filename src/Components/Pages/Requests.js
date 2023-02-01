import { RequestTable } from "../RequestTable";
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
export function Request(){
    const navigate = useNavigate();

    function addRequest(){
        navigate("/Add")
    }

    return(
        <>
        <Button variant="outlined" onClick={e => addRequest()}>Add Request</Button>  
         <RequestTable/>
        </>
    )
}