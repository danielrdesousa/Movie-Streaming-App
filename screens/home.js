import React, { useEffect, useRef, useState } from 'react';
import Carousel from 'react-native-anchor-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
  ImageBackground,
  TextInput,
  FlatList,
} from 'react-native';

console.disableYellowBox = true;

const Home = () => {
  const [background, setBackground] = useState({
    uri:
      'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    name: 'Parasite',
    stat: '2019 - Comedy/Drama/Thriller - 132 min',
    desc:
      'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
  });

  const [gallery, setgallery] = useState([
    {
      image:
        'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      title: 'Parasite',
      key: '1',
      released: '2019 - Comedy/Drama/Thriller - 132 min',
      desc:
        'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    },
    {
      image:
        'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      title: 'Joker',
      key: '2',
      released: '2019 - Crime/Drama/Thriller - 2h 2min',
      desc:
        'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
    },
    {
      image:
        'https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SY1000_CR0,0,631,1000_AL_.jpg',
      title: '1917',
      key: '3',
      released: '2019 - Drama/War - 1h 59min',
      desc:
        'April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.',
    },
  ]);

  const carouselRef = useRef(null);

  const { width, height } = Dimensions.get('window');

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          key={item.key}
          onPress={() => {
            carouselRef.current.scrollToIndex(index);
            setBackground({
              uri: item.image,
              name: item.title,
              stat: item.released,
              desc: item.desc,
            });
          }}>
          <Image source={{ uri: item.image }} style={styles.carouselImage} />
          <Text style={styles.carouselText}>{item.title}</Text>
          <MaterialCommunityIcons
            name="library-plus"
            size={30}
            color="#fff"
            style={styles.carouselIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: '#000' }}>
        <StatusBar hidden={true} />
        <View style={styles.carouselContentContainer}>
          <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#000' }}>
            <ImageBackground
              source={{ uri: background.uri }}
              style={styles.ImageBackground}
              blurRadius={10}>
              <LinearGradient
                tart={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={[
                  'transparent',
                  'rgba(0, 0, 0, 0.5)',
                  'rgba(0, 0, 0, 0.7)',
                  'rgba(0, 0, 0, 0.9)',
                  'rgb(0, 0, 0)',
                ]}
                style={styles.gradientBackground}>
                <View style={styles.searchBoxContainer}>
                  <TextInput
                    placeholder="Search Movies"
                    placeholderTextColor="rgba(255,255,255,0.3)"
                    style={styles.SearchBox}
                  />
                  <Ionicons
                    name="md-search"
                    size={22}
                    color="rgba(255,255,255,0.3)"
                    style={styles.searchBoxIcon}
                  />
                </View>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 24,
                    fontWeight: 'bold',
                    marginLeft: 10,
                    marginVertical: 10,
                  }}>
                  Top Picks this Week
                </Text>
                <View style={styles.carouselContainerView}>
                  <Carousel
                    style={styles.Carousel}
                    data={gallery}
                    renderItem={renderItem}
                    itemWidth={200}
                    containerWidth={width - 20}
                    separatorWidth={0}
                    ref={carouselRef}
                    inActiveOpacity={0.3}
                  />
                </View>

                <View style={styles.movieInfoContainer}>
                  <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.movieName}>{background.name}</Text>
                    <Text style={styles.movieStat}>{background.stat}</Text>
                  </View>
                  <TouchableOpacity style={styles.playIconContainter}>
                    <Ionicons
                      name="ios-play"
                      size={22}
                      color="#02ad94"
                      style={{ marginLeft: 4 }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 14, marginTop: 14 }}>
                  <Text style={{ color: '#fff', opacity: 0.8, lineHeight: 20 }}>
                    {background.desc}
                  </Text>
                </View>
              </LinearGradient>
            </ImageBackground>
          </View>
        </View>

        <View style={{ marginHorizontal: 14 }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 24,
              marginTop: 0,
            }}>
            Continue Watching
          </Text>
          <ImageBackground
            source={{
              uri:
                'https://i2.wp.com/cloud.estacaonerd.com/wp-content/uploads/2019/04/03094134/Coringa.jpg?fit=896%2C523&ssl=1',
            }}
            style={{ height: 250, width: '100%', backgroundColor: '#000' }}
            resizeMode="cover">
            <Text style={{ color: '#fff', padding: 14 }}>Joker</Text>

            <TouchableOpacity
              style={{
                ...styles.playIconContainter,
                position: 'absolute',
                top: '40%',
                right: '40%',
              }}>
              <Ionicons
                name="ios-play"
                size={22}
                color="#02ad94"
                style={{ marginLeft: 4 }}
              />
            </TouchableOpacity>
          </ImageBackground>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 24,
              marginTop: 36,
            }}>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>
              My List
            </Text>
            <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'normal' }}>
              View All
            </Text>
          </View>

          <FlatList
            style={{ marginBottom: 30 }}
            data={gallery}
            horizontal={true}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={{ marginRight: 20 }}>
                  <Image
                    source={{ uri: item.image }}
                    style={{ height: 300, width: 200 }}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      height: 5,
                      width: '100%',
                      backgroundColor: '#02ad94',
                      opacity: 0.8,
                    }}
                  />
                  <Ionicons
                    name="ios-play"
                    size={100}
                    color="#fff"
                    style={{
                      position: 'absolute',
                      top: '40%',
                      left: '40%',
                      opacity: 0.9,
                    }}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    overflow: 'visible',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  },
  carouselContentContainer: {
    flex: 1,
    backgroundColor: '#000',
    height: 720,
    paddingHorizontal: 14,
  },
  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
  },
  searchBoxContainer: {
    backgroundColor: 'rgba(33,33,33,0.9)',
    elevation: 10,
    borderRadius: 4,
    marginTop: 20,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  SearchBox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16,
  },
  searchBoxIcon: {
    position: 'absolute',
    right: 20,
    top: 14,
  },
  carouselContainerView: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Carousel: {
    flex: 1,
    overflow: 'visible',
  },
  carouselImage: {
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  carouselText: {
    padding: 14,
    color: '#fff',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold',
  },
  carouselIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  movieInfoContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 14,
  },
  movieName: {
    paddingLeft: 14,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 6,
  },
  movieStat: {
    paddingLeft: 14,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    opacity: 0.4,
  },
  playIconContainter: {
    backgroundColor: '#212121',
    padding: 10,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    borderWidth: 4,
    borderColor: 'rgba(2, 173, 148, 0.2)',
  },
});

export default Home;
