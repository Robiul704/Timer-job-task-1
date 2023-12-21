import { createContext, useEffect, useState } from "react";
import auth from "./Firebase.config";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext=createContext()
const AuthPovider = ({children}) => {
    const [user,setUser]=useState()
    const [loading,setLoading]=useState()

    const CreateUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    const upadateuser=(userinfo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,userinfo)
    }
    const UpdateProfile=(name,photoURL)=>{
        updateProfile(auth.currentUser,{
            displayName:name,photoURL:photoURL
        })
    }
   
    const Login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
       
    }
    const provider = new GoogleAuthProvider();
    const googlelogin=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const Logout=()=>{
        setLoading(true)
        return signOut(auth)
        
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            return unsubscribe()
        }
    },[])

    const info={
        user,
        CreateUser,
        loading,
        Login,
        Logout,
        googlelogin,
        UpdateProfile,
        upadateuser
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPovider;