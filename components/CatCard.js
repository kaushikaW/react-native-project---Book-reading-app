import react from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CatCard = ({title}) => {
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.txt}>
            {title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    card:{
        backgroundColor:"#424242",
        width:173,
        height:68,
        borderRadius:5
        ,margin:5
    },
    txt:{
        textAlign:"center",
        top:25,
        fontSize:15,
        color:"#C9C9C9",
        fontFamily:"arial"
    }

});

export default CatCard;