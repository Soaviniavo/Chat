import React,  {useEffect} from 'react'; 
import {Slot,useRouter, useSegments} from 'expo-router'
import { AuthContextprovider, useAuth } from "../context/authContext";
import "../global.css"
import { MenuProvider } from 'react-native-popup-menu'

const MainLayout = () => {
    const {isAuthenticated} = useAuth();
    const segment = useSegments();
    const router = useRouter();
    useEffect(() => {
        fetch("https://www.google.com")
        .then(() => console.log("✅ Connexion active"))
        .catch(() => console.log("❌ Pas de connexion"));
        if(typeof isAuthenticated == 'undefined') return ; 
        const inApp = segment[0] == '(app)'

        if(isAuthenticated && !inApp){
            //redirect to home
            router.replace('home');
        }else if(isAuthenticated == false){
            // redirect to signIn
            router.replace('signIn');
        }
    },[isAuthenticated])

    return <Slot/>
}

export default function RootLayout(){
    return (
        <MenuProvider>
            <AuthContextprovider>
                <MainLayout/>
            </AuthContextprovider>
        </MenuProvider>
        
        
    )
}



/*export default function RootLayout() {
  return (
    <AuthContextprovider>
        <MainLayout/>
    </AuthContextprovider>
  );
}*/
