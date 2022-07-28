import React, { Component } from 'react';  
import { Routes, Route } from "react-router-dom"; 
import Menu from './components/menu.js'
import Footer from './components/footer.js'
import Loader from './components/loader.js'
// import LoginModal from './containers/login/loginModal.js'
import Login from './containers/login/login.js'
import Register from './containers/register/register.js'
import Home from './containers/home/home.js'
import Cart from './containers/cart/cart.js'
import Dashboard from './containers/account/dashboard.js'
import Profile from './containers/account/profile.js'
import NotFound from './containers/notFoundPage.js'
import Test from './containers/test.js'
import Authorized from './components/HOC/authorized.js'
import { UserProvider, AppProvider } from './contexts.js'

class App extends Component
{  
   
   render() {  
      
      return (  
         <>  
            <Loader />
            <Menu />

            <UserProvider value={'Vignesh Ajay'} >
               <AppProvider value={'Frontend'} >
                  <Routes>
                     {/* <Route path="/">
                        <Route path="/" exact element={<Test />} />
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="/cart" element={<Cart />} />
                     </Route>
                     <Route path="account/">
                        <Route path="" element={<Dashboard />} />
                        <Route path="profile" element={<Profile />} />
                     </Route> */}

                     <Route path="/" element={<Home />} />
                     <Route path="login" element={<Login />} />
                     <Route path="register" element={<Register />} />
                     <Route path="cart" element={<Cart />} />
                     <Route path="account" element={<Dashboard />} />
                     <Route path="account/profile" element={<Profile />} />

                     <Route path="*" element={<NotFound />} />
                  </Routes>
               </AppProvider>
            </UserProvider>
            
            <Footer /> 
            {/* <LoginModal /> */}
         </>  
      );  
   }  
}  
export default App; 