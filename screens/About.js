import { StyleSheet, Text, View, Button } from 'react-native';

const About = () => {
  return(
    /* <SafeAreaView style={{flex:1,backgroundColor:'#bbb'}}>*/
      <View style={styles.container}>
        <Text style={styles.item}>About</Text>
      </View>
    /*</SafeAreaView>*/
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item : {
    flex:1,
    alignSelf: 'flex-start',
    margin: 10,
  }
  
});

export default About 