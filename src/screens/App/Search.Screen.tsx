import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Colors } from "../../utils/Colors";

const SearchScreen: React.FC = () => {
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
  headerText: {
    fontSize: 16,
    color: Colors.Black,
    fontFamily: "Inter-SemiBold",
  },
});
