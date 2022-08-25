import react from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Logo from "../../components/logo";
import MainButton2 from "../../components/buttonMain2";
import { useNavigation } from "@react-navigation/native";
import Regbar from "../../components/textinputReg";

const Reg = () => {
const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
        <Logo></Logo>
        <Regbar></Regbar>
        <MainButton2 name="Already have an account Log in" nameB="SIGN UP"></MainButton2>

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


export default Reg;