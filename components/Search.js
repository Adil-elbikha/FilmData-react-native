// Components/Search.js
import React from 'react'
import {StyleSheet,View, Button, TextInput, FlatList,Image, Text, ActivityIndicator} from  'react-native'
//import films from '../Helpers/FilmData'
import FilmItem from "./FilmItem"
import {getFilmFromApiWithSearchedText} from '../API/TMDBApi'


class Search extends React.Component{
    
  constructor(props) {
    super(props)
    this.searchedText = "" 
    this.state = {
      films: [],
      isLoading:false
    }
  }

  _loadFilms() {
      this.setState({ isLoading: true})
    if (this.searchedText.length > 0) { 
        getFilmFromApiWithSearchedText(this.searchedText).then(data => {
          this.setState({ films: data.results,
        isLoading:false
        })
      })
    }
  }
  _displayLoading() {//fonction qui va gérer tout cela pour nous et, vous allez le voir, c'est très simple
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
          
        </View>
      )
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text 
  }
  //filmDetial
  _displayDetailForFilm = (idFilm) => {
    console.log("Display film with id " + idFilm)
  }

  render() {
    console.log(this.state.isLoading)
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder='Titre du film'
          onChangeText={(text) => this._searchTextInputChanged(text)}
        />
        <Button title='Rechercher' onPress={() => this._loadFilms()}/>
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm}/>}
        />
        {this._displayLoading()}
      </View>
    )
  }
}
const styles =StyleSheet.create({
    main_container: {
        flex: 1
       
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor :'#000000',
        borderWidth: 1,
        paddingLeft:5
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }
})


export default Search