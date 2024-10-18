
import { Text, StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';
import {BoxedIcon,BoxedIcon1} from '@/components/ui/BoxedIcon';
import { Ionicons } from '@expo/vector-icons';

type DataItem = {
    name: string;
    icon: string;
    backgroundColor: string;
  };

const ItemOption = ({data}:{ data: DataItem[] }) => {
    const { colors } = useTheme();
    return (
        <View style={{ backgroundColor: colors.card}}>
            <FlatList
                data={data}
                scrollEnabled={false}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <BoxedIcon name={item.icon} backgroundColor={item.backgroundColor} />
                            <Text style={{ fontSize: 18, flex: 1, color: colors.text }}>{item.name}</Text>
                            <Ionicons name="chevron-forward" size={20} color={colors.text} />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default ItemOption
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