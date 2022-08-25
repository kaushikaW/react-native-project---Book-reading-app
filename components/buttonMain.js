import react from "react";
import { Text, View, StyleSheet,TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Linking } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const MainButton = ({name,nameB}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerbtn} onPress={() => navigation.navigate("TabNavigator")}>
        <Text style={styles.btntxt}>{nameB}</Text>
      </TouchableOpacity>
      <Text
        style={styles.Sectxt}
        onPress={() => navigation.navigate("Reg")}
      >
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 270,
  },
  btntxt: {
    fontSize: 15,
    fontFamily: "arial",
    textAlign: "center",
    marginTop: 9,
    color: "white",
  },
  Sectxt: {
    fontSize: 13,
    fontFamily: "arial",
    textAlign: "center",
    marginTop: 25,
    color: "white",
  },
  containerbtn: {
    width: 123,
    height: 39,
    backgroundColor: "#E30425",
  },
});

export default MainButton;
