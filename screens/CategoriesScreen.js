import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
const CategoriesScreen = props => {
    return (
        <View>
            <Text>The Category Screen!</Text>
            <Button title="Go to Meals!" onPress={() =>{
                props.navigation.navigate({name : "CategoryMealsScreen"})
            }}></Button>
        </View>
    )
}

const styles = StyleSheet.create({




    

})

export default CategoriesScreen
