import react from "react";
import {  Text, View, StyleSheet,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Logo = (style) => {
  return (
    <View style={styles.container}>

      
        <Image 
          style={[styles.logo,style]}
          source={{
            uri: "https://i.ibb.co/1GNb4T8/book.png",
          }}
        />
        <Text style={styles.logotxt}>CozyLibrary</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    logo: {
        width: 120,
        height: 120,
      },
      container:{
          justifyContent:"center",
          alignItems:"center",
          marginTop:30
          
      },
      logotxt:{
          fontFamily:"OleoScript-Bold",
          fontSize:20,
          color:"white"

      }
});




export default Logo;