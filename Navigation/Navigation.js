// Navigation/Navigation.js

import { createAppContainer } from 'react-navigation'
import Search from '../components/Search'
import { createStackNavigator } from 'react-navigation-stack'
import FilmDetial from '../components/FilmDetial'

const SearchStackNavigator = createStackNavigator({
  Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetial:{
      screen : FilmDetial
  }
})
export default createAppContainer(SearchStackNavigator)