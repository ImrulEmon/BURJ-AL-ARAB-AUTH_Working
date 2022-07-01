import { getAuth, GoogleAuthProvider,onAuthStateChanged,signInWithPopup, signOut } from "firebase/auth";
// import{} from 'firebase/compat/auth'
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user,setUser]=useState({});
    const [isLoading, setIsLoading]=useState(true);
    //=====auth and provider=====
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    // const googleProvider = new GoogleAuthProvider();

    // ===== Sign in using Google =====
    const signInUsingGoogle = () =>{
      setIsLoading(true)
      return signInWithPopup(auth, provider)
        //  .then(result=>{
        //      console.log(result.user);
        //      setUser(result.user)
        //  }).catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     console.log(`${errorCode} : ${errorMessage}`)
        //   }).finally(()=>setIsLoading(false))
     }

     
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

     //========== Log Out ==========
     const logOut = () =>{
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`${errorCode} : ${errorMessage}`)
          });
     }
     return{
      user,
      setUser,
      isLoading,
      setIsLoading,
      signInUsingGoogle,
      logOut
     }
};

export default useFirebase;
