import { InferActionsTypes } from './redux-store';
import { ThunkType, TypeGood, TypeGoodInBasket, TypeActiveTypeJokes } from './../types/types';


let initialState = {
  goodsInBasket : [] as Array<TypeGoodInBasket>,
  totalPrice: 0 as number,
}

export const basketReducer = (state = initialState, action: BasketActionsTypes): typeof initialState => {
  switch(action.type) {
    case 'basket/ADD_TYPE_GOOD_IN_BASKET_SUCCESS': {
      let good = action.payload.good
      let newGoodInBasket: TypeGoodInBasket = {
        idBasket: Date.now(),
        id: good.id,
        title: good.title,
        count: 1,
        totalPrice: action.payload.activeTypeJokes.price,        
        descr: good.descr,
        images: good.images,
        activeTypeJokes: action.payload.activeTypeJokes,
        oneJoke: good.oneJoke,
        packageJoke: good.packageJoke,
      }    
      let newState = {
        ...state,
        goodsInBasket: [...state.goodsInBasket, newGoodInBasket],
      }
      localStorage.setItem('basket', JSON.stringify(newState));
      return newState;
    }
    case 'basket/REMOVE_TYPE_GOOD_FROM_BASKET_SUCCESS': {
      let good = action.payload.good
      let newGoodsInBasket: Array<TypeGoodInBasket> = state.goodsInBasket
        .filter(item => !(item.id === good.id && item.activeTypeJokes.nameActiveTypeJokes === action.payload.activeTypeJokes.nameActiveTypeJokes))
      let newState = {
        ...state,
        goodsInBasket: [...newGoodsInBasket],
      }
      localStorage.setItem('basket', JSON.stringify(newState));
      return newState;
    }
    case 'basket/CHANGE_TOTAL_PRICE_SUCCESS': {
      let totalPrice = state.goodsInBasket.map(item => item.activeTypeJokes.price * item.count).reduce((sumTotalPrice, currentPrice) => sumTotalPrice + currentPrice, 0)
      let newState = {
        ...state,
        totalPrice: totalPrice,
      }
      localStorage.setItem('basket', JSON.stringify(newState));
      return newState;
    }
    case 'basket/CLEAR_BASKET_SUCCESS': {
      let newState = {
        ...state,
        goodsInBasket: [],
      }
      localStorage.setItem('basket', JSON.stringify(newState));
      return newState;
    }
    case 'basket/CHANGE_COUNT_GOOD_SUCCESS': {
      let goodBasket = action.payload.goodBasket
      let changeCountNum = action.payload.changeCountNum

      let changeGoodsInBasket: Array<TypeGoodInBasket> = state.goodsInBasket.map(item => {
        if (item.id === goodBasket.id && item.activeTypeJokes.nameActiveTypeJokes === goodBasket.activeTypeJokes.nameActiveTypeJokes) {
          if (item.count >= 999 && changeCountNum === 1) item.count = 999
          if (item.count <= 1 && changeCountNum === -1) item.count = 1
          item.count += changeCountNum
          item.totalPrice = item.count * item.activeTypeJokes.price
        }        
        return item
      })

      let newState = {
        ...state,
        goodsInBasket: [...changeGoodsInBasket],
      }
      localStorage.setItem('basket', JSON.stringify(newState));
      return newState;
    }
    case 'basket/INITIAL_BASKET_STATE_FROM_LOCAL_STORAGE_SUCCESS': {
      let basketStateFromLocalStorage = JSON.parse(localStorage.getItem('basket') || '{}')  
      return {
        ...state,
        ...basketStateFromLocalStorage,
      };
    }
    default:
      return state;
  }
}


export type BasketActionsTypes = InferActionsTypes<typeof basketActions>

export const basketActions = {
	addTypeGoodInBasketSuccess: (good: TypeGood, activeTypeJokes: TypeActiveTypeJokes) => ({
    type: 'basket/ADD_TYPE_GOOD_IN_BASKET_SUCCESS', payload: {good, activeTypeJokes}    
  } as const),
  removeTypeGoodFromBasketSuccess: (good: TypeGood | TypeGoodInBasket, activeTypeJokes: TypeActiveTypeJokes) => ({
    type: 'basket/REMOVE_TYPE_GOOD_FROM_BASKET_SUCCESS', payload: {good, activeTypeJokes}    
  } as const),
  changeTotalPriceSuccess: () => ({
    type: 'basket/CHANGE_TOTAL_PRICE_SUCCESS'    
  } as const),
  clearBasketSuccess: () => ({
    type: 'basket/CLEAR_BASKET_SUCCESS'    
  } as const),
  changeCountGoodSuccess: (goodBasket: TypeGoodInBasket, changeCountNum: number) => ({
    type: 'basket/CHANGE_COUNT_GOOD_SUCCESS', payload: {goodBasket, changeCountNum} 
  } as const),
  initialBasketStateFromLocalStorageSuccess: () => ({
    type: 'basket/INITIAL_BASKET_STATE_FROM_LOCAL_STORAGE_SUCCESS'
  } as const),
}


export const addTypeGoodInBasketThunk = (good: TypeGood, activeTypeJokes: TypeActiveTypeJokes): ThunkType => async (dispatch, getState) => {
  dispatch(basketActions.addTypeGoodInBasketSuccess(good, activeTypeJokes))
	dispatch(basketActions.changeTotalPriceSuccess())
}
export const removeTypeGoodFromBasketThunk = (good: TypeGood | TypeGoodInBasket, activeTypeJokes: TypeActiveTypeJokes): ThunkType => async (dispatch) => {
	dispatch(basketActions.removeTypeGoodFromBasketSuccess(good, activeTypeJokes));
	dispatch(basketActions.changeTotalPriceSuccess());
}
export const clearBasketThunk = (): ThunkType => async (dispatch) => {
	dispatch(basketActions.clearBasketSuccess())
	dispatch(basketActions.changeTotalPriceSuccess())
}
export const changeCountGoodThunk = (goodBasket: TypeGoodInBasket, changeCountNum: number): ThunkType => async (dispatch) => {
	dispatch(basketActions.changeCountGoodSuccess(goodBasket, changeCountNum))
	dispatch(basketActions.changeTotalPriceSuccess())
}


export const onSubmitAllDataThunk = (formData: any): ThunkType => async (dispatch, getState) => {
  const orderedGoods = getState().basketPage.goodsInBasket
  const totalPriceOrderedGoods = getState().basketPage.totalPrice
	const allData = {
    formData: {...formData},
    orderedGoods: {...orderedGoods},
    totalPriceOrderedGoods: totalPriceOrderedGoods,
  }
  dispatch(basketActions.clearBasketSuccess())
  console.log("Все данные заказа пользователя: ", allData)
}


export const initialBasketStateFromLocalStrorageThunk = (): ThunkType => async (dispatch) => {
	dispatch(basketActions.initialBasketStateFromLocalStorageSuccess())
}



