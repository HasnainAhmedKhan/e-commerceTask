import React from "react";
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
import { RootState } from "../../Redux/Store";
import { useSelector } from "react-redux";

const CartScreen: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  return (
    <>
      <StatusBar backgroundColor={Colors.White} barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {cartItems.length > 0 ? (
            <View style={styles.container}>
              <Text style={styles.title}>Cart Items</Text>
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
              <Text style={styles.NoItemText}>No Wishlist items added</Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

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
});

export default CartScreen;
