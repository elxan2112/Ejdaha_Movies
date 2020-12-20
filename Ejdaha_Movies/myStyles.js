import {StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        flex: 0.25,
        backgroundColor: 'red',
    },
    headerLogo:{
        flex:0.7,
        backgroundColor: 'white',
    },
    headerInput:{
        flex: 0.3,
        flexDirection: 'row',
    },
    inputText:{
        flex: 0.8
    },
    inputBtn:{
        flex: 0.2,
        backgroundColor: 'white',
    },
    results:{
        flex: 0.75,
        backgroundColor: 'yellow',
    },
    resultsScroll:{
        
    },
    resultsScrollContainer:{
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textstyle:{
        fontSize: 60
    }
});