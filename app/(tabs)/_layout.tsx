
import React, { useEffect, useState } from 'react'
import { Tabs } from 'expo-router'
import { MyTabBar } from '@/components/ui/TabBarItem'
import { SegmentedControl } from '@/components/ui/SegmsetControl'
import { useRouter } from 'expo-router';

const Tablayout = () => {
  return (
    <Tabs screenOptions={{headerShown: false}} tabBar={props => <MyTabBar {...props} />}>
        <Tabs.Screen 
            name='index' 
            options={{
              title:"Home",
              headerShown:false
            }}
        />
        <Tabs.Screen 
          name='maps' 
          options={{
            title:"Maps",
            headerShown:false}}
        />
        <Tabs.Screen 
          name='match' 
          options={{
            title:"Match",
            headerShown:false
          }}
        />
        <Tabs.Screen 
          name='chats' 
          options={{
            title:"Chats",
            headerShown:false,
          }}/>
        <Tabs.Screen 
          name='profile' 
          options={{title:"Prolife",
          headerShown:false
        }}/>
    </Tabs>
  )
}

export default Tablayout
