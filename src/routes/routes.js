import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MetricsScreen } from "../screens/MetricsScreen";
import { ProductsScreen } from "../screens/ProductsScreen";
import { SalesScreen } from "../screens/SalesScreen";
import { SoldScreen } from "../screens/SoldScreen";

import { MaterialCommunityIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons'
import { LocaleClient } from "../screens/Locale";

const Tab = createBottomTabNavigator();
export default function Routes() {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarStyle: { 
                backgroundColor: '#053', 
                borderTopColor: 'transparent', 
                paddingBottom: 5, 
                paddingTop: 5 
            },
            tabBarActiveTintColor: '#FFF',
            
        }}
        >
            <Tab.Screen 
            name="Vendas" 
            component={SalesScreen} 
            options={{headerShown: false, tabBarIcon: ({size, color}) => (
                <MaterialCommunityIcons name="credit-card-check-outline" size={size} color={color}/>
                )
            }}
            />
            <Tab.Screen 
            name="Peças vendidas" 
            component={SoldScreen} 
            options={{headerShown: false, tabBarIcon: ({size, color}) => (
                <MaterialCommunityIcons name="sale" size={size} color={color}/>
            )}}
            />
            <Tab.Screen 
            name="Map" 
            component={LocaleClient} 
            options={{headerShown: false, tabBarIcon: ({size, color}) => (
                <FontAwesome5 name="map-marked-alt" size={size} color={color}/>
            )}}
            />
            <Tab.Screen name="Produtos" component={ProductsScreen} options={{headerShown: false, tabBarIcon: ({size, color}) => (
                <MaterialCommunityIcons name="bag-suitcase" size={size} color={color}/>
            )}}/>
            <Tab.Screen name="Métricas" component={MetricsScreen} options={{headerShown: false, tabBarIcon: ({size, color}) => (
                <AntDesign name="piechart" size={size} color={color}/>
            )}}/>
        </Tab.Navigator>
    )
}