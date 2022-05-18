import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import {LogBox} from "react-native";
import * as Notifications from 'expo-notifications';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

import Routes from './src/routes';
import { PlantProps } from './src/libs/storage';

export default function App() {
  LogBox.ignoreLogs([
    "exported from 'deprecated-react-native-prop-types'.",
  ])
  SplashScreen.preventAutoHideAsync();
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
      });

      return () => subscription.remove();

      // async function notifications() {
      //   await Notifications.cancelAllScheduledNotificationsAsync();

      //   const data = await Notifications.getAllScheduledNotificationsAsync();
      //   console.log("######### NOTIFICAÇÕES AGENDADAS ###########");
      //   console.log(data);
      // }

      // notifications();
  }, [])

  if(!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <>
      <Routes />
      <StatusBar
        style="auto"
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}
