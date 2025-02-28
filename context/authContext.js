import { createContext,useState,useEffect, useContext } from "react";

export const  AuthContext = createContext() ; 
export const AuthContextprovider = ({children}) => {
    const [user, userState] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect(()=> { 
        setTimeout(()=> {
            console.log("false");
            setIsAuthenticated(false);
        },3000 )
    },[]);
    
    const login = (email,password) => {
        try { 
            
        } catch (error) {
            
        }
    }
    const logout = (email,password) => {
        try {
            
        } catch (error) {
            
        }
    }
    const register = (email,password,username,profileUrl) => {
        try {
            
        } catch (error) {
            
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