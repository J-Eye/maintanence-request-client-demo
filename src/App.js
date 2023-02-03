import{BrowserRouter, Routes, Route} from "react-router-dom";
import {Container} from '@mui/material';
import { Request } from './Components/Pages/Requests';
import { NoContent } from './Components/Pages/NoContent';
import { Add } from "./Components/Pages/Add";
import { Update } from "./Components/Pages/UpdateRequest";


function App() {  
  return (
    <Container maxWidth="md">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Request/>}></Route>
          <Route path="/update/:id" element={<Update />} />
          <Route path="*" element={<NoContent />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
