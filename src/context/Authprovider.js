import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from './../firebase/firebase.config';



export const Authcontext = createContext();
const auth = getAuth(app)


const Authprovider = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading] = useState(true)


    const providerLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    
    const createUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }


const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
}

const updateUser =(userInfo) =>{

    return updateProfile(auth.currentUser, userInfo)
}

const logOut =() =>{
    setLoading(true)
    return signOut(auth)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser =>{
        console.log('user observing');
        setUser(currentUser);
        setLoading(false)
    });
    return () => unsubscribe();
} ,[])


    const authinfo ={
createUser,
providerLogin,
signIn,
logOut,
updateUser,
user,
loading,
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;