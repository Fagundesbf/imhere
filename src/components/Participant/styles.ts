
import { StyleSheet } from "react-native";
 
export const styles = StyleSheet.create({

    container:{
        width:'100%',
        backgroundColor: "#1F1E25",
        flexDirection: 'row',
        alignItems:'center',
        borderRadius: 5,
        marginBottom: 10,
    },
    name:{
        flex:1,
        fontSize: 16,
        color:"#fff",
        marginLeft:16
    },
    button: { 
        backgroundColor:'red',
        width:56,
        height:56,
        borderRadius: 5,
        alignItems: "center",
        justifyContent:"center"
      },
      buttonText:{
        fontSize:24,
        color: '#fff',
      
      }
});
