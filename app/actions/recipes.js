import * as types from './types'
import Api from '../lib/api'

export function fetchRecipes(ingredients) {
  return (dispatch, getState) => {
    const params = [
      `ingredients=${encodeURIComponent(ingredients)}`,
      `fillIngredients=false`,
      `limitLicense=fale`,
      `number=20`,
      `ranking=1`,
    ].join('&');
    return Api.get(`/users`).then(resp => {
      dispatch(setSearchedRecipes({recipes: resp}))
    }).catch(ex => {
      console.log(ex);
    })
  }
}

export function setSearchedRecipes({recipes}) {
  return {
    type: types.SET_SEARCH_RECIPES,
    recipes
  }
}

export function addRecipe() {
  return {
    type: types.ADD_RECIPE,
  }
}