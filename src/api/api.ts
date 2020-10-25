// здесь будет обращение в апи и обработка в reducers
// в reducer импортируется объект с ассинхронными функциями к апишке в данном случае это getUsers
// в таком виде к примеру: let response = await usersAPI.getUsers();
// в response придут все нужные данные (данные эти прогонять через actionCreators, а не как-бдуь напрямую) - для этого и нужен redux

import axios from 'axios';
import { ThunkType } from '../types/types';


let instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': `c8ea854d-e495-4696-9913-9b1e4acda573`
  }
});


export enum ResultStandartCodes {
  Success = 0 | 200,
}


type UsersApiTypes = {
  getUsers: {
		items: Array<any>
		totalCount: number
  }
}
export const usersAPI = {
  async getUsers (currentPage = 1, pageSize = 10) {
    return instance.get<UsersApiTypes["getUsers"]>(`users?page=${currentPage}&count=${pageSize}`)
  }
}





// пример использования вызова метода из этого файла в myName-reducer:

export const requestRoomIfPersonAutorizeted = (room: number): ThunkType => async (dispatch) => { // thunk-creator
  const response = await usersAPI.getUsers(room, 10) // использвание метода из api.ts 
  if (response.status === ResultStandartCodes.Success) {
    // any code
  }
};
