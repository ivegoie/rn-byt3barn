import { View, Text } from "react-native";
import { Link } from "expo-router";

const Cart = () => {
  return (
    <View>
      <Text>Cart</Text>
      <Link href="/">Go Back</Link>
    </View>
  );
};

export default Cart;
