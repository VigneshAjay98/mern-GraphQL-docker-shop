import React, { Component } from 'react';  
import Authorized from '../../components/HOC/authorized.js'

class Profile extends Component
{  
   render() {  
      return (  
         <>  
            <h1 align="center">My Profile</h1>
         </>  
      );  
   }  
}  
export default Authorized(Profile); 