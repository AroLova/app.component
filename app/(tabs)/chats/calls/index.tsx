

import { Text, StyleSheet, View, Button, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Link, Stack, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import calls from "@/components/data/calls.json"
import { Ionicons } from '@expo/vector-icons';
import dayjs from "dayjs";
import { SegmentedControl } from '@/components/ui/SegmsetControl';


export default function MatchScreen() {
const [isEditing, setIsEditing] = useState(false);
const [optionSelected, setOptionSelected] = useState("All");
const onEdit = () =>{
  setIsEditing(!isEditing);
}

useEffect(()=>{
  if(optionSelected === "All"){
    setItems(calls);
  }else{
    setItems(calls.filter((item) => item.missed));
  }
},[optionSelected])

  const router = useRouter();
  const { colors } = useTheme();
  const[items ,setItems] = useState(calls);

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          headerTitle: () =>(
            <SegmentedControl options={["All","Missed"]} selectedOption={optionSelected} onOptionPress={setOptionSelected}/>
          ),
          // headerLeft: () =>(
          //   <TouchableOpacity >
          //     <Text style={[styles.edit,{color: colors.primary}]}> {isEditing ? "Done" : "Edit"}</Text>
          //   </TouchableOpacity>
          // )
          }}
      />
      
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <FlatList data={items} scrollEnabled={false} 
        keyExtractor={(item) =>item.id.toString()}
        ItemSeparatorComponent={() => <View style={{borderColor:"#000"}}/>}
        renderItem={({item}) =>(
          <View style={styles.itemList}>
            <Image source={{uri: item.img}} style={styles.avatar}/>
            <View style={{ flex: 1, gap: 2 }}>
                      <Text style={{ fontSize: 18, color: item.missed ? colors.notification : colors.text }}>
                        {item.name}
                      </Text>

                      <View style={{ flexDirection: 'row', gap: 4 }}>
                        <Ionicons
                          name={item.video ? 'videocam' : 'call'}
                          size={16}
                          color={colors.primary}
                        />
                        <Text style={{ color: colors.text, flex: 1 }}>
                          {item.incoming ? 'Incoming' : 'Outgoing'}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 6,
                        alignItems: 'center',
                      }}>
                      <Text style={{ color: colors.text }}>{dayjs(item.date).format("DD MMM YYYY")}</Text>
                      <Ionicons
                        name="information-circle-outline"
                        size={24}
                        color={colors.primary}
                      />
                    </View>
          </View>
        )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold', 
    backgroundColor: "#f10aF1",
    padding: 6,
  },
  edit: {
    fontSize: 18,
    fontWeight: 'bold', 
    padding: 6,
    marginRight: 20
  },
  avatar:{
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  itemList:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    gap: 10,
    marginVertical: 6,
  }
});