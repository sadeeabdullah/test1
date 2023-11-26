import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from "../Config/firebase.config";


export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const [loading , setLoading] =useState(true);
    const [user, setUser] = useState()

    const googleProvider = new GoogleAuthProvider();



    const auth = getAuth(app);


    // for creating new user
    const createNewUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    
  // for login or signin
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // for login with google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // for updating user profile
  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // for logging out
  const logOut = () => {
    return signOut(auth);
  };

//   for reviewing the user on the client site 

// useEffect( ()=>{
//     const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
//         setUser(currentUser)
//         setLoading(false)
//     })
//         return unsubscribe();
// },[])


    const authInfo = {
        signIn,
        createNewUser,
        logOut,
        updateUserProfile,
        googleSignIn,
        loading,

    }
    return (
        <AuthProvider value={authInfo}>
        {children}
        </AuthProvider>
    );
};

export default AuthProvider;