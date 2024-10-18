
import React, { useEffect, useState } from 'react'
import { Stack, useRouter } from 'expo-router'
import { useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SegmentedControl } from '@/components/ui/SegmsetControl';

export default function Layout() {
  const { colors } = useTheme();
  const router = useRouter();
  const [optionSelected, setOptionSelected] = useState("Messages");
  return (
<Stack>
  <Stack.Screen 
    name='index'
    options={{
      headerShown: true,
      title: 'Chats',
      headerLargeTitle: true,
      headerShadowVisible: false,
      headerStyle: {backgroundColor:colors.background},
      headerSearchBarOptions:{placeholder:"Enter name of uer here ... ", headerIconColor:colors.text},
      // headerRight: ()=>(<TouchableOpacity>
      //   <Ionicons name='call-outline' color={colors.primary} size={20}/>
      // </TouchableOpacity>),
    }}
  />
</Stack>
  )
}
