import react from "react";
import * as React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../../components/header";
import TabBar from "./maincontainer";
import { Searchbar } from "react-native-paper";
import Card from "../../components/card";

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
      <HeaderBar title="Home"></HeaderBar>
     
      <View>
        
        <Text style={styles.mainTitle1}>Recently read</Text>
        <View style={styles.row}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Card title="Fifty Shades of Grey"
              img={{ uri: "https://i.ibb.co/2nVx7rp/10299895-L.jpg" }}
            ></Card>
            <Card title="Jane Eyre
"
              img={{
                uri: "https://i.ibb.co/b3qyb2C/cvr9781416500247-9781416500247-hr.jpg",
              }}
            ></Card>
            <Card title="Harry Potter"
              img={{
                uri: "https://i.ibb.co/N2GvNDp/deathly-hallows-us-childrens-edition.jpg",
              }}
            ></Card>
            <Card img={{ uri: "https://i.ibb.co/xLT06qG/157993.jpg" }} 
            title="The Little prince"
            ></Card>
          </ScrollView>
        </View>


        <Text style={styles.mainTitle}>Trending now</Text>
        <View style={styles.row}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Card title="The Green Mile"
              img={{ uri: "https://i.ibb.co/hHMj0hq/91-FOn-KL2-XL.jpg" }}
            ></Card>
            <Card title="Elon Musk"
              img={{
                uri: "https://i.ibb.co/y5nMwfn/Elon-Musk.jpg",
              }}
            ></Card>
            <Card title="Lord Of the Rings"
              img={{
                uri: "https://i.ibb.co/dDcbcJY/y648.jpg",
              }}
            ></Card>
            <Card title="Lord Of the Rings 2"
            img={{ uri: "https://i.ibb.co/L0Tyc82/The-Fellowship-Of-The-Ring-Book-Cover-by-JRR-Tolkien-1-480.jpg" }}></Card>
          </ScrollView>
        </View>

        <Text style={styles.mainTitle}>Best rating</Text>
        <View style={styles.row}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Card title="Huckleberry Finn"
              img={{ uri: "https://i.ibb.co/1m7bvgT/91c-IE3b-CZHL.jpg" }}
            ></Card>
            <Card title="Becoming"
              img={{
                uri: "https://i.ibb.co/khNLLK7/9780241334140.jpg",
              }}
            ></Card>
            <Card title="A Song Of Ice And Fire"
              img={{
                uri: "https://i.ibb.co/4SDr7DK/519-Nw0-Uw-j-L.jpg",
              }}
            ></Card>
            <Card title="Oliver Twist"
             img={{ uri: "https://i.ibb.co/WGJVb5R/51g6i-YAz-Fd-L.jpg" }}></Card>
          </ScrollView>
        </View>

        <Text style={styles.mainTitle}>Best Of the month</Text>
        <View style={styles.row2}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Card title="Greate Expectation"
              img={{ uri: "https://i.ibb.co/Phkb8rc/Great-Expectations-Book-Kindle-Edition-by-Charles-Dickens.jpg" }}
            ></Card>
            <Card title="Jenny"
              img={{
                uri: "https://i.ibb.co/b3qyb2C/cvr9781416500247-9781416500247-hr.jpg",
              }}
            ></Card>
            <Card title="Fifty Shades of Grey"
              img={{
                uri: "https://i.ibb.co/N2GvNDp/deathly-hallows-us-childrens-edition.jpg",
              }}
            ></Card>
            <Card title="Fifty Shades of Grey"
             img={{ uri: "https://i.ibb.co/xLT06qG/157993.jpg" }}></Card>
          </ScrollView>
        </View>



      </View>


      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bar: {
    margin: 10,
  },
  main: {
    flex: 1,
    backgroundColor: "#212121",
  },
  mainTitle: {
    fontSize: 20,
    color: "white",
    fontFamily: "arial",
    marginLeft: 10,
  },
  row: {
    flexDirection: "row",
    marginBottom: 15,
  },
  mainTitle1:{
    fontSize: 20,
    color: "white",
    fontFamily: "arial",
    marginLeft: 10,
    marginTop:20
  },
 row2:{
  flexDirection: "row",
  marginBottom: 60,
  }
});

export default Home;
