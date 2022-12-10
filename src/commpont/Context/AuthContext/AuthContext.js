import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../FireBase/Firbase.config'

export const AuthProvider = createContext()
const auth = getAuth(app);

const AuthContext = ({ children }) => {
    // loading
    const [loading, setLoding] = useState(true)
    // user
    const [user, setUser] = useState(null)
    // google handeling
    const googlrprovider = new GoogleAuthProvider();
    // email user sing up
    const emailSingup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // email login
    const emailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update user
    const updateUser =(userInfo)=>{
        return updateProfile(auth.currentUser, userInfo)
    }
    // google login
    const googleLogin =()=>{
        return signInWithPopup(auth, googlrprovider)
    }
    //  email logout
    const logOut =()=>{
       return signOut(auth)
    }

    // for get  passwoed
    const forgetpassword =(email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    // currenuser
    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (currenuser) => {
        
            setUser(currenuser)
            setLoding(false)
            
        });
        return ()=>unsubscribe()
    }, [])


    const authinfo = {
        forgetpassword,
        emailSingup,
        emailLogin,
        user,
        logOut,
        updateUser,
        loading,
        googleLogin

    }

    return (
        <AuthProvider.Provider value={authinfo} >
            {children}
        </AuthProvider.Provider>

    );
};

export default AuthContext;