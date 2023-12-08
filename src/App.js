import Main from "./Components/Main";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import ForgotPass from "./Components/ForgotPass";
import Dashboard from "./Components/Dashboard";
import NewTicketForm from "./Components/NewTicketForm";
import TicketList from "./Components/TicketList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Main/></ProtectedRoute>}>
            <Route index element={<Dashboard/>}/>
            <Route path="newTicket" element={<NewTicketForm/>}/>
            <Route path="allTickets" element={<TicketList/>}/>
          </Route>
          <Route path="/login" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/resetPass" element={<ForgotPass/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
