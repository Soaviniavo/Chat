import { Platform, Text, View } from "react-native";
import { Image } from 'expo-image';
import React from "react";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {blurhash} from '../utils/common';
import { useAuth } from "../context/authContext";
import {
    Menu,
    MenuOptions,
    MenuTrigger,
  } from 'react-native-popup-menu';
import { MenuItem } from "./CustomMenuItems";
import { Feather,AntDesign } from "@expo/vector-icons";

const android =  Platform.OS == "android" ; 
export default function HomeHeader() {
    const {top} = useSafeAreaInsets();
    const {user,logout} = useAuth(); 
    const handleProfile = () => {
        console.log('profile');
    }
    const handleLogout = async () => {
        console.log("logout !");
        await logout();
    }
  return (
    <View style={{paddingTop: android ? top+10 : top}} className="flex-row justify-between px-5 bg-yellow-500 pb-6 rounded-b-3xl shadow">
        <View>
            <Text style={{fontSize: hp(3)}} className="font-medium text-white" >Chats</Text>
        </View>
        <View>
            <Menu>
                <MenuTrigger >
                    <Image
                        style={{ height: hp(4.3) , aspectRatio: 1 , borderRadius: 100}}
                        source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZwOshKNqdVmplfUgRkUwRN9ME0uC2Yrq8ag&s"
                        placeholder={{ blurhash }}
                        transition={500}
                    />
                </MenuTrigger>
                <MenuOptions>
                   <MenuItem
                      text= 'Profile'
                      action={handleProfile}    
                      value= {null}
                      icon= {<Feather name= "user" size={hp(2.5)} color="#737373"/>}      
                   />
                   <MenuItem
                      text= 'SignOut'
                      action={handleLogout}    
                      value= {null}
                      icon= {<AntDesign name= "logout" size={hp(2.5)} color="#737373"/>}      
                   />
                </MenuOptions>
            </Menu>
           
        </View>
    </View>
  );
}
