import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Pressable} from 'react-native';

const Playground = ({ navigation }) => {
  return <Button 
            title="Back" 
            onPress={() => navigation.goBack()}
            />
}

export default Playground