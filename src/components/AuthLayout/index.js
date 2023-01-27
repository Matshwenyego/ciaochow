import { View, Image } from "react-native";
import { images } from "assets";
import styles from "./styles";

export default function AuthLayout({ children, backgroundColor }) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Image style={styles.ellipse} source={images.ellipse} />
      {children}
    </View>
  );
}
