
import React from 'react'
import { Stack } from 'expo-router'
import { useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  const { colors } = useTheme();
  return (
<Stack>
  <Stack.Screen 
    name='index'
    options={{
      title: 'Contact',
      headerShown: true,
      headerLargeTitle: true,
      headerShadowVisible: false,
      headerStyle: {backgroundColor:colors.background},
      headerSearchBarOptions: {placeholder : 'Searche call'},
    }}
  />
</Stack>
)
}
