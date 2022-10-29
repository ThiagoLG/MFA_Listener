import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import SmsListener from 'react-native-android-sms-listener'


const ListenerApp = (props) => {

  useEffect(() => {
    console.log('app iniciado');

    const subscribe = SmsListener.addListener(message => {
      console.log(message);
    })
    return () => subscribe.remove();

  }, []);


  return (<View>
    <Text>SMS listener component</Text>
  </View>)

}

export default ListenerApp;