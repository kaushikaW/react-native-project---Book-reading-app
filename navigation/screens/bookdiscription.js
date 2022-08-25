import react from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import MainCard from "../../components/mainCard";
import HeaderBar from "../../components/header";
import { TouchableOpacity } from "react-native-gesture-handler";

const Discription = () => {
const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainConatiner}>
        <HeaderBar title="The Little Prince"></HeaderBar>
        <View style={styles.container}>
            
            <MainCard>

            </MainCard>
            <Text style={styles.title}>
            The Little Prince
            </Text>
            <Text style={styles.author}>
             A Novel by Antoine de Saint-Exupéry
            </Text>
            <Text style={styles.author}>
            Originally published: April 6, 1943
            </Text>

            <View style={styles.discripContainer}>
                <Text style={styles.discriptiontxt}>
                 The story follows a young prince who visits various planets in space, including Earth, and addresses themes of loneliness, friendship, love, and loss. Despite its style as a children's book, The Little Prince makes observations about life, adults and human nature.
                </Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontxt}>
                Purchase for 12$
                </Text>
            </TouchableOpacity>

        </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    mainConatiner:{
        backgroundColor:"#212121",
        flex:1
    },
    title:{
        color:"white",
        fontFamily:"arial",
        fontSize:20,
        marginTop:10
    },
    author:{
        color:"#C5c5C5",
        fontFamily:"arial",

    },

    container:{
        alignItems:"center"
    },
    discripContainer:{
        marginTop:20,
        backgroundColor:"#393939",
        width:350,
        padding:10,
        borderRadius:5
    },
    discriptiontxt:{
        color:"white",
        textAlign:"justify"
    },
    button:{
        width:200,
        backgroundColor:"#BE3030",
        borderRadius:3,
        height:50,
        marginTop:50
    },
    buttontxt:{
        textAlign:"center",
        top:10,
        fontSize:20,
        fontFamily:"arial",
        color:"white"
    }
});



export default Discription;