import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useTheme } from '@react-navigation/native';

export default function Layout() {
  const { colors } = useTheme();
  return (
<Stack>
  <Stack.Screen 
    name='index'
    options={{
      title: 'Maps',
      headerLargeTitle: true,
      headerShadowVisible: false,
      headerStyle: {backgroundColor:colors.background},
      headerSearchBarOptions: {placeholder : 'Searche'},
    }}
  />
</Stack>
  )
}