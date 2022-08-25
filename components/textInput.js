import react from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Loginbar = ({name}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainConatiner}>
        <Text  style={styles.txt}>
        Log in to Continue
        </Text>
      <TextInput
        placeholder="Email"
        style={styles.input1}
      ></TextInput>
      <TextInput
        placeholder="Password"
        style={styles.input}
      ></TextInput>
      <View>
        <Text style={styles.txt1}  onPress={() => navigation.navigate("Recover")}>
        Forgot Password ?
        </Text>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainConatiner: {
    alignItems: "center",
    marginTop:50,
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
    backgroundColor: "#D9D8D8",},
  txt:{
      color:"white",
      fontSize:15,
      fontFamily:"arial"

    },
    txt1:{
      color:"white",
      fontSize:12,
      marginLeft:195,
      marginTop:10

    }
});

export default Loginbar;
