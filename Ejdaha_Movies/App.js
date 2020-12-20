import React, {Component} from 'react';
import {styles} from './myStyles';
import {SafeAreaView, ScrollView, View, Text, StatusBar, TouchableOpacity, TextInput,} from 'react-native';
import {Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import MovieLists from './Content'


class App extends Component {
  constructor(){
    super()
    this.state = {
      urlLink: '',
      urlLinkData: []
    }
  }
  linkMain= 'http://api.tvmaze.com/search/shows?q=spider';
  linkChanged = '';

  dataJson = []
  componentDidMount = async() => {
    try{
      const response = await fetch(this.linkMain)
      const data = await response.json()
      this.dataJson = data
      //this.setState(prevState => ({urlLinkData: prevState.urlLinkData = data}))
      console.log('didmountfdfd  ' + this.dataJson[0].show.name)
    }
    catch (e){
      console.log('url is wrong' + e)
    }
  }

  // componentDidUpdate = async() =>{
  //   try{
  //     const response = await fetch (this.linkChanged)
  //     const data = await response.json()
  //     this.dataJson = data
  //     console.log('didupdate')
  //   }
  //   catch (e){
  //     console.log('url is wrond upd' + e)
  //   }
  // }
  //<Image style= {styles.resIMG}>{all.show.image}</Image>
    


// fetch('http://api.tvmaze.com/search/shows?q=fast').then(data => {console.log(data)})
  render(){

    

    return (
      <View style={styles.container}>
        <View style = {styles.header}>
          <View style = {styles.headerLogo}></View>
          <View style = {styles.headerInput}>
            <TextInput style = {styles.inputText}></TextInput>
            <TouchableOpacity style = {styles.inputBtn}></TouchableOpacity>
          </View>
        </View>

        <View style = {styles.results}>
          <ScrollView contentContainerStyle ={styles.resultsScrollContainer} style = {styles.resultsScroll}>
          <Text style={styles.textstyle}>asfasfas</Text>
            <MovieLists jsonFile = {this.dataJson}/>
            <Text style={styles.textstyle}>asfasfas</Text>
          </ScrollView>
        </View>
      </View>
    );
  };
  }




export default App;
