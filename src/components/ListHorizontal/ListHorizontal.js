/* eslint-disable react/no-unstable-nested-components */
import { View, Text, Animated } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../Card/Card';
import { rutines } from '../../constants/mocks';

export default function ListHorizontal({ title }) {
  // eslint-disable-next-line no-unused-vars
  const [scrollViewWidth, setScrollViewWidth] = React.useState(0);
  const pan = React.useRef(new Animated.ValueXY()).current;
  const CardComponents = (item) => {
    console.log(item, 'itemitem');
    return <Card item={item} />;
  };

  const boxWidth = scrollViewWidth * 0.8;
  const boxDistance = scrollViewWidth - boxWidth;
  const halfBoxDistance = boxDistance / 2;
  console.log(halfBoxDistance);

  return (
    <View style={{ height: 320 }}>
      <View
        style={{
          paddingVertical: 10,
          paddingRight: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            paddingLeft: 24,
            fontSize: 18,
            // fontWeight: '700',
            color: '#1F2E45',
            fontFamily: 'Satoshi-Bold',
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            paddingLeft: 24,
            fontSize: 16,
            // fontWeight: '300',
            color: '#E34A01',
            fontFamily: 'Satoshi-Regular',
            textDecorationLine: 'underline',
            textDecorationStyle: '#E34A01',
          }}
        >
          See All
        </Text>
      </View>

      <FlatList
        horizontal
        data={rutines}
        // renderItem={CardComponents}
        ItemSeparatorComponent={() => {
          return <View style={{ width: 10 }} />;
        }}
        renderItem={({ item }) => <CardComponents item={item} />}
        keyExtractor={(item) => item.id}
        // style={{backgroundColor: '#6b6b6b', height: 250}}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        contentInsetAdjustmentBehavior="never"
        snapToAlignment="center"
        decelerationRate="fast"
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: pan.x } } }], {
          useNativeDriver: false,
        })}
      />
    </View>
  );
}
