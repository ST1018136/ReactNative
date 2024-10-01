import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, ScrollView, FlatList, ImageBackground, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import classNames from 'classnames';
import {TrashIcon} from  "react-native-heroicons/solid";


import Screen from './screen';

import { createStackNavigator } from 'react-navigation-stack';

export default function HomeScreen() {
    return (
      
   
           
              <><><>
                    <SafeAreaView style={styles.background}>
                        <View style={styles.background}>
                            <View style={styles.icon}>
                                <TouchableOpacity>
                                    <Image source={require("../assets/images/welcome.png")} style={styles.objectCover} />
          
                                </TouchableOpacity>
                                <View style={styles.font1}>
                                    <Text style={styles.font2}> Welcome User</Text>
                                    <Text style={styles.font3}> Chrisstoffel's Ramen Restaurant</Text>
          
                                </View>
                                <View>
                                    <Text style={styles.text1}>Order Your </Text>
                                    <Text style={styles.text2}>Favourite Ramen 🤭</Text>
          
                                </View>
                                <View style={styles.main}>
                                    <TextInput style={styles.Input}
                                        keyboardType="default"
                                        placeholder="Search Dishes,..."
                                    >Search Dishes,...</TextInput>
          
          
          
                                </View>
                            </View>
          
                        </View>
                    </SafeAreaView>
                </>
          
                    <Text style={styles.categories}> Dish Name</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{
                            backgroundColor: '#fff',
                            margin: 14,
                            borderRadius: 7,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                        }}>
          
                            <Image source={require("../assets/images/spicy2.jpg")}
                                style={{
                                    height: 200,
                                    width: 200,
                                }} />
                            <Text> Spicy Ramen Noodles</Text>
          
          
                        </View>
                        <View style={{
                            backgroundColor: '#fff',
                            margin: 14,
                            borderRadius: 7,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                        }}>
          
                            <Image source={require("../assets/images/beef1.jpg")}
                                style={{
                                    height: 200,
                                    width: 200,
                                }} />
                            <Text> Spicy Ramen Noodles</Text>
          
                        </View>
                        <View style={{
                            backgroundColor: '#fff',
                            margin: 14,
                            borderRadius: 7,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                        }}>
          
                            <Image source={require("../assets/images/beef2.jpg")}
                                style={{
                                    height: 200,
                                    width: 200,
                                }} />
                            <Text> Spicy Ramen Noodles</Text>
          
                        </View>
                        <View style={{
                            backgroundColor: '#fff',
                            margin: 14,
                            borderRadius: 7,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                        }}>
          
                            <Image source={require("../assets/images/chicken1.jpg")}
                                style={{
                                    height: 200,
                                    width: 200,
                                }} />
                            <Text> Spicy Ramen Noodles</Text>
          
                        </View>
                        <View style={{
                            backgroundColor: '#fff',
                            margin: 14,
                            borderRadius: 7,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                        }}>
          
                            <Image source={require("../assets/images/chicken2.jpg")}
                                style={{
                                    height: 200,
                                    width: 200,
                                }} />
                            <Text> Spicy Ramen Noodles</Text>
          
                        </View>
                        <View style={{
                            backgroundColor: '#fff',
                            margin: 14,
                            borderRadius: 7,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                        }}>
          
                            <Image source={require("../assets/images/halaal1.jpg")}
                                style={{
                                    height: 200,
                                    width: 200,
                                }} />
                            <Text> Spicy Ramen Noodles</Text>
          
                        </View>
                        <View style={{
                            backgroundColor: '#fff',
                            margin: 14,
                            borderRadius: 7,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                        }}>
          
                            <Image source={require("../assets/images/halaal2.jpg")}
                                style={{
                                    height: 200,
                                    width: 200,
                                }} />
                            <Text> Spicy Ramen Noodles</Text>
          
                        </View>
                        <View style={{
                            backgroundColor: '#fff',
                            margin: 14,
                            borderRadius: 7,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                        }}>
          
                            <Image source={require("../assets/images/veggie1.jpg")}
                                style={{
                                    height: 200,
                                    width: 200,
                                }} />
                            <Text> Spicy Ramen Noodles</Text>
          
                        </View>
                        <View style={{
                            backgroundColor: '#fff',
                            margin: 14,
                            borderRadius: 7,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                        }}>
          
                            <Image source={require("../assets/images/veggie2.jpg")}
                                style={{
                                    height: 200,
                                    width: 200,
                                }} />
                            <Text> Spicy Ramen Noodles</Text>
          
                        </View>
          
          
                    </ScrollView>
                              <ScrollView showsVerticalScrollIndicator ={false}>
                               
              
                                
          
                              </ScrollView>
                </>
                        
                    </>
                
                      
          
                          
                  
            );
          }
        

          const styles = StyleSheet.create({
            background: {
                backgroundColor: 'white',
                marginTop: 10,
            },
            
            Input: {
                marginLeft: 20,
                marginTop: 10,
                color: 'white',
                fontSize: 20,
            },
            
            categories:{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'green',
            paddingTop: 10,
            },
            
            
            main: {
                backgroundColor: 'grey',
                width: 410,
                height: 50,
                borderRadius: 40,
                borderWidth:1,
                
            },
            
            text1:{
                fontSize: 35,
                marginLeft: 15,
               
            },
            text2: {
                fontWeight: 'bold',
                fontSize: 40,
                marginLeft: 15,
            },
            
            icon:{
            alignItems: 'baseline',
            },
            
            objectCover: {
                
                height: 60,
                width: 60,
                borderRadius: 200/2,
                marginBottom: 30,
                marginRight: 50,
            },
            font1: {
              padding: 10,
                
                
            },
            font2: {
                fontSize: 30,
                fontWeight: 'bold',
                backgroundColor: 'white',
                marginRight: 50,
                marginTop : 10,
                borderRadius: 50,
            },
             font3: {
                fontSize :20,
                backgroundColor: 'white',
                borderRadius: 20,
                marginTop: 10,
             },
            DropDownMenu:{
                position: 'absolute',
                top: 4.5,
                right: 1.5,
                padding: 15,
                borderRadius: 15,
                backgroundColor: 'gray'
            }
            
            })
   
   
     