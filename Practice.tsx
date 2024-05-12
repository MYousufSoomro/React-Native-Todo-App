// import React, {useState} from 'react';
// import {Button, Switch, Text, TextInput, View} from 'react-native';

// const App = () => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

//   return (
//     <View>
//       <Text>Hello world</Text>
//       <TextInput>Input Area</TextInput>
//       <Button
//         title="Button"
//         color="#841584"
//         accessibilityLabel="Learn more about this purple button"
//       />
//       <Switch
//         trackColor={{false: '#767577', true: '#81b0ff'}}
//         thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
//         ios_backgroundColor="#3e3e3e"
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//       />
//     </View>
//   );
// };

// export default App;


// import React, {useState} from 'react';
// import {
//   Button,
//   Platform,
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import type {StatusBarStyle} from 'react-native';

// const STYLES = ['default', 'dark-content', 'light-content'] as const;
// const TRANSITIONS = ['fade', 'slide', 'none'] as const;

// const App = () => {
//   const [hidden, setHidden] = useState(false);
//   const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
//     STYLES[0],
//   );
//   const [statusBarTransition, setStatusBarTransition] = useState<
//     'fade' | 'slide' | 'none'
//   >(TRANSITIONS[0]);

//   const changeStatusBarVisibility = () => setHidden(!hidden);

//   const changeStatusBarStyle = () => {
//     const styleId = STYLES.indexOf(statusBarStyle) + 1;
//     if (styleId === STYLES.length) {
//       setStatusBarStyle(STYLES[0]);
//     } else {
//       setStatusBarStyle(STYLES[styleId]);
//     }
//   };

//   const changeStatusBarTransition = () => {
//     const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
//     if (transition === TRANSITIONS.length) {
//       setStatusBarTransition(TRANSITIONS[0]);
//     } else {
//       setStatusBarTransition(TRANSITIONS[transition]);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar
//         animated={true}
//         backgroundColor="#61dafb"
//         barStyle={statusBarStyle}
//         showHideTransition={statusBarTransition}
//         hidden={hidden}
//       />
//       <Text style={styles.textStyle}>
//         StatusBar Visibility:{'\n'}
//         {hidden ? 'Hidden' : 'Visible'}
//       </Text>
//       <Text style={styles.textStyle}>
//         StatusBar Style:{'\n'}
//         {statusBarStyle}
//       </Text>
//       {Platform.OS === 'ios' ? (
//         <Text style={styles.textStyle}>
//           StatusBar Transition:{'\n'}
//           {statusBarTransition}
//         </Text>
//       ) : null}
//       <View style={styles.buttonsContainer}>
//         <Button title="Toggle StatusBar" onPress={changeStatusBarVisibility} />
//         <Button title="Change StatusBar Style" onPress={changeStatusBarStyle} />
//         {Platform.OS === 'ios' ? (
//           <Button
//             title="Change StatusBar Transition"
//             onPress={changeStatusBarTransition}
//           />
//         ) : null}
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ECF0F1',
//   },
//   buttonsContainer: {
//     padding: 10,
//   },
//   textStyle: {
//     textAlign: 'center',
//     marginBottom: 8,
//   },
// });

// export default App;






// import React, {useState} from 'react';
// import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
//           setModalVisible(!modalVisible);
//         }}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}>
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}>
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });

// export default App;


// import React from 'react'
// import { Text, TouchableOpacity, View } from 'react-native'

// const App = () => {

//   const onPressHandler = () =>{
//     console.log("CLICKED....")
//   }

//   return (
//  <View>
//   <Text>Hello React</Text>
//   <TouchableOpacity onPress={onPressHandler}>
//     <Text>Click Here</Text>
//   </TouchableOpacity>
//  </View>
//   )
// }

// export default App




// import React, {useState} from 'react';
// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// const App = () => {
//   const [count, setCount] = useState(0);
//   const onPress = () => setCount(prevCount => prevCount + 1);

//   return (
//     <View style={styles.container}>
//       <View style={styles.countContainer}>
//         <Text>Count: {count}</Text>
//       </View>
//       <TouchableOpacity style={styles.button} onPress={onPress}>
//         <Text>Tap Here</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 10,
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: 'blue',
//     padding: 10,
//   },
//   countContainer: {
//     alignItems: 'center',
//     padding: 10,
//   },
// });

// export default App;










import React from 'react';
import {Image, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Card from './assets/components/Card';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('555');

  return (
    <Card/>
    // <SafeAreaView>
    //   <TextInput
    //     style={styles.input}
    //     onChangeText={onChangeText}
    //     placeholder="Enter Your name"
    //     value={text}
    //   />
    //   <TextInput
    //     style={styles.input}
    //     onChangeText={onChangeNumber}
    //     value={number}
    //     placeholder="Enter Phone Number"
    //     keyboardType="numeric"
    //   />
    //   {/* <Image resizeMode='cover' source={require("./assets/pic1.jpg")}/> */}
    //   <Image resizeMode='cover' width={400} height={700} source={{uri: "https://source.unsplash.com/7680x4320/?Wallpaper"}}/>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;