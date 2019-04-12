import { combineReducers } from "redux";
import allHeroesReducer from "./all-heroes/reducer";
import chosenHeroesReducer from "./chosen-heroes/reducer";

export default combineReducers({
    allHeroes: allHeroesReducer,
    chosenHeroes: chosenHeroesReducer
})