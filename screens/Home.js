import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Pressable} from 'react-native';

const Home = ({ navigation }) => {
  
  return(
      < >
        <TouchableOpacity 
          style={styles.aboutIconContainer}
          onPress={() => navigation.navigate('About')}>
          <Image
            style={styles.aboutIcon}
            source={require('./../assets/info_3d_icon.png')}
          />
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.headTitle}>QUIZ APP</Text>
          <Image
            style={styles.headImage}
            source={require('./../assets/img_idea.png')}
          />
          <Text style={styles.headDisc}>
            1000+  General Knowledge 
            Questions to Challenge 
            Yourself
          </Text>
          <Pressable 
            style={styles.playButton}
            onPress={() => navigation.navigate('Playground')}
            >
            <Text style={styles.playButtonText}>Play</Text>
          </Pressable>
        </View>
      </ >
    /* <SafeAreaView style={{flex:1,backgroundColor:'#bbb'}}>
    </SafeAreaView>*/
    );
}

const styles = StyleSheet.create({
  aboutIconContainer:{
    position: 'absolute',
    right: 0,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  aboutIcon:{
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  container:{
    margin: 10,
    flex: 1,
    alignItems: 'center',
  },
  headTitle:{
    color: '#EBECEE',
    fontSize: 50,
    fontFamily: 'RedHatDisplay',
    textAlign: 'center',
    marginTop: 100,
  },
  headImage:{
    width: '100%',
    height: '35%',
    resizeMode: 'contain',
    margin:16,
  },
  headDisc:{
    color: '#96D6FD',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Alata',
    width: 250,
    margin: 20,
  },
  playButton:{
    width: 250,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6, 
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#EBC169',
  },
  playButtonText:{
    color: 'white',
    fontSize: 20,
    fontFamily: 'Alata',
    textAlign: 'center',
    marginBottom: 3,
  }
});

export default Home