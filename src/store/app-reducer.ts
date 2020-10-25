import { initialBasketStateFromLocalStrorageThunk } from './basket-reducer';
import { InferActionsTypes } from './redux-store';
import { ThunkType } from './../types/types';


let initialState = {
  isOpenForm: false as boolean,
	isShowGroupVK: false as boolean,
	initializedApp: false as boolean,
}

export const appReducer = (state = initialState, action: AppActionsTypes): typeof initialState => {
 switch(action.type) {
 	case 'app/HANDLE_OPEN_FORM_SUCCESS': {
	  return {
	  	...state,
			isOpenForm: action.payload.isOpenForm,
	  };
   }
   case 'app/ON_SHOW_GROUP_VK_SUCCESS': {
	  return {
	  	...state,
			isShowGroupVK: true,
	  };
	 }
	 case 'app/ON_HIDE_GROUP_VK_SUCCESS': {
	  return {
	  	...state,
			isShowGroupVK: false,
	  };
	 }
	 case 'app/INITIALIZED_APP_SUCCESS': {
	  return {
	  	...state,
			initializedApp: true,
	  };
	 }
	 default: 
	  return state;
 }
}


export type AppActionsTypes = InferActionsTypes<typeof appActions>

export const appActions = {
	handleOpenFormSuccess: (isOpenForm: boolean) => ({
		type: 'app/HANDLE_OPEN_FORM_SUCCESS', payload: {isOpenForm}
  } as const),
  onShowGroupVKSuccess: () => ({
		type: 'app/ON_SHOW_GROUP_VK_SUCCESS'
	} as const),
	onHideGroupVKSuccess: (isShowGroupVK: boolean) => ({
		type: 'app/ON_HIDE_GROUP_VK_SUCCESS', payload: {isShowGroupVK}
	} as const),
	initializedAppSuccess: () => ({
		type: 'app/INITIALIZED_APP_SUCCESS'
	} as const),
}


export const onSubmitDataForCallbackThunk = (formData: any): ThunkType => async (dispatch, getState) => {
  console.log("Все данные отзыва пользователя: ", formData)
}

export const onShowGroupVKThunk = (): ThunkType => async (dispatch, getState) => {
	let switchShowGroupVK = getState().appPage.isShowGroupVK
	if (!switchShowGroupVK) {
		setTimeout(() => {
			dispatch(appActions.onShowGroupVKSuccess())
		}, 1000 * 60)
	}
}

export const onHideGroupVKThunk = (isShowGroupVK: boolean): ThunkType => async (dispatch, getState) => {
	dispatch(appActions.onHideGroupVKSuccess(isShowGroupVK))
}

export const initializeAppThunk = (): ThunkType => async (dispatch) => {
	let promise1 = await dispatch(onShowGroupVKThunk())
	let promise2 = await dispatch(initialBasketStateFromLocalStrorageThunk())
	await Promise.all([promise1, promise2])
	setTimeout(() => {
		dispatch(appActions.initializedAppSuccess());
	}, 1000 * 2) // todo: поставить 0 здесь, когда будет сделан сайт полностью 
	// (поставил 2 сек пока что, чтобы было видно что слайдер есть, 
	// ибо без запросов на сервак этой задержки нет и его тупо не видно, 
	// так как он моментально пропадает с экрана)
}