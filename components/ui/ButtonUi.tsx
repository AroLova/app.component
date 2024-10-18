import { View, Text, GestureResponderEvent,TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

type Prop = {
  title: string;
  color: string;
  onPress: (event: GestureResponderEvent) => void;
};

const ButtonUi = ({ title, color, onPress }: Prop) => {
const { colors } = useTheme();
  return (
    <View style={{marginHorizontal:80, paddingVertical:10, borderColor:colors.text}}>
      <TouchableOpacity onPress={(event) => onPress(event)} style={{ backgroundColor: colors.card, paddingVertical: 20,borderWidth:1 ,borderRadius:30,borderColor:colors.text}}>
        <Text style={{ color: colors.text, textAlign: 'center' }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonUi;
