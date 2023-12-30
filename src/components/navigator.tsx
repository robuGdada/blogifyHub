import {
  CompositeScreenProps,
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { Header } from "./header";
import { Iblog } from "../hooks/queryHook/useBlogQuery";
import { Main } from "./main";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Details } from "./detail";
import { DetailHeader } from "./detailHeader";
import { SignInForm } from "../auth/signIn";
import { SignUpForm } from "../auth/signUp";

export type RootStackParamList = {
  Main: NavigatorScreenParams<HomeTabParamList>;
  Details: Iblog;
  signIn: undefined;
  signUp: undefined;
};

export type HomeTabParamList = {
  Popular: undefined;
  Latest: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator();

export function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="signIn"
          options={{ headerShown: false }}
          component={SignInForm}
        />

        <Stack.Screen
          name="signUp"
          component={SignUpForm}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ header: () => <Header /> }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ header: () => <DetailHeader /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
