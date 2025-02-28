import React,  {useEffect} from 'react'; 
import {View} from 'react-native'
import {Slot,Stack,useRouter, useSegments} from 'expo-router'
import { AuthContextprovider, useAuth } from "../context/authContext";
import "../global.css"

const MainLayout = () => {
    const {isAuthenticated} = useAuth();
    const segment = useSegments();
    const router = useRouter();
    useEffect(() => {
        if(typeof isAuthenticated == 'undefined') return ; 
        console.log(segment[0]);
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
        <AuthContextprovider>
            <MainLayout/>
        </AuthContextprovider>
        
    )
}



/*export default function RootLayout() {
  return (
    <AuthContextprovider>
        <MainLayout/>
    </AuthContextprovider>
  );
}*/
