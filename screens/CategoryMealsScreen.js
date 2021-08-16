import React from 'react'
import { View, Text,StyleSheet, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'
const CategoryMealsScreen = props => {
    
    const catID = props.route.params.categoryId
    const selectedCategory = CATEGORIES.find(cat=> cat.id === catID)
  
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catID) >= 0)
    const renderMealItem = itemData =>{
        return (
        <MealItem 
            title={itemData.item.title} 
            onSelectMeal={() => {}} 
            duration={itemData.item.duration} 
            complexity={itemData.item.complexity} 
            affordability={itemData.item.affordability}
            imageUrl={itemData.item.imageUrl}
        />)
    }
    return (
        <View>
            <FlatList data={displayedMeals} keyExtractor={(item,index) => item.id} renderItem={renderMealItem} style={styles.listItem}>

            </FlatList>
            {/* <Text>Category Meals Screen RAZ DWA TRZY</Text>
            <Button title="Go to Details" onPress={()=>{
                props.navigation.navigate({name: "MealDetailScreen"})
            }}></Button>
            <Text>{selectedCategory.title}</Text>
            {} */}
        </View>
    )
}



const styles = StyleSheet.create({
    listItem:{
        width:'100%',
    }
})
export default CategoryMealsScreen
