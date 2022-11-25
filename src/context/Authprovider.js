import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from './../firebase/firebase.config';


export const Authcontext = createContext();
const auth = getAuth(app)


const Authprovider = ({children}) => {
    const [user,setUser] =useState(null);
    const createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }


const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password);
}

const updateUser =(userInfo) =>{
    return updateProfile(user, userInfo)
}

const logOut =() =>{
    return signOut(auth)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser =>{
        console.log('user observing');
        setUser(currentUser);
    });
    return () => unsubscribe();
} ,[])


    const authinfo ={
createUser,
signIn,
logOut,
updateUser,
user,
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;