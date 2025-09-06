import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'

const DemoScreen = () => {
  return (
    <SafeAreaView className='bg-black flex-1 p-4'>
        <View className='items-center justify-center p-6 '>
      <Text className='text-white text-4xl capitalize mb-4'>hooray!</Text>
      <Text className='text-white text-2xl'>you have access to this feature</Text>
      </View>
      <View className='items-center justify-center  h-[400] p-2'>
        <Ionicons name='checkmark-circle-sharp' color='white' size={120}/>
        <Text className='text-white capitalize text-1xl text-center font-bold'>this is where you create a new screen and change the rest of the app</Text>
      </View>

    </SafeAreaView>
  )
}

export default DemoScreen