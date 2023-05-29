import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { RootNavigatorParamList } from "../types/navigation";
import HomeScreen from "../screens/HomeScreen";
import CameraScreen from "../screens/CameraScreen";
import CreateStory from "../screens/CreateStory";

const Stack = createStackNavigator<RootNavigatorParamList>();

const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Camera" component={CameraScreen} />
          <Stack.Screen name="Create" component={CreateStory} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
};

export default Navigation;
