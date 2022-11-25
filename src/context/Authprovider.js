import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from './../firebase/firebase.config';


export const Authcontext = createContext();
const auth = getAuth(app)


const Authprovider = ({children}) => {
    const createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const authinfo ={
createUser,
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;