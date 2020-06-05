import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import db from '../config';

export default class Searchscreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTransactions: [],
    };
  }
  componentDidMount = async () => {
    const query = await db.collection('transactions').get();
    query.docs.map((doc) => {
      this.setState({
        allTransactions: [...this.state.allTransactions, doc.data()],
      });
    });
  };
  render() {
    return (
      <ScrollView>
        {this.state.allTransactions.map((transaction, index) => {
          return (
            <View key={index} style={{ borderBottomWidth: 3 }}>
            <Text>{"BoodId:"+transaction.bookId}</Text>
            <Text>{"StudentId:"+ transaction.studentId}</Text>
             
              <Text> {"Transaction Type"+transaction.transactionType}</Text>
              <Text>{"Date:"+transaction.date.toDate()}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}
