import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity,ScrollView ,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const MainCard = ({ title }, { col }) => {
  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.Maincontainer}>
      <View style={styles.container}>
      <Image 
          style={styles.cover}
          source={{
            uri: "https://i.ibb.co/xLT06qG/157993.jpg",
          }}
        />
        <Text>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    width:173,
    height:250,
    marginLeft:10,
    marginRight:10,
    marginTop:20,
  },
  cover:{
    width:173,
    height:250,
  }
});

export default MainCard;
