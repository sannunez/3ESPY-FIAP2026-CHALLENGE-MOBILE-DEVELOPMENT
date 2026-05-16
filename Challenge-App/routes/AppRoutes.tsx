import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CarList from "../screens/carList/carList";
import Details from "../screens/details/detailsScreen";

import { TabParamList } from "../types/navigation";

const Tab = createBottomTabNavigator<TabParamList>();

export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,

                    tabBarStyle: {
                        backgroundColor: '#171818',
                        borderTopColor: '#252525'

                    },

                    tabBarActiveTintColor: '#056aee',
                    
                    tabBarInactiveTintColor: '#777',

                    sceneStyle: {
                        backgroundColor: '#171818'
                    }
                }}
            >
                <Tab.Screen
                    name="Cars"
                    component={CarList}
                />

                <Tab.Screen
                    name="Details"
                    component={Details}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}