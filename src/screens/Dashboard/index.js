import {View, Text} from 'react-native';
import React from 'react';
import ListHorizontal from '../../components/ListHorizontal/ListHorizontal';
import {ScrollView} from 'react-native-gesture-handler';

export default function Dashboard() {
  return (
    <ScrollView style={{paddingTop: 10, backgroundColor: '#ffff'}}>
      <ListHorizontal title={'Rutines'} />
      <ListHorizontal title={'Champs'} />
      {/* <ListHorizontal />
      <ListHorizontal /> */}
    </ScrollView>
  );
}
