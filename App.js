import React from 'react';
import { View, Text } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import AlbumDetail from './src/components/AlbumDetail';

const App = () => {
  return (
    <View>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};
export default App;
