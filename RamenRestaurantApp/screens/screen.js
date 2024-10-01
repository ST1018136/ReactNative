import React from 'react'

import {View, Text, Stylesheet, SafeAreaView, TouchableOpacity} from 'react-native'

export default class Screen extends React.Component {
    render() {
        return (
            <View>
                <SafeAreaView style={{flex:1}}>
                    <TouchableOpacity style={{ alignItems: "flex-end", margin:17}}
                    onPress={this.props.navigation.openDrawer}>

                    </TouchableOpacity>
                        <View style={{flex:1, alignItems: "center", justifyContent: 'center'}}>
                            <Text style={styles.text}>{this.props.name} Scree </Text>
                        </View>

                </SafeAreaView>
            </View>
        )
    }
}

const styles =stylesheet.create({
    container: {
        flex:1,
        backgroundcolor: '#fff'
    },
    text: {
        color: '##161924',
        fontsize: 20,
        fontweight: "500"
    },
})