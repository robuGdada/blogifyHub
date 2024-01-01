import React, { useState } from "react";
import {
  Image,
  Keyboard,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { modalStore } from "../../store/modalStore";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSnapshot } from "valtio";

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
function Andriod() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const navigation = useNavigation();
  const { token } = useSnapshot(modalStore);
  function onPressSearchBar() {
    setShowSearchBar(!showSearchBar);
  }
  function onPressCancel() {
    setShowSearchBar(false);
  }
  function onPressClear() {
    Keyboard.dismiss();
  }
  function handleLogout() {
    modalStore.setLogOut();
    modalStore.setToken("");
  }
  console.log({ token });
  return (
    <SafeAreaView>
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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
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
            <TouchableOpacity
              onPress={handleLogout}
              style={{
                backgroundColor: "#141624",
                padding: 10,
                borderRadius: 5,
                marginBottom: 2,
              }}
            >
              <Text
                style={{
                  color: "#888",
                }}
              >
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
function Ios() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const navigation = useNavigation();
  function onPressSearchBar() {
    setShowSearchBar(!showSearchBar);
  }
  function onPressCancel() {
    setShowSearchBar(false);
  }
  function onPressClear() {
    Keyboard.dismiss();
  }
  function handleLogout() {
    try {
      modalStore.setLogOut();
      modalStore.setToken("");
    } catch (e) {
      console.log(e);
    }
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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
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
            <TouchableOpacity
              onPress={handleLogout}
              style={{
                backgroundColor: "#141624",
                padding: 10,
                borderRadius: 5,
                marginBottom: 2,
              }}
            >
              <Text
                style={{
                  color: "#888",
                }}
              >
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

export function Header() {
  return <>{Platform.OS === "ios" ? <Ios /> : <Andriod />}</>;
}
