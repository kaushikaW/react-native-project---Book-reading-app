import react from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../../components/header";
import Card from "../../components/card";

const Library = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <HeaderBar title="Library"></HeaderBar>

      </View>


      <Text style={styles.mainTitle}>Purchased books</Text>
        <View style={styles.row}>
            <Card
              img={{ uri: "https://i.ibb.co/Phkb8rc/Great-Expectations-Book-Kindle-Edition-by-Charles-Dickens.jpg" }}
            ></Card>
            <Card
              img={{
                uri: "https://i.ibb.co/b3qyb2C/cvr9781416500247-9781416500247-hr.jpg",
              }}
            ></Card>
        </View>






    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:"#212121",
    flex:1
  },
  mainTitle: {
    fontSize: 20,
    color: "white",
    fontFamily: "arial",
    marginLeft: 10,
    marginTop:20
  },
  row: {
    flexDirection: "row",
    marginBottom: 15,
  },
});



export default Library;