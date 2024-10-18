import { Text, StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function ProfileScreen() {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.text,{color:colors.text}]}>
        Details page
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold', 
  },
});