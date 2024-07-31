import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { Colors } from "../../utils/Colors";
import CartItem from "./Components/CartItem";

import { useSelector } from "react-redux";
const CartScreen = () => {
  const cartItems = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  return (
    <>
      <StatusBar backgroundColor={Colors.White} barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {cartItems.length > 0 ? (
            <View style={styles.container}>
              <Text style={styles.title}>Cart Item</Text>
              <FlatList
                data={cartItems}
                renderItem={({ item }) => <CartItem item={item} />}
                keyExtractor={(item) => item.id}
              />
            </View>
          ) : (
            <View style={styles.container}>
              <Text style={styles.NoItemText}>Cart is empty</Text>
            </View>
          )}
          {wishlist.length > 0 ? (
            <View style={styles.container}>
              <Text style={styles.title}>Wishlist</Text>
              <FlatList
                data={wishlist}
                renderItem={({ item }) => <CartItem item={item} />}
                keyExtractor={(item) => item.id}
              />
            </View>
          ) : (
            <View style={styles.container}>
              <Text style={styles.NoItemText}>No Wishlist item added</Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 15,
  },

  contentContainer: {
    flex: 1,
  },
  yellowBox: {
    height: 50,
    backgroundColor: Colors.LightYellow,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  iconTextView: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
  },
  textView: {
    justifyContent: "center",
    paddingLeft: 10,
  },
  title: {
    fontSize: 16,
    color: Colors.Black,
    fontFamily: "Inter-SemiBold",
  },
  NoItemText: {
    fontSize: 12,
    color: Colors.Gray,
    fontFamily: "Inter-Light",
  },
  headerText: {
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    color: Colors.Black,
  },

  shopingText: {
    fontSize: 12,
    fontFamily: "Inter-SemiBold",
    color: Colors.Black,
  },
  desiredText: {
    fontSize: 10,
    fontFamily: "Inter-Light",
    color: Colors.Black,
  },
  grayBox: {
    backgroundColor: "#a6a3a2",
    height: 60,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  AvailabilityText: {
    fontSize: 12,
    fontFamily: "Inter-Medium",
    color: Colors.Black,
    lineHeight: 20,
  },
  followedView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  followedText: {
    fontSize: 12,
    fontFamily: "Inter-Medium",
    color: Colors.Black,
  },
  privacyView: {
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingTop: 20,
    alignItems: "center",
    paddingTop: 10,
  },
  imageTextView: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  privacyText: {
    fontSize: 10,
    fontFamily: "Inter-Light",
    color: Colors.Black,
    textAlign: "center",
    height: 30,
  },
  cardstyle: {
    borderRadius: 10,
    height: 70,
    width: "90%",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  orageBox: {
    height: 40,
    width: 180,
    backgroundColor: Colors.DarkOrange,
    justifyContent: "center",
    // alignItems: 'center',
    marginLeft: 40,
  },
  AedText: {
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    color: Colors.Black,
  },
  minText: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: Colors.White,
    padding: 10,
  },
});
