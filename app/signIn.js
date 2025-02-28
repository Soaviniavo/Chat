import { Text, View, StatusBar, Image, TextInput,TouchableOpacity, Pressable,Alert} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React , {useRef , useState} from 'react' ; 
import { Octicons } from "@expo/vector-icons";
import {useRouter} from 'expo-router'; 
import Loading from "../components/loading.js" ; 
import CustomKeyBoardView from "../components/CustomKeyBoardView.js";


export default function SignIn() {
  const router = useRouter() ; 
  const emailRef = useRef();
  const passwordRef = useRef(); 
  const [isLoading,setIsLoading] = useState(false);

  const handleLogin = async () => {
    if(!emailRef.current || !passwordRef.current){
      Alert.alert('Sign In','Please fill all the fields !');
      return ;
    }
    setIsLoading(true);
    setTimeout(() => {  
        setIsLoading(false);
    },5000)
  }

  return (
    <CustomKeyBoardView>
      <StatusBar style="dark-content" />
      <View
        className="flex-1 gap-8"
        style={{ paddingTop: hp(3), paddingHorizontal: wp(5) }}
      >
        {/* SignIn image*/}
        <View className="items-center">
          <Image
            style={{ height: hp(25) }}
            resizeMode="contain"
            source={require("../assets/images/Mobile login-cuate.png")}
          />
        </View>

        <View className="gap-10">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wider text-center text-neutral-600"
          >
            Sign In
          </Text>
        </View>

        <View className="gap-4">
          {/*inputs */}
          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
          >
            <Octicons name="mail" size={hp(2.7)} color="gray" />
            <TextInput
              onChange={value => emailRef.current = value}
              style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-700"
              placeholder="Email Adress"
              placeholderTextColor={"gray"}
            />
          </View>
          <View className="gap-3">
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
            >
              <Octicons name="lock" size={hp(2.7)} color="gray" />
              <TextInput
                onChange={value => passwordRef.current = value}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Password"
                secureTextEntry
                placeholderTextColor={"gray"}
              />
            </View>
            <Text style={{fontSize: hp(1.8)}} className="font-semibold text-right text-neutral-500">Forgot Password?</Text>
          </View>

                      {/*submit */}
          <View>
            {
              isLoading ? (
                <View className="flex-row justify-center">
                    <Loading  size={hp(11)} />
                </View>
              ) : (
                <TouchableOpacity onPress={handleLogin} style={{height: hp(6.5)}} className="bg-yellow-400 rounded-xl justify-center items-center">
                    <Text style={{fontSize: hp(2.7)}} className="text-white font-bold tracking-wider">Sign In</Text>
               </TouchableOpacity>
              )
            }
          </View>

          

          <View className="flex-row  justify-center">
              <Text style={{fontSize: hp(1.8)}} className="font-semibold text-neutral-500"> Don't have an account ? </Text>
              <Pressable onPress={() => router.push('signUp')}>
                 <Text style={{fontSize: hp(1.8)}} className="font-bold text-yellow-500">Sign Up</Text>
              </Pressable>
          </View>

        </View>
      </View>
    </CustomKeyBoardView>
  );
}
