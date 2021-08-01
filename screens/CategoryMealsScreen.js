import React from 'react'
import { View, Text,StyleSheet, Button } from 'react-native'
const CategoryMealsScreen = props => {
    return (
        <View>
            <Text>Category Meals Screen</Text>
            <Button title="Go to Details" onPress={()=>{
                props.navigation.navigate({name: "MealDetailScreen"})
            }}></Button>
        </View>
    )
}
const style = StyleSheet.create({

})
export default CategoryMealsScreen
