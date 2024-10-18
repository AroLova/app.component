import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';



type SegmentedControlProps = {
  options: string[];
  selectedOption: string;
  onOptionPress?: (option: string) => void;
};

const SegmentedControl: React.FC<SegmentedControlProps> = React.memo(
 
  ({ options, selectedOption, onOptionPress }) => {
    const { width: windowWidth } = useWindowDimensions();
   const { colors } = useTheme();
    const internalPadding = 6;
    const segmentedControlWidth = windowWidth -80;

    const itemWidth = (segmentedControlWidth - internalPadding) / options.length;

    const rStyle = useAnimatedStyle(() => {
      return {
        left: withTiming(itemWidth * options.indexOf(selectedOption) + internalPadding / 2),
      };
    }, [selectedOption, options, itemWidth]);

    return (
      <View
        style={[
          styles.container,
          {
            width: segmentedControlWidth,
            borderRadius: 6,
            paddingLeft: internalPadding / 2,
            backgroundColor: colors.card,
          },
        ]}>
        <Animated.View
          style={[
            {
              width: itemWidth,
              backgroundColor: colors.primary,
              
            },
            rStyle,
            styles.activeBox,
          ]}
        />
        {options.map((option) => {
          return (
            <TouchableOpacity
              onPress={() => {
                onOptionPress?.(option);
              }}
              key={option}
              style={[
                {
                  width: itemWidth,
                },
                styles.labelContainer,
              ]}>
              <Text style={[styles.label,{color:colors.text}]}>{option}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 34,
  },
  activeBox: {
    position: 'absolute',
    borderRadius: 6,
    height: '80%',
    top: '10%',
    
  },
  labelContainer: {
    justifyContent: 'center', 
    alignItems: 'center'
    },
  label: {
    fontSize: 14,
  },
});

export { SegmentedControl };
