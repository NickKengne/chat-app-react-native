import React, { useState } from 'react';
import { SafeAreaView, Dimensions, ScrollView, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import Colors from '../constants/Colors';
import Font from '../constants/Font';
import BlockInput from '../components/BlockInput';
import ButtonLog from '../components/ButtonLog';


const { height } = Dimensions.get('screen')
const Register = ({ navigation }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (name, value) => {
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handlePhoneChange = (value) => {
        // Remove non-digit characters and limit to 9 digits
        const cleanedPhone = value.replace(/\D/g, '').substr(0, 9);

        // Format phone number to "xxx-xxx-xxx"
        const formattedPhone = cleanedPhone.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3');

        handleInputChange('phone', formattedPhone);
    };

    const handleRegister = () => {
        const { username, email, phone, password, confirmPassword } = formData;
        console.log(formData);
    };

    const inputFields = [
        {
            name: 'username',
            label: 'Username',
            placeholder: 'Enter your username account',
        },
        {
            name: 'email',
            label: 'Email',
            placeholder: 'Enter your email account',
            keyboardType: "email-address"
        },
        {
            name: 'phone',
            label: 'Phone Number',
            placeholder: 'Phone number ex: (+237) xxx-xxx-xxx',
            keyboardType: "phone-pad"
        },
        {
            name: 'password',
            label: 'Password',
            placeholder: 'Tap your secret code',
            secureTextEntry: true,
            type: "password"
        },
        {
            name: 'confirmPassword',
            label: 'Confirm Password',
            placeholder: 'Confirm your secret code',
            secureTextEntry: true,
            type: "password"
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView overScrollMode="never">
                <View style={styles.topbar}>
                    <ImageBackground source={require('../assets/image/feast.jpg')} style={{
                        width: "150%",
                        height: height / 4,
                        position: "absolute",
                        top: 0,
                    }} />
                    <View style={{
                        position: "absolute",
                        top: 0,
                        width: "110%",
                        height: height / 4,
                        backgroundColor: "#00000090",
                        paddingHorizontal: 12,
                        justifyContent: 'center',
                    }}>
                        <Text style={styles.title}>Create your account 🎉</Text>
                        <Text style={styles.subtitle}>
                            Create an account to take advantage of all the events, Let's go ! .
                        </Text>
                    </View>
                </View>

                {inputFields.map((field, index) => (
                    <BlockInput
                        key={index}
                        label={field.label}
                        placeholder={field.placeholder}
                        secureTextEntry={field.secureTextEntry}
                        value={formData[field.name]}
                        onChangeText={(text) => {
                            if (field.name == "phone")
                                handlePhoneChange(text)
                            else
                                handleInputChange(field.name, text)

                        }}
                        keyboardType={field.keyboardType}
                        type={field.type}
                    />
                ))}

                <ButtonLog color={Colors.event_primary} name={'Sign In'} onClick={handleRegister} />

                <TouchableOpacity
                    style={{
                        width: '90%',
                        alignSelf: 'center',
                        marginBottom: 20,
                    }}
                    onPress={() => navigation.replace('Login')}
                >
                    <Text
                        style={{
                            color: Colors.event_primary,
                            textAlign: 'center',
                        }}
                    >
                        already an account ?{' '}
                        <Text
                            style={{
                                color: Colors.event_secondary,
                            }}
                        >
                            Login
                        </Text>
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    topbar: {
        width: '100%',
        height: height / 4,
        paddingHorizontal: 12,
        justifyContent: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 26,
        color: Colors.white,
        fontFamily: Font['mulish-bold'],
    },
    subtitle: {
        fontFamily: Font['mulish-regular'],
        color: '#ffffff60',
    },
});
