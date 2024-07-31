import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import { Colors } from "../../utils/Colors";
import { VectorIcon } from "../../icons";
import DifferentItem from "./Components/DifferentItem";
import uuid from "react-native-uuid";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const HomeScreen = () => {
  const differentItems = [
    {
      id: uuid.v4(),
      price: "AED 145.00",
      name: "Womens Bag",
      description: "Best bag to carry item",
      image: require("../../assets/images/Bag.png"),
    },
    {
      id: uuid.v4(),
      price: "AED 200.00",
      name: "Man Sheos",
      description: "Best Selling Sheos",
      image: require("../../assets/images/Sheos.png"),
    },
    {
      id: uuid.v4(),
      price: "AED 120.00",
      name: "Womens Bag",
      description: "Best bag to carry item",
      image: require("../../assets/images/Bag.png"),
    },
    {
      id: uuid.v4(),
      price: "AED 120.00",
      name: "Man Sheos",
      description: "Best Selling Sheos",
      image: require("../../assets/images/Sheos.png"),
    },
    {
      id: uuid.v4(),
      price: "AED 120.00",
      name: "Womens Bag",
      description: "Best bag to carry item",
      image: require("../../assets/images/Bag.png"),
    },
    {
      id: uuid.v4(),
      price: "AED 120.00",
      name: "Man Sheos",
      description: "Best Selling Sheos",
      image: require("../../assets/images/Sheos.png"),
    },
    {
      id: uuid.v4(),
      price: "AED 120.00",
      name: "Womens Bag",
      description: "Best bag to carry item",
      image: require("../../assets/images/Bag.png"),
    },
    {
      id: uuid.v4(),
      price: "AED 120.00",
      name: "Man Sheos",
      description: "Best Selling Sheos",
      image: require("../../assets/images/Sheos.png"),
    },
    {
      id: uuid.v4(),
      price: "AED 120.00",
      name: "Womens Bag",
      description: "Best bag to carry item",
      image: require("../../assets/images/Bag.png"),
    },
  ];

  const renderDifferentItem = ({ item }) => (
    <DifferentItem
      id={item.id}
      price={item.price}
      image={item.image}
      name={item.name}
      description={item.description}
    />
  );

  const ListHeader = () => (
    <View>
      <Image
        source={require("../../assets/images/SalesBanner.png")}
        style={styles.banner}
      />
    </View>
  );

  return (
    <>
      <StatusBar backgroundColor={Colors.White} barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          data={differentItems}
          renderItem={renderDifferentItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          ListHeaderComponent={ListHeader}
          contentContainerStyle={styles.listView}
        />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: Colors.Black,
    borderWidth: 0.5,
    height: 50,
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: Colors.Black,
  },
  banner: {
    height: hp("25%"),
    width: wp("100%"),
    resizeMode: "cover",
    marginTop: 10,
  },
  listView: {
    paddingBottom: 30,
  },
});
