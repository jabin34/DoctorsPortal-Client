import Navbar from "./Pages/Shared/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Reviews from "./Pages/Reviews/Reviews";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Navbar/Footer/Footer";
import Register from "./Pages/Login/Register";
import RequiredAuth from "./Pages/Login/RequiredAuth";
import { ToastContainer} from 'react-toastify';
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyReview from "./Pages/Dashboard/MyReview";
import MyHistory from "./Pages/Dashboard/MyHistory";
import AllUsers from "./Pages/Dashboard/AllUsers";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";
import Payment from "./Pages/Dashboard/Payment";

function App() {
  return (
    <div className="">
<Navbar/>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/appointment" element={ <RequiredAuth><Appointment /></RequiredAuth>} />
    <Route path="/dashboard" element={ <RequiredAuth><Dashboard/></RequiredAuth>}>
      <Route index  element={<MyAppointment/>}/>
      <Route path="review" element={<MyReview/>}/>
      <Route path="history" element={<MyHistory/>}/>
      <Route path="users" element={<AllUsers/>}/>
      <Route path="add" element={<AddDoctor/>}/>
      <Route path="manage" element={<ManageDoctors/>}/>
      <Route path="payment/:id" element={<Payment />} />
    </Route>
    
    <Route path="/reviews" element={<Reviews/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
</Routes>
 <Footer/>
 <ToastContainer />
    </div>
  );
}

export default App;
