import { Stack } from "expo-router";

export const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(shop)" options={{ headerShown: false }} />
      <Stack.Screen name="Categories" options={{ headerShown: false }} />
      <Stack.Screen name="Product" options={{ headerShown: false }} />
      <Stack.Screen
        name="cart"
        options={{
          presentation: "modal",
          title: "Shopping Cart",
        }}
      />
      <Stack.Screen name="auth" options={{ headerShown: false }} />
    </Stack>
  );
};
