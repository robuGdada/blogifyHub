import React, { useState } from "react";
import {
  Image,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  anotherContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textWrapper: {
    marginLeft: "3%",
    alignSelf: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    padding: "2%",
    fontSize: 18,
  },
  box: {
    paddingLeft: "2%",
  },
  SearchContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 10,
  },
  queryContainer: {
    backgroundColor: "#888",
    width: 300,
    borderRadius: 5,
    marginLeft: "4%",
    flexDirection: "row",
    paddingLeft: 30,
    paddingRight: 15,
    justifyContent: "center",
  },
  queryBox: {
    width: "95%",
  },
});

export function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  function onPressSearchBar() {
    setShowSearchBar(!showSearchBar);
  }
  function onPressCancel() {
    setShowSearchBar(false);
  }
  function onPressClear() {
    Keyboard.dismiss();
  }

  return (
    <View>
      {showSearchBar ? (
        <View style={styles.SearchContainer}>
          <View style={styles.queryContainer}>
            <TextInput
              style={styles.queryBox}
              placeholder="Search bar"
              placeholderTextColor={"#141624"}
            ></TextInput>
            <TouchableOpacity onPress={onPressClear}>
              <Image
                source={require("../../assets/remove-icon.png")}
                resizeMode="center"
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={onPressCancel}
            style={{
              width: 60,
              padding: 3.5,
              // backgroundColor: "white",
            }}
          >
            <Text style={{ color: "white", alignSelf: "center" }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.anotherContainer}>
          <View style={styles.box}>
            <Pressable style={styles.textWrapper}>
              <Text style={styles.text}>BlogifyHub</Text>
            </Pressable>
          </View>
          <TouchableOpacity onPress={onPressSearchBar}>
            <Image
              source={require("../../assets/search.png")}
              style={{
                height: 35,
                width: 40,
                marginRight: "5%",
                alignSelf: "center",
                borderRadius: 4,
                tintColor: "#8888",
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
