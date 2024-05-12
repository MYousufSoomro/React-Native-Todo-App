import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const Card = () => {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>React Native Title</Text>
    // </View>
    // <View style={{flex: 1, flexDirection: 'row'}}>
    //   <View style={[styles.container1, styles.common]}>
    //     <Text style={styles.title}>React Native Title</Text>
    //   </View>
    //   <View style={[styles.container2, styles.common]}>
    //     <Text style={styles.title}>React Native Title</Text>
    //   </View>
    //   <View style={[styles.container3, styles.common]}>
    //     <Text style={styles.title}>React Native Title</Text>
    //   </View>
    // </View>
    <ScrollView>
      <View style={{gap: 20}}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          dolor. Quis enim, in voluptatem cupiditate sit sunt ad libero, harum
          explicabo velit sapiente dolor laboriosam quae ipsa nobis ratione a.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          dolor. Quis enim, in voluptatem cupiditate sit sunt ad libero, harum
          explicabo velit sapiente dolor laboriosam quae ipsa nobis ratione a.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          dolor. Quis enim, in voluptatem cupiditate sit sunt ad libero, harum
          explicabo velit sapiente dolor laboriosam quae ipsa nobis ratione a.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          dolor. Quis enim, in voluptatem cupiditate sit sunt ad libero, harum
          explicabo velit sapiente dolor laboriosam quae ipsa nobis ratione a.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          dolor. Quis enim, in voluptatem cupiditate sit sunt ad libero, harum
          explicabo velit sapiente dolor laboriosam quae ipsa nobis ratione a.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          dolor. Quis enim, in voluptatem cupiditate sit sunt ad libero, harum
          explicabo velit sapiente dolor laboriosam quae ipsa nobis ratione a.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          dolor. Quis enim, in voluptatem cupiditate sit sunt ad libero, harum
          explicabo velit sapiente dolor laboriosam quae ipsa nobis ratione a.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          dolor. Quis enim, in voluptatem cupiditate sit sunt ad libero, harum
          explicabo velit sapiente dolor laboriosam quae ipsa nobis ratione a.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          dolor. Quis enim, in voluptatem cupiditate sit sunt ad libero, harum
          explicabo velit sapiente dolor laboriosam quae ipsa nobis ratione a.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          dolor. Quis enim, in voluptatem cupiditate sit sunt ad libero, harum
          explicabo velit sapiente dolor laboriosam quae ipsa nobis ratione a.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          dolor. Quis enim, in voluptatem cupiditate sit sunt ad libero, harum
          explicabo velit sapiente dolor laboriosam quae ipsa nobis ratione a.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     backgroundColor: '#000',
  //     // height: 150,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     flex: 1,
  //   },
  container1: {
    backgroundColor: 'red',
    // height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  container2: {
    backgroundColor: 'green',
    // height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container3: {
    backgroundColor: 'blue',
    // height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Card;
