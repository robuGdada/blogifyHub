import React, { useState } from "react";
import {
  Alert,
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

const showLogout = () =>
  Alert.alert(
    "Logout",
    "Are you sure you want to logout?",
    [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: () => {
          modalStore.setLogOut();
          modalStore.setToken("");
        },
        style: "destructive",
      },
    ],
    {
      cancelable: true,
    }
  );

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
              onPress={showLogout}
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
              onPress={showLogout}
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
