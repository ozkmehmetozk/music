import { Text, View, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { useState } from 'react';
import SearchBar from './src/components/SearchBar';

import music_data from './src/music-data.json';
import SongCard from './src/components/SongCard';

export default function App() {
  const [list, setlist] = useState(music_data);
  const handleSearch = (text) => {
    const filteredlist = music_data.filter((song) => {
      const serchedtext = text.toLowerCase();
      const currenttitle = song.title.toLowerCase();
      return currenttitle.indexOf(serchedtext) > -1;
    });
    setlist(filteredlist);
  };

  const renderSong = ({ item }) => <SongCard song={item} />;
  
  const renderSepeertor = () => <View style={styles.seperator} />;
  
  
  
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />

      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSepeertor}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
