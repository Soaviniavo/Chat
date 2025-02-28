import {
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useRef, useState } from "react";
import { Feather, Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Loading from "../components/loading";
import CustomKeyBoardView from "../components/CustomKeyBoardView";

export default function SignUp() {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const profileRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !usernameRef.current ||
      !profileRef.current
    ) {
      Alert.alert("Sign Up", "Please fill all the fields !");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

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
            style={{ height: hp(20) }}
            resizeMode="contain"
            source={require("../assets/images/Sign up-cuate.png")}
          />
        </View>

        <View className="gap-10">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wider text-center text-neutral-600"
          >
            Sign Up
          </Text>
        </View>

        <View className="gap-4">
          {/*inputs */}

          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
          >
            <Feather name="user" size={hp(2.7)} color="gray" />
            <TextInput
              onChange={(value) => (emailRef.current = value)}
              style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-700"
              placeholder="Email Adress"
              placeholderTextColor={"gray"}
            />
          </View>

          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
          >
            <Octicons name="mail" size={hp(2.7)} color="gray" />
            <TextInput
              onChange={(value) => (usernameRef.current = value)}
              style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-700"
              placeholder="Username"
              placeholderTextColor={"gray"}
            />
          </View>

          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
          >
            <Octicons name="lock" size={hp(2.7)} color="gray" />
            <TextInput
              onChange={(value) => (passwordRef.current = value)}
              style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-700"
              placeholder="Password"
              secureTextEntry
              placeholderTextColor={"gray"}
            />
          </View>

          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
          >
            <Feather name="image" size={hp(2.7)} color="gray" />
            <TextInput
              onChange={(value) => (profileRef.current = value)}
              style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-700"
              placeholder="Profile url"
              placeholderTextColor={"gray"}
            />
          </View>

          {/*submit */}
          <View>
            {isLoading ? (
              <View className="flex-row justify-center">
                <Loading size={hp(10)} />
              </View>
            ) : (
              <TouchableOpacity
                onPress={handleRegister}
                style={{ height: hp(6.5) }}
                className="bg-yellow-400 rounded-xl justify-center items-center"
              >
                <Text
                  style={{ fontSize: hp(2.7) }}
                  className="text-white font-bold tracking-wider"
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <View className="flex-row  justify-center">
            <Text
              style={{ fontSize: hp(1.8) }}
              className="font-semibold text-neutral-500"
            >
              {" "}
              Already have an account ?{" "}
            </Text>
            <Pressable onPress={() => router.push("signIn")}>
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-bold text-yellow-500"
              >
                Sign In
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
   </CustomKeyBoardView>
      
  );
}
