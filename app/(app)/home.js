import { Text, View,Pressable,StatusBar } from "react-native";
import { useAuth } from "../../context/authContext";

export default function Home() {
  const {logout,user} = useAuth();
 // console.log(user);
  const handleLogout = async () => {
    console.log("logout !");
    await logout();
  }
    return (
      <View classname="flex-1 bg-white">
        <StatusBar  hidden/>
        <Text >Home</Text>
        <Pressable onPress={handleLogout}>
          <Text>
            Sign Out
          </Text>
        </Pressable>
      </View>
    );
}
