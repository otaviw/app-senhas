import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from "react-native"
import Slider from "@react-native-community/slider"
import {useState} from "react"
import {ModalPassword} from "../components/modal"
 
export default function app(){
    const [size, setSize] = useState(6)
    const [passwordValue, setPasswordValue] = useState("")
    const [modalVisible, setModalVisible] = useState(false)

    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%"

    function generatePassword(){
        let password = "";
        for(let i = 0, n = charset.length; i<size; i++){
            password += charset.charAt(Math.floor(Math.random()*n))
        }
        setPasswordValue(password)
        setModalVisible(true)
    }

    return(
        <View style={styles.container}>
            <Image source={require("../.././assets/images/logo.png")} style={styles.logo}/>

            <Text style={styles.title}>{size} caracteres</Text>

            <View style={styles.area}>
                <Slider 
                style={styles.slider} 
                minimumValue={6} 
                maximumValue={20} 
                maximumTrackTintColor="#BF9ACA" 
                minimumTrackTintColor="#000" 
                thumbTintColor="#392de9" 
                value={size}
                onValueChange={(value)=>setSize(Number(value.toFixed(0)))}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={generatePassword}>
                <Text style={styles.buttonText}>Gerar senha</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType={"fade"} transparent={true}>
                <ModalPassword password={passwordValue} handleClose={()=>setModalVisible(false)}/>
            </Modal>
        </View> 
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    }, 
    logo:{
        marginBottom: 60,
    },
    title:{
        fontSize: 30,
        fontWeight: "bold"
    },
    area:{
        marginTop: 14,
        marginBottom: 14,
        width: "80%",
        backgroundColor: "#F3F3FF",
        borderRadius: 8,
        padding: 8,
    }, 
    slider:{
        height: 50,
    },
    button:{
        backgroundColor: "#392de9",
        width: "80%",
        height: 50,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 18
    },
    buttonText:{
        fontSize: 20,
        color: "#FFF"
    }
})