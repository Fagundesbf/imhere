
import { StyleSheet } from "react-native";
 
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
      
    },
    eventName: {
      color: '#FDFCFE',
      fontSize:24,
      fontWeight:'bold',
      marginTop: 60,
    },
    eventDate:{
      color:'#6B6B6B',
      fontSize:16   
    },
    input:{
      backgroundColor: '#1F1E25',
      height: 56,
      borderRadius: 5,
      color: '#FFF',
      paddingLeft: 16,
      fontSize: 16,
      flex:1,
      marginRight: 16
    },
    form:{
      width:'100%',
      flexDirection: 'row',
      marginTop:36,
      marginRight: 42,
      marginBottom: 36
    },
    button: { 
      backgroundColor:'#31cf67',
      width:56,
      height:56,
      borderRadius: 5,
      alignItems: "center",
      justifyContent:"center"
    },
    buttonText:{
      fontSize:24,
      color: '#fff',
    
    },
    listEmptyText: {
      color:"#fff",
      textAlign: "center",
      fontSize: 14
    }
  });