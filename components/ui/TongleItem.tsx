import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import {BoxedIcon1} from './BoxedIcon';
import {  MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

type Toggle = {
  istoggle: boolean;
  setToggle: (toggle: boolean) => void;
  iconName:string
  backgroundColor:string
  name:string
};

const TongleItem = ({ istoggle, setToggle,iconName ,backgroundColor,name}: Toggle) => {
  const { colors } = useTheme();
  return (
    <View style={{ backgroundColor: colors.card}}>
    <TouchableOpacity onPress={() => setToggle(!istoggle)}>
      <View style={styles.item}>
        <BoxedIcon1 name={iconName} backgroundColor={backgroundColor} />
        <Text style={{ fontSize: 18, flex: 1, color: colors.text }}>{name}</Text>
        <MaterialCommunityIcons 
          name={istoggle ? "toggle-switch" : "toggle-switch-off"} 
          size={40} 
          color={istoggle ? colors.primary : colors.text} 
        />
      </View>
    </TouchableOpacity>
    </View>
  );
};

export default TongleItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    marginLeft: 50,
  },
});
