import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    carContainer: {
      width: "100%",
      height: Dimensions.get('screen').height,
    },
    titles: {
      marginTop: "30%",
      width: "100%",
      alignItems: 'center',
    },
    title: {
      fontSize: 40,
      fontWeight: '500'
    },
    subtitle: {
      fontSize: 16,
      color: '#5c5c62',
    },
    subtitleCTA: {
      fontSize: 16,
      textDecorationLine: "underline",
      
    },
    image: {
      height: "100%",
      width: "100%",
      resizeMode: 'cover',
      position: 'absolute'
    },
    buttonsContainer: {
      position: "absolute",
      bottom: 50,
      width: "100%",
  },
  
  
  });
export default styles;  