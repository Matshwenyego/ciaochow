import { Text, TextInput } from "react-native";
import styles from "./styles";
import { colors } from "assets";

export default function Input({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  validate,
}) {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[
          styles.input,
          {
            borderWidth: value.length > 3 ? 1 : 0,
            borderColor: validate ? colors.primary : colors.red,
          },
        ]}
        secureTextEntry={secureTextEntry}
      />
    </>
  );
}
