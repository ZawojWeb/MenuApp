import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = props => {
    return (
        <View style={styles.mealItem}> 
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.imageUrl}}  style={styles.bgImage} >
                            <View style={styles.titleContainer}>
                                <Text numberOfLines={1} style={styles.title} >{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealRow:{
        flexDirection: 'row',
    }, 
    mealItem:{
        height: 200,
        width: "80%",
        backgroundColor: "#cdcdcd",
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
        alignSelf: 'center'
    },
    mealHeader:{
        height: "80%"
    },
    mealDetail:{
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: 'center',
    },
    bgImage:{
        width: "100%",
        height: "100%",
        justifyContent: "flex-end"
    },
    titleContainer:{
        backgroundColor:"rgba(0,0,0,0.5)",
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title:{
        fontFamily: "open-sans-blod",
        fontSize: 18,
        color: "white",
        textAlign: 'center',
    }
})

export default MealItem
