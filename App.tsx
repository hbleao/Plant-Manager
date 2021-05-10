import React, { useEffect } from 'react';
import { 
  useFonts, 
  Jost_400Regular, 
  Jost_600SemiBold 
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';

import Routes from './src/routes';

const App = () => {
  const [fontsLoaded] = useFonts({
    Jost_400Regular, 
    Jost_600SemiBold 
  });


  async function notifications() {    
    await Notifications.cancelAllScheduledNotificationsAsync();      

    const data = await Notifications.getAllScheduledNotificationsAsync();
    console.log("######## NOTIFICAÇÕES AGENDAS ########")
    console.log(data);
  }

  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });


    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant;
        console.log(data);
      }
    )

    notifications();
    
    return () => subscription.remove();
  },[])

  if(!fontsLoaded) {
    return <AppLoading />
  };

  return (
    <Routes />
  )
};

export default App;