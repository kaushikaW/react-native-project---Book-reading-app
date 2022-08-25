import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity,ScrollView,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Card = ({ title , img  }) => {
  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.Maincontainer}>
      <TouchableOpacity style={styles.container}
     onPress={() => navigation.navigate("Discription")}
      >
        <Image 
          style={styles.cover}
          source={img}
        />
      </TouchableOpacity>
      <View  style={styles.conatinerxx}>
        <Text style={styles.namecover}>
        {title}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    width:117,
    height:168,
    marginLeft:10,
    marginRight:10,

  },
  cover:{
    width:117,
    height:168,
  },
  namecover:{
    textAlign:"left",
    color:"#DDDDDD",
    fontSize:12,
    fontFamily:"arial"

  },
  conatinerxx:{
    width:100,
    marginTop:5,
    textAlign:"left",
    marginLeft:11
  }
});

export default Card;
