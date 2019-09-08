import React from 'react'
import {Text,TextInput,View,StyleSheet} from 'react-native'

const PlaceInput=({placeholder,value,onChangeText,secureTextEntry,style})=>{
    return(
        <View>
            <TextInput secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}
            value={value}
            onChangeText={onChangeText}
            style={style}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    placeInput:{
        width:"70%",
        flexDirection: 'column',
    }
})

export default PlaceInput;