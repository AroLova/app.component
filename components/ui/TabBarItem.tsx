import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

export function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useTheme();

  const Icon = (routeName: string, color: string ) => {
    switch (routeName) {
      case 'index':
        return <Feather name='home' size={24} color={color} />;
      case 'maps':
        return <Feather name='compass' size={24} color={color} />;
      case 'match':
        return <Feather name='heart' size={24} color={color} />;
      case 'chats':
        return <Feather name='message-circle' size={24} color={color} />;
      case 'profile':
        return <Feather name='user' size={24} color={color} />;
      default:
        return null;
    }
  };



  return (
    <View style={[styles.tabBar, { backgroundColor: colors.card}]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
            const labelText = typeof label === 'function' ? label({
              focused: state.index === index, color:colors.text, children: route.name,
              position: 'beside-icon'
            }) : label;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabBarItem, isFocused && styles.focusedTabBarItem ,isFocused && {backgroundColor:colors.primary}]}
            
          >
            {Icon(route.name, isFocused ? "#fff" : colors.text )}
            <Text style={{ color: isFocused ? "#fff" : colors.text }}>
              {labelText}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    display: "flex",
    position: "absolute",
    bottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 35,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    paddingHorizontal: 20
  },
  focusedTabBarItem: {
    width: 60,
    height: 70,
    borderRadius: 60, 
    paddingVertical: 3,
    paddingBottom:3, 
    marginHorizontal: 10
  },
  tabBarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
