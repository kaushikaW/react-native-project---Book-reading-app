import react from "react";
import { Text, View, StyleSheet, Image, TextInput,TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import Logo from "../../components/logo";
// import MainButton from "../../components/buttonMain";
// import Loginbar from "../../components/textInput";
// import { useNavigation } from "@react-navigation/native";
// import HeaderBar from "../../components/header";

const Recover = () => {
  return (
    <SafeAreaView style={styles.mainConatiner}>
      <View  style={styles.mainConatiner2}>
        <Text style={styles.txt}>Please enter your recovery Email</Text>
        <TextInput placeholder="Email" style={styles.input1}></TextInput>
        <View>
        </View>

        <TouchableOpacity style={styles.containerbtn}>
        <Text style={styles.btntxt}>Send recovery email</Text>
      </TouchableOpacity>




      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainConatiner: {
    alignItems: "center",
    backgroundColor: "#212121",
    flex: 1,
  },
  mainConatiner2:{
    alignItems: "center",
    marginTop:300
  },
  input: {
    width: 300,
    height: 40,
    margin: 4,
    padding: 10,
    backgroundColor: "#D9D8D8",
  },
  input1: {
    width: 300,
    height: 40,
    marginTop: 20,
    padding: 10,
    backgroundColor: "#D9D8D8",
  },
  txt: {
    color: "white",
    fontSize: 15,
    fontFamily: "arial",
  },
  txt1: {
    color: "white",
    fontSize: 12,
    marginLeft: 195,
    marginTop: 10,
  },
  containerbtn: {
    width: 170,
    height: 39,
    backgroundColor: "#E30425",
    marginTop:20
  }
  ,btntxt: {
    fontSize: 15,
    fontFamily: "arial",
    textAlign: "center",
    marginTop: 9,
    color: "white",
  }
});
export default Recover;
