import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

export type BoxedIconProps = {
    name: typeof Ionicons.defaultProps.name,
    backgroundColor: string,
  }
export type BoxedIconProps1 = {
    name: typeof MaterialCommunityIcons.defaultProps.name,
    backgroundColor: string,
  }
  export const BoxedIcon = ({name,backgroundColor}:BoxedIconProps) => {
  return (
    <View style={{backgroundColor,padding:4,borderRadius:6}}>
      <Ionicons name={name} size={22} color={"white"} />
    </View>
  )
}

export const BoxedIcon1 = ({name,backgroundColor}:BoxedIconProps1) => {
    return (
      <View style={{backgroundColor,padding:4,borderRadius:6}}>
        <MaterialCommunityIcons name={name} size={22} color={"white"} />
      </View>
    )
  }