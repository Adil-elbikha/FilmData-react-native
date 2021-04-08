// Components/Search.js
import React from 'react'
import {StyleSheet,View, Button, TextInput, FlatList,Image, Text} from  'react-native'
//import films from '../Helpers/FilmData'
import FilmItem from "./FilmItem"
import {getFilmFromApiWithSearchedText} from '../API/TMDBApi'

class Search extends React.Component{
    constructor(props){
        super(props);
       this._films= []
   }
    _loadFilms  (){
        getFilmFromApiWithSearchedText("star").then(data => {
            this._films = data.results
            this.forceUpdate()
        });
    }
    render(){
        
    return(
        <View style={styles.main_container}>
            <TextInput style={ styles.textinput} placeholder="Titre du film "/>
            <Button style={{height:50}}title="Recherche"  onPress={() =>this._loadFilms()}/>
         <FlatList
            data={this._films}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <FilmItem film={item}/>}
            />
        </View>
        )

        
    
    } 
}
const styles =StyleSheet.create({
    main_container: {
        marginTop: 80, flex: 1
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor :'#000000',
        borderWidth: 1,
        paddingLeft:5
    }
})


export default Search