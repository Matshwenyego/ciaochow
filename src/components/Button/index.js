import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Button({ title, onPress, backgroundColor, color }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor }]}
    >
      <Text style={[styles.title, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
}
