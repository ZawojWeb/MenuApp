import React from 'react'
import { View, Text,StyleSheet, Button } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

const CategoryMealsScreen = props => {
    
    const catID = props.route.params.categoryId
    const selectedCategory = CATEGORIES.find(cat=> cat.id === catID)
  

    return (
        <View>
            <Text>Category Meals Screen RAZ DWA TRZY</Text>
            <Button title="Go to Details" onPress={()=>{
                props.navigation.navigate({name: "MealDetailScreen"})
            }}></Button>
            <Text>{selectedCategory.title}</Text>
            {}
        </View>
    )
}



const style = StyleSheet.create({

})
export default CategoryMealsScreen
