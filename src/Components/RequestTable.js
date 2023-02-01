import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from "react-router-dom";
import * as RequestService from '../Components/Services/RequestService';
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';

export function RequestTable(){
    const [requests, setReuests] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        requestDataFromApi();
    },[]);

    function requestDataFromApi(){
        RequestService.getAllRequests()
        .then(res=>{
            setReuests(res.data);
        })
    }

    function goToUdapte(id){
        navigate(`/update/${id}`);
    }

    function deleteRequest(id){
        RequestService.deleteRequest(id)
        .then(()=>{
            requestDataFromApi();
        })
    }

    return(
        <div>
            <Table sx={{minWidth:700}}>
                <TableHead sx={{}}>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>                        
                    <TableCell>Apt No</TableCell>
                    <TableCell>Created At</TableCell>
                    <TableCell align="right">Actions</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {
                    requests.map((requests)=>{
                        return(
                        <TableRow hover key={requests.id}>
                            <TableCell>{requests.id}</TableCell>
                            <TableCell>{requests.firstName}</TableCell>
                            <TableCell>{requests.lastName}</TableCell>
                            <TableCell>{requests.email}</TableCell>
                            <TableCell>{requests.createdAt}</TableCell>
                            <TableCell align="right">
                                <IconButton component="a" onClick={()=> goToUdapte(requests.id)}>
                                    <EditIcon/>
                                </IconButton>
                                <IconButton component="a" onClick={()=> deleteRequest(requests.id)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </TableCell>

                        </TableRow>
                        )
                    })
                }
            </TableBody>
            </Table>
        </div>
    )
}