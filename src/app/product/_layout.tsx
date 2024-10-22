import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export const ProductLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="[slug]"
        options={({ navigation }) => ({
          headerShown: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="OrderDetails" options={{ title: "Order Details" }} />
    </Stack>
  );
};
