import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Colors } from "../../utils/Colors";
const SearchScreen = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.White} barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.container}>
            <Text style={styles.headerText}>Search Screen</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SearchScreen;

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
  shippingText: {
    fontSize: 12,
    color: Colors.Black,
    fontFamily: "Inter-SemiBold",
  },
  limitedText: {
    fontSize: 12,
    color: Colors.Gray,
    fontFamily: "Inter-Light",
  },
  headerText: {
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    color: Colors.Black,
  },
});
