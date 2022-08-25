import react from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Regbar = () => {
  return (
    <SafeAreaView style={styles.mainConatiner}>
        <Text  style={styles.txt}>
        Fill your details to sign up
        </Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
      ></TextInput>
      <TextInput
        placeholder="Password"
        style={styles.input3}
      ></TextInput>
      <TextInput
        placeholder="Re enter password"
        style={styles.input1}
      ></TextInput>
      
      
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
    marginTop: 20,
    padding: 10,
    backgroundColor: "#D9D8D8",
  },
  input3: {
    width: 300,
    height: 40,
    marginTop: 4,
    padding: 10,
    backgroundColor: "#D9D8D8",
  },
  input1: {
    width: 300,
    height: 40,
    marginTop: 4,
    padding: 10,
    backgroundColor: "#D9D8D8",
  },
  txt:{
    color:"white",
    fontSize:15,
    fontFamily:"arial"
  }
});

export default Regbar;
