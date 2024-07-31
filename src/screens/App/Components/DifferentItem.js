import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "@rneui/base";
import { Colors } from "../../../utils/Colors";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../../Redux/Reducers/cartReducer";
import { addToWishlist } from "../../../Redux/Reducers/wishlistReducer";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const DifferentItem = ({id, price, image, name, description }) => {
  const dispatch = useDispatch();
  console.log(">>>", price, image, description);
  const handleAddToCart = () => {
    dispatch(addToCart({ id, price, image, name, description }));
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist({ id, price, image, name, description }));
  };
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardstyle}>
        <Image source={image} style={styles.calenderImage} />
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.statusText}>{description}</Text>
            <Text style={styles.btnText}>{price}</Text>
          </View>
        </View>
        
      </Card>
      <TouchableOpacity onPress={handleAddToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAddToWishlist} style={styles.wishListBtn}>
        <Text style={[styles.buttonText, {color: Colors.Orange}]}>Add to Wishlist</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calenderImage: {
    width: 40,
    height: 30,
    alignSelf: "center",
    resizeMode: "contain",
  },
  cardstyle: {
    borderRadius: 10,
    height: hp("16%"),
    width: wp("26%"),
    justifyContent: "center",
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
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  btnText: {
    fontSize: 12,
    fontFamily: "Inter-Bold",
    textAlign: "center",
    color: Colors.Orange,
    flexShrink: 1,
  },
  nameText: {
    fontSize: 10,
    fontFamily: "Inter-Light",
    textAlign: "center",
  },
  statusText: {
    fontSize: 10,
    fontFamily: "Inter-Regular",
    color: Colors.Gray,
    textAlign: "center",
  },
  button: {
    backgroundColor:Colors.Orange,
    padding: 10,
    borderRadius: 5,
    width: wp("26%"),
    marginTop: 5,
    marginHorizontal: 15,
  },
  wishListBtn: {
    backgroundColor:Colors.White,
    padding: 10,
    borderRadius: 5,
    width: wp("26%"),
    borderColor: Colors.Orange,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    marginHorizontal: 15,
  },
  buttonText: {
    color: Colors.White,
    fontSize: 10,
    textAlign: 'center',
  },
});
export default DifferentItem;
