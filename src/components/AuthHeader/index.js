import { Text, View, Pressable } from "react-native";
import { Icons } from "assets";
import styles from "./styles";

export default function AuthHeader({ title, image, navigation }) {
  return (
    <>
      <View style={styles.backIcon}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icons.Chevron height={12} width={6} />
        </Pressable>
      </View>
      <View style={styles.iconAndTitleContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.iconContainer}>{image}</View>
      </View>
    </>
  );
}
