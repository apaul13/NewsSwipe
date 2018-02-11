import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, AppRegistry, Button } from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

class Counter extends Component {

  state = {count: 0}

  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  render() {
    const {count} = this.state
    const {color, size} = this.props

    return (
      <Text style={{color, fontSize: size}}>
        {count}
      </Text>
    )
  }
}

export default class product extends Component<{}> {
  render() {
     return (
      <View style={styles2.container}>
      <Image
        style={styles1.image}
        source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}/>

        
        <Counter color={'steelblue'} size={180} />

      
        <Button
          //onPress={onPressLearnMore}
          title="Test Button"
          color="black"
          accessibilityLabel="Learn more about this purple button"
        />
        
      </View>
    )
  }
}

const styles1 = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
})
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})



AppRegistry.registerComponent('App', () => App)

// SwipeCards.js
// 'use strict';

// import React, { Component } from 'react';
// import {StyleSheet, Text, View, Image} from 'react-native';

// import SwipeCards from 'react-native-swipe-cards';

// class Card extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
//         <Text>{this.props.text}</Text>
//       </View>
//     )
//   }
// }

// class NoMoreCards extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <View>
//         <Text style={styles.noMoreCardsText}>No more cards</Text>
//       </View>
//     )
//   }
// }

// export default class extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cards: [
//         {text: 'Tomato', backgroundColor: 'red'},
//         {text: 'Aubergine', backgroundColor: 'purple'},
//         {text: 'Courgette', backgroundColor: 'green'},
//         {text: 'Blueberry', backgroundColor: 'blue'},
//         {text: 'Umm...', backgroundColor: 'cyan'},
//         {text: 'orange', backgroundColor: 'orange'},
//       ]
//     };
//   }

//   handleYup (card) {
//     console.log(`Yup for ${card.text}`)
//   }
//   handleNope (card) {
//     console.log(`Nope for ${card.text}`)
//   }
//   handleMaybe (card) {
//     console.log(`Maybe for ${card.text}`)
//   }
//   render() {
//     // If you want a stack of cards instead of one-per-one view, activate stack mode
//     // stack={true}
//     return (
//       <SwipeCards
//         cards={this.state.cards}
//         renderCard={(cardData) => <Card {...cardData} />}
//         renderNoMoreCards={() => <NoMoreCards />}

//         handleYup={this.handleYup}
//         handleNope={this.handleNope}
//         handleMaybe={this.handleMaybe}
//         hasMaybeAction
//       />
//     )
//   }
// }

// const styles = StyleSheet.create({
//   card: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 300,
//     height: 300,
//   },
//   noMoreCardsText: {
//     fontSize: 22,
//   }
// })