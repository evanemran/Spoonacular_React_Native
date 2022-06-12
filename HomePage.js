import React, { Component } from 'react'
import { View, Text, StyleSheet, ListView } from 'react-native'

class HomePage extends Component {
   state = {
      data: ''
   }
   componentDidMount = () => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
      return (
         <View>
            <ListView
          dataSource={this.state.data}
          renderRow={(rowData) => (
            <View style={styles.row}>
              <Text style={styles.rowText}>{rowData}</Text>
              <Icon name="ios-eye" type="ionicon" color="#C2185B" />
            </View>
          )}
        />
         </View>
      )
   }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    screen: {
        marginTop: 30,
    },
    row: {
        margin: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 2,
    },
      rowText: {
      fontSize: 18,
    },
  });


export default HomePage