import styled from 'styled-components/native';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useTheme} from '../../theme/ThemeContext';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
  margin-left: 15px;
  margin-bottom: 15px;
  width: 100%;
  max-height: 60px;
`;
export const Title = styled.Text`
  font-size: 22px;
  margin-left: 8px;
  color: ${({theme}) => theme.colors.inputText};
  font-weight: 600;
`;

export const ButtonMenu = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        source={require('../../assets/icons8-menu-128.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
