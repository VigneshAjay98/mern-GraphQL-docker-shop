import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import currentUser from '../graphQL/queries/currentUser.js';

const Test = () => {
    const [ user, setUser ] = useState('');
    const { loading, error, data } = useQuery(currentUser);

    useEffect( () => { 
        setUser(data);
    }, [ user ] );
    
    // const { loading, error, data } = useQuery(currentUser);
    // if (loading) return 'Loading...';
    // if (error) return `Error! ${error.message}`;
    // if() props.history.push('/')
    console.log(loading)
    console.log(error)
    console.log(data)
    return (
        <>
            <h1>{loading}</h1>
            {/* <h1>{error}</h1> */}
            {/* <h1>{data}</h1> */}
        </>
    )
}

export default Test