import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const HeaderBar = ({ title }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.txt}>{title}</Text>
      </View>
    </SafeAreaView>

    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#464646",
    height:51,
    alignItems:"center",   
     
  },
  txt:{
      color:"white",
      bottom:12,
      fontSize:17,
      fontFamily:"arial"
  }
});

export default HeaderBar;
