import React from 'react';
import {View,StyleSheet,FlatList} from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList=(props)=>{
    console.log(props.places)
    // let placeoutput=null
    // if(props.places.length>0){
    //     placeoutput=props.state1.places.map((place,i)=>{
    //         return <ListItem key={i} placeName={place} onItemPressed={()=>props.onItemDeleted(i)}/>
    //      });
    // }
    
        return (
            
            <FlatList 
            style={styles.listContainer}
                data={props.places}
                renderItem={(info)=>(
                    <ListItem placeName={info.item.value}
                    placeImage={info.item.placeImage}
                    onItemPressed={()=>props.onItemDeleted(info.item.key)}/>
                )}
                
            />
        )
    

}

const styles=StyleSheet.create({
    listContainer:{
        width:"100%"
    }
})

export default PlaceList