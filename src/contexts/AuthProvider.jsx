import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUserData = (user, displayName, photoURL) => {
        updateProfile(user, {
            displayName: displayName,
            photoURL: photoURL
        })
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
            setUser(loggedInUser);
            if (loggedInUser) {
                axios.post('https://b712-summer-camp-server-side.vercel.app/jwt', { email: loggedInUser.email }).then(data => {
                    localStorage.setItem('secret-code', data.data.code);
                });
            } else {
                localStorage.removeItem('secret-code');
            }
            setLoading(false)
        });
        return () => {
            unSubscribe();
        };
    }, [auth]);

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const authInfo = {
        auth,
        user,
        setUser,
        signIn,
        creatUser,
        updateUserData,
        logOut,
        loading,
        setLoading
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;