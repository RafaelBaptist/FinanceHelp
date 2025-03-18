import React, {useRef, useEffect} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {useTheme} from './ThemeContext';

const DarkModeToggle = () => {
  const animation = useRef(null);
  const {isDarkMode, toggleTheme} = useTheme();

  useEffect(() => {
    if (isDarkMode) {
      animation.current?.play(98, 20);
    } else {
      animation.current?.play(20, 98);
    }
  }, [isDarkMode]);

  return (
    <TouchableOpacity onPress={toggleTheme}>
      <View style={styles.container}>
        <LottieView
          ref={animation}
          source={require('../assets/Animation - 1742311478954 (1).json')}
          style={styles.lottie}
          loop={false}
          autoPlay={false}
          speed={isDarkMode ? -1 : 1}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  lottie: {
    width: 100,
    height: 100,
  },
});

export default DarkModeToggle;
