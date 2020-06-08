import React from 'react'
import OnboardingSplashScreen from '../components/OnboardingSplashScreen'
import OnboardingDisclaimerScreen, 
        {OnboardingDisclaimerScreen2, 
        OnboardingDisclaimerScreen3, 
        OnboardingDisclaimerScreen4} from '../components/OnboardingDisclaimerScreen'
import {createStackNavigator} from '@react-navigation/stack'
import BottomTabs from '../components/BottomTabs'
const OnboardingStackNavigator = createStackNavigator();

export default function OnboardingStack() { 
  return (
    <OnboardingStackNavigator.Navigator screenOptions={{title: null}} header={null} headerMode='none'>
      <OnboardingStackNavigator.Screen name="Onboarding" component={OnboardingSplashScreen}/>
      <OnboardingStackNavigator.Screen name="OnboardingDisclaimer" component={OnboardingDisclaimerScreen} />
      <OnboardingStackNavigator.Screen name="OnboardingDisclaimer2" component={OnboardingDisclaimerScreen2} />
      <OnboardingStackNavigator.Screen name="OnboardingDisclaimer3" component={OnboardingDisclaimerScreen3} />
      <OnboardingStackNavigator.Screen name="OnboardingDisclaimer4" component={OnboardingDisclaimerScreen4} />
      <OnboardingStackNavigator.Screen name="To App" component={BottomTabs}/>
    </OnboardingStackNavigator.Navigator>
  )
}
