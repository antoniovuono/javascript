const titleColor = "primary1"

switch (titleColor) {
    case 'primary': 
    console.log("Fundo amarelo")
    break;
    case 'secondary': 
    console.log("Fundo verde")
    break;
    case 'thirdiary':
    console.log("cor vermelha")
    default: 
    console.log("Nenhuma cor definida!")
}




const handleNotification = (notification) => {
  const { type, payload } = notification;

  switch (type) { 
    case 'new_message': 
     if (payload && payload.senderName) {
      console.log(`You received a new message from: ${payload.senderName}`);
     return Alert.alert('New Message', `You have a new message from ${payload.senderName}.`);
    } 

    console.log('You received a new message.');
    break;
    case 'promotion':
    if (payload && payload.url) {
      console.log(`Opening promotion link: ${payload.url}`);
     return Linking.openURL(payload.url);
    } 
   
    console.log('Received a promotion notification without a link.');
    break;
    case 'app_update': 
    if (payload && payload.version) {
      console.log(`A new app version is available: ${payload.version}`);
      return Alert.alert('Update Available', 'A new app update is available. Please update now.');
    } 

    console.log('App update notification received.');
    break;
    default: 
    console.log(`Received an unknown notification type: ${type}`);
  }
}

handleNotification(userLoginPayload);