import { createContext,useState,useEffect, useContext } from "react";
import {onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth"; 
import {doc,getDoc,setDoc} from 'firebase/firestore';
import {auth , db } from "../firebaseConf"
export const  AuthContext = createContext() ; 
export const AuthContextprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect(()=> { 
       const unsub = onAuthStateChanged(auth, (user) => {
         // console.log('got user : ', user) ; 
          if(user){
            setIsAuthenticated(true);
            setUser(user);
            updateUserData(user.uid);
          }else{
            setIsAuthenticated(false);
            setUser(null);
          } 
       } );

       return unsub ; 
    },[]);


    const updateUserData = async (userId) => {
        const docRef = doc(db,"users",userId);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            let data = docSnap.data();
            setUser({...user, username: data.username , profileUrl: data.profileUrl, userId : userId});
        }
    }
    
    const login = async (email,password) => {
        try { 
            const response =  await signInWithEmailAndPassword(auth,email,password);
            return {success: true}
        } catch (error) {
            let msg = error.message ; 
            if(msg.includes('(auth/invalid-email)')) msg='invalid email !';
            if(msg.includes('(auth/invalid-credential)')) msg='Wrong credentials !';
            return {success : false , msg : msg}
        }
    }
    const logout = async () => {
        try {
            await signOut(auth) ; 
            return {success : true}    
        } catch (error) {
            return { success : false , msg : error.message,error : error}
        }
    }

    const register = async (email,password,username,profileUrl) => {
        try {
            const response =await createUserWithEmailAndPassword(auth,email,password)
            await setDoc(doc(db,"users",response?.user?.uid),{
                username,
                profileUrl,
                userId : response?.user?.uid
            });

            return {success: true , data: response?.user}
        } catch (error) {
            let msg = error.message ; 
            if(msg.includes('(auth/invalid-email)')) msg='invalid email !';
            if(msg.includes('(auth/email-already-in-use)')) msg='this email is already in use !'
            if(msg.includes('(auth/weak-password)')) msg='Password should be at least 6 characters !';
            return {success : false , msg : msg}
        }
    }

    return (
        <AuthContext.Provider value={{user , login , register , logout , isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )

} 

export const useAuth  = () => {
    const value = useContext(AuthContext);
    if(!value){
        throw Error('useAuth must be wrapped in a <AuthContextProvider />');
    }
    return value ; 
}