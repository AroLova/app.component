

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { BoxedIcon1 } from './BoxedIcon';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

type Toggle = {
    iconName: string
    backgroundColor: string
    name: string
    nameRight:string
};

const SingleItem = ({ iconName, backgroundColor, name,nameRight }: Toggle) => {
    const { colors } = useTheme();
    const [clicked, setCliked] = useState(false);
    return (
        <View style={{ backgroundColor: colors.card }}>
            <TouchableOpacity  onPress={() => setCliked(!clicked)}>
                <View style={styles.item}>
                    <BoxedIcon1 name={iconName} backgroundColor={backgroundColor} />
                    <View style={{ flex:1, justifyContent: "space-between", flexDirection: "row",alignItems:"center" }}>
                        <Text style={{ fontSize: 18, color: colors.text }}>{name}</Text>
                        <Text style={{ fontSize: 15, color: colors.text}}>{clicked ? "Foncé":"Claire"}</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color={colors.text} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default SingleItem;

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
