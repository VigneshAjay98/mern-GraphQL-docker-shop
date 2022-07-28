import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate } from "react-router-dom";
import currentUser from '../../graphQL/queries/currentUser.js';

const Authorized = (OriginalComponent) => (props) => {
    const { loading, error, data } = useQuery(currentUser);
    // const [ user, setUser ] = useState(data);

    let navigate = useNavigate();
    
    useEffect( () => { 
        // setUser(data)
        if(!loading && !data){
            navigate("/login", { replace: true });
        }
    }, [ data ] );

    if(data) {
        return (
            <>
                <h1 align="center">Authorization Success!</h1>
                <OriginalComponent {...props} />
            </>
        )
    }
    navigate("/login", { replace: true });
    
}

export default Authorized