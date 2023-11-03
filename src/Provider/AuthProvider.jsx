import { createContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../config/firebase.init";



export const AuthContext = createContext()

const auth = getAuth(app);

const AuthProvider = () => {
    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState()


    const createUser = (email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
        
    }
    
    const authInfo = {
        createUser

    }



    return (
        <AuthContext.Provider value={authInfo}>

        </AuthContext.Provider>
    );
};

export default AuthProvider;