import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import CarItem from '../CarItem'
import cars from './cars'

const CarsList = () => {
    return (
        <View>
            <FlatList
            data={cars}
            renderItem={({item}) => <CarItem car={item}
            showsVerticalScrollIndicator={false}
            snapToAll={'start'}
            declerationRate={'fast'}
            snapToInverval={Dimensions.get('window').height}
            />}
             />
        </View>
    )
}

export default CarsList;