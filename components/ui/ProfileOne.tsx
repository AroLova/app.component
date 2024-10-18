import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

const ProfileOne = () => {
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image 
                    source={{ uri: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=400" }} 
                    style={styles.profile} 
                />
                <Text style={{color:colors.text,fontSize:22}}>Tolojanahary Liantsoa</Text>
                <Text style={{color:colors.text,fontSize:22}}>Andriamiaherisoa</Text>
            </View>
        </View>
    );
};

export default ProfileOne;

const styles = StyleSheet.create({
    container: {
        height: 150,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginHorizontal: 10,
        marginBottom: 10,
        marginTop: 40
    },
    innerContainer: {
        alignItems: "center", 
    },
    profile: {
        width: 80,
        height: 80,
        marginVertical: 10,
        borderRadius: 50,
    },
});
