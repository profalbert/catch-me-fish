import { AppStateType } from '../store/redux-store';
import { BasketActionsTypes } from '../store/basket-reducer';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'react';
import { AllGoodsActionsTypes } from '../store/allGoods-reducer';
import { AppActionsTypes } from '../store/app-reducer';


export type TypeActiveTypeJokes = {
  price: number
  count: number
  nameActiveTypeJokes: string
}
export type TypeTypesJokes = {
  price: number
  count: number
}
export type TypeGoodInBasket = {
  idBasket: number
  id: number
  title: string
  descr: Array<string>
  count: number
  totalPrice: number
  images: Array<string>
  activeTypeJokes: TypeActiveTypeJokes
  oneJoke?: TypeTypesJokes | null
  packageJoke?: TypeTypesJokes | null
}
export type TypeGood = {
  id: number
  title: string
  descr: Array<string>
  oneJoke?: TypeTypesJokes | null
  packageJoke?: TypeTypesJokes | null
  images: Array<string>
}

export type ActionsTypes = BasketActionsTypes | AllGoodsActionsTypes | AppActionsTypes

export type GetStateType = () => AppStateType
export type DispatchType = Dispatch<ActionsTypes>
export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>



