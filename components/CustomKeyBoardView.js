import { Text, View , KeyboardAvoidingView,ScrollView, Platform} from "react-native";

export default function CustomKeyBoardView({children}) {
    const android = Platform.OS == 'android'
    return (
      <KeyboardAvoidingView
        behavior={android ? 'height' : 'padding'}
        style = {{flex: 1 }}
      >
        <ScrollView
            style={{ flex: 1 }}
            bounces= {false} 
            showsVerticalScrollIndicator={false}
        >
            {
                children
            }
        </ScrollView>
      </KeyboardAvoidingView>
    );
}
