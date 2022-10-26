import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const ProviderContexts = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const githubSignIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
    }, [])

    // const user = { displayName: 'jabir' }
    const userInfo = { user, loading, createUser, logIn, googleSignIn, githubSignIn, logOut };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ProviderContexts;