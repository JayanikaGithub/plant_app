
import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../../assets/images/lo.png';
import CustomInput from "../../components/CustomInput";

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const {height} = useWindowDimensions();

    return (
        <View style={styles.root}>
            <Image
                source={Logo}
                style={[styles.logo, {height:600, width:600}]}
                resizeMode="contain"
            />
            <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
            <CustomInput placeholder="Password" value={password} setValue={setPassword}/>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 550,
        maxHeight: 220,
        
    },
});

export default SignInScreen;