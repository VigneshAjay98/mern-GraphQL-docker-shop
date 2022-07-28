import React, { Component } from 'react';  
import Authorized from '../../components/HOC/authorized.js'

class Dashboard extends Component
{  
   render() {  
      return (  
         <div>
            <h1 align="center"><b>Dashboard</b></h1>
            <h2 align="center">No. of products in cart will appear here.</h2>
         </div>
      );  
   }  
}  
export default Authorized(Dashboard); 