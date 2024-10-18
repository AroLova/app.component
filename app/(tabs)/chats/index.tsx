import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { SegmentedControl } from '@/components/ui/SegmsetControl';


export default function ProfileScreen() {
  const { colors } = useTheme();

  const router = useRouter();
  const [optionSelected, setOptionSelected] = useState("Appels");
    // useEffect(() => {
    //   if (optionSelected) {
    //     if (optionSelected === "Appels") router.replace("/chats/calls");
    //     else if (optionSelected === "Messages") router.replace("/chats/message");
    //     else router.replace("/chats/contact");
    //   }
    // }, [optionSelected]);

  return (
    <View style={styles.container}>
      {/* <Stack.Screen 
        options={{
          headerTitle: () =>(
            <SegmentedControl options={["Messages","Appels","Contacts"]} selectedOption={optionSelected} onOptionPress={setOptionSelected}/>
           ),
          }}
      /> */}
<View style= {styles.navig} >
<TouchableOpacity onPress={() => router.push("/chats/calls")} style= {styles.buttonn} ><Text>One</Text></TouchableOpacity>
<TouchableOpacity style= {styles.buttonn} ><Text>Two</Text></TouchableOpacity>
</View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center', 
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold', 
  },
  buttonn:{
    margin:10,
    padding:10,
    backgroundColor: "#fff",
  },
  navig:{
    height: 100,
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
    flexDirection:"row",
    position: "relative",
  }
});
