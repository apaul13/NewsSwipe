import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, AppRegistry, Button } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>My first App!</Text>
//         <Text>Can't wait to make it cool.</Text>
//         <Text>Bee-boop-beep.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
//--------------------------------
// import React, { Component } from 'react'
// import { AppRegistry, View, Text, StyleSheet, Image } from 'react-native'

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

/// export default class product extends Component<{}> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Counter color={'lightblue'} size={16} />
//         <Counter color={'skyblue'} size={32} />
//         <Counter color={'steelblue'} size={80} />
//         <Counter color={'darkblue'} size={140} />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// })

// AppRegistry.registerComponent('App', () => App)

//---------------------------------

export default class product extends Component<{}> {
  render() {
    return (
      <View style={styles2.container}>
      <Image
        style={styles1.image}
        source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}/>

        <Counter color={'lightblue'} size={16} />
        <Counter color={'skyblue'} size={32} />
        <Counter color={'steelblue'} size={80} />
        <Counter color={'darkblue'} size={140} />
      
        <Button
          //onPress={onPressLearnMore}
          title="Learn More"
          color="black"
          accessibilityLabel="Learn more about this purple button"
        />
        
      </View>
    )
  }
}

const styles1 = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
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

