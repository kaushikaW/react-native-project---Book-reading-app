import react from "react";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CatCard from "../../components/CatCard";
import HeaderBar from "../../components/header";
import { Searchbar } from "react-native-paper";

const Catogeries = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);



  return (
    <SafeAreaView style={styles.mainConatiner}>
      <HeaderBar title="Categories"></HeaderBar>
      <View style={styles.bar}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.Conatiner}>
        <View style={styles.ConatinerSub}>
          <CatCard title="Action" />
          <CatCard title="Adventure"/>
        </View>
        <View style={styles.ConatinerSub}>
          <CatCard title="Classics"/>
          <CatCard title="Comic "/>
        </View>
      </View>
      <View style={styles.Conatiner}>
        <View style={styles.ConatinerSub}>
          <CatCard title="Detective " />
          <CatCard title="Mystery"/>
        </View>
        <View style={styles.ConatinerSub}>
          <CatCard title="Fantasy"/>
          <CatCard title="Historical "/>
        </View>
      </View>
      <View style={styles.Conatiner}>
        <View style={styles.ConatinerSub}>
          <CatCard title="Horror" />
          <CatCard title="Literary "/>
        </View>
        <View style={styles.ConatinerSub}>
          <CatCard title="Romance"/>
          <CatCard title="Sci-Fi"/>
        </View>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: "#212121",
  },
  Conatiner: {
    alignItems:"center",
  },
  ConatinerSub:{
    flexDirection: "row",
    marginBottom:2
  },
  bar: {
    marginTop: 18,
    marginLeft:20,
    marginRight:20,
    marginBottom:20


  }

});

export default Catogeries;
