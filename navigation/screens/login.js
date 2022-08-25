import react from "react";
import { Text, View, StyleSheet,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../components/logo";
import MainButton from "../../components/buttonMain";
import Loginbar from "../../components/textInput";
import { useNavigation } from "@react-navigation/native";


const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
        <Logo></Logo>
        <Loginbar></Loginbar>
        <MainButton name="Don't have an account sign up" nameB="LOG IN"></MainButton>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:"#212121",
    flex:1
  },
    ac:{
        fontSize:5
    },
    txtLogo:{
        fontSize:50,
        fontFamily: "OleoScript-Bold"
        
    }
});

export default Login;