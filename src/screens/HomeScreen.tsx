import React from 'react';
import { ActivityIndicator, Dimensions, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        <View
          style={{
            height: 440,
          }}>
          <Carousel
            mode="parallax"
            style={{ width: windowWidth, justifyContent: 'center' }}
            pagingEnabled={false}
            windowSize={2}
            snapEnabled
            // This props are for the item in the middle
            width={300}
            height={420}
            modeConfig={{
              // How the "main" item will look
              parallaxScrollingScale: 0.9,
              // How separate the adjacent items will be
              parallaxScrollingOffset: 40,
              // How big the adjacent items will look compared to the "main" item
              parallaxAdjacentItemScale: 0.75,
            }}
            data={nowPlaying}
            renderItem={({ item }) => <MoviePoster movie={item} />}
          />
        </View>

        <HorizontalSlider title="Popular" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Upcoming" movies={upcoming} />
      </View>
    </ScrollView>
  );
};
