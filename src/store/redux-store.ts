import {createStore, combineReducers,
  applyMiddleware, compose} from 'redux';
import {basketReducer} from './basket-reducer';
import {allGoodsReducer} from './allGoods-reducer';
import {appReducer} from './app-reducer';
import thunkMiddleware from 'redux-thunk';
 
 
let rootReducer = combineReducers({
  basketPage: basketReducer,
  allGoodsPage: allGoodsReducer,
  appPage: appReducer,
});


type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>


export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U} ? U : never


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
// @ts-ignore
window.__store__ = store;


export default store;


 