
import { Text, ScrollView, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import ItemOption from '@/components/ui/ItemOption';

import { personnel, paiement, securite,autre } from "@/components/data/OptionItemData"
import TongleItem from '@/components/ui/TongleItem';
import { useState } from 'react';
import SingleItem from '@/components/ui/SingleItem';
import ButtonUi from '@/components/ui/ButtonUi';
import ProfileOne from '@/components/ui/ProfileOne';


export default function HomeScreen() {
  const [acitiveFaceId, TogglecitiveFaceId] = useState(false);
  const [activeMelodi, ToggleAcitiveMelodi] = useState(false);
  const Validate = () =>{

  }
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, marginBottom:96}}>
      <ScrollView>
        <ProfileOne/>
        <Text style={{ textAlign: "center", fontSize: 18, color: colors.text, marginVertical: 6,fontStyle: "italic" }}>Personnel {"["}Founder Edition{"]"}</Text>
        <ItemOption data={personnel} />
        <Text style={{ fontSize: 18, color: colors.text, marginVertical: 6, marginLeft: 6 }}>Paiements</Text>
        <ItemOption data={paiement} />
        <Text style={{ fontSize: 18, color: colors.text, marginVertical: 6, marginLeft: 6 }}>Sécurité</Text>
        <ItemOption data={securite} />
        <TongleItem 
          istoggle={acitiveFaceId} 
          setToggle={TogglecitiveFaceId} 
          iconName='face-recognition' 
          backgroundColor='#693b8a' 
          name="Connexion avec FaceID"
        />
        <Text style={{ fontSize: 18, color: colors.text, marginVertical: 6, marginLeft: 6 }}>Autre</Text>
        <TongleItem 
          istoggle={activeMelodi} 
          setToggle={ToggleAcitiveMelodi} 
          iconName='music' 
          backgroundColor='#1e90b0' 
          name="Mélodie d'ouverture"
          />
          <SingleItem backgroundColor='#693b8a'  name='Theme' iconName='home' nameRight='Foncé' />
          <ItemOption data={autre} />
          <Text style={{ textAlign:"center", fontSize: 18, color: colors.text, marginVertical: 16, marginLeft: 6,fontStyle: 'italic' }}>Version logiciel 1.109.0</Text>
          <ButtonUi title='Déconnexion' onPress={Validate} color='#f1a0b1' />
      </ScrollView>
    </View>
  );
}
