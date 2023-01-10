import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../screens/Users";
import LoginPage from "../screens/Login";
import HttpCat from "../screens/Cat";
import RandomDogPage from "../screens/Dog";
import CreateCustomer from "../screens/CreateCustomer";
import RegisterPage from "../screens/Register";
import CustomersPage from "../screens/Customers";
import Loading from "../components/Loading";
import EditCostumer from "../screens/EditCustomer";
import { RootState } from "../state";
import { useSelector } from "react-redux";

const RoutesPaths = () => {
  const isAuth = (Boolean(useSelector((state: RootState) => state.auth.token)) || sessionStorage.getItem('token')?.length != undefined)
    
  return (
    <BrowserRouter>
        <Routes>
          <Route path="*" element={isAuth ? <HomePage /> : <LoginPage />}></Route>
          <Route path="/login" element={isAuth  ? <HomePage /> : <LoginPage />}></Route>
          <Route path="/register" element={isAuth  ? <HomePage /> : <RegisterPage />}></Route>
          <Route path="/home" element={isAuth  ? <HomePage /> : <LoginPage />}></Route>
          <Route path="/cat" element={isAuth  ? <HttpCat /> : <LoginPage />}></Route> 
          <Route path="/dog" element={isAuth  ? <RandomDogPage /> : <LoginPage />}></Route>
          <Route path="/create-customer" element={isAuth  ? <CreateCustomer /> : <LoginPage />}></Route>
          <Route path="/customers" element={isAuth  ? <CustomersPage /> : <LoginPage />}></Route>
          <Route path="/edit-customer" element={isAuth  ? <EditCostumer /> : <LoginPage />}></Route>
          <Route path="/loading" element={isAuth  ? <Loading /> : <LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default RoutesPaths