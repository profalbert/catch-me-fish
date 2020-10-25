import { InferActionsTypes } from './redux-store';
import { ThunkType, TypeGood } from './../types/types';
import photoCardProducts from '../assets/img/photoCardProduct.jpg';
import photoOpenGood from '../assets/img/photoOpenGood.jpg';

let initialState = {
  goodsList: [
    {
      id: 1,
      title: "Светлячок Salmo Rodtip S",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Диаметр(мм): 4,5`,
        `Длина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 159,
        count: 1,
      },
      packageJoke: null,
      images: [
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoCardProducts}`,
        `${photoCardProducts}`,
      ],
    },
    {
      id: 2,
      title: "almo S",
      descr: [
        `о ходит для ночной рыбалки.`,
        `Диар(мм): 4,5`,
        `лина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: null,
      packageJoke: {
        price: 20000,
        count: 999,
      },
      images: [
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 3,
      title: "Нить",
      descr: [
        `Отлично подит дляочной ралки.`,
        `Дир(мм): 4,5`,
        `Длина(см): 3,9`,
        `Каория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 1509,
        count: 12,
      },
      packageJoke: {
        price: 20000,
        count: 999,
      },
      images: [
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 4,
      title: "Светлячок Salmo Rodtip S",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Диаметр(мм): 4,5`,
        `Длина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 159,
        count: 1,
      },
      packageJoke: {
        price: 40000,
        count: 999,
      },
      images: [
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 5,
      title: "Ведро",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Диаметр(мм): 4,5`,
        `Длина(см): 3,9`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 1000,
        count: 1,
      },
      packageJoke: {
        price: 15000,
        count: 199,
      },
      images: [
        `${photoCardProducts}`,
        `${photoCardProducts}`,
        `${photoCardProducts}`,
      ],
    },
    {
      id: 6,
      title: "Удочка Salmo Rodtip S",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Диаметр(мм): 4,5`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 15,
        count: 1,
      },
      packageJoke: null,
      images: [
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 7,
      title: "Леска Rodtip S",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Длина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 1509,
        count: 1,
      },
      packageJoke: {
        price: 20000,
        count: 999,
      },
      images: [
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 8,
      title: "Светлячок S",
      descr: [
        `Диаметр(мм): 4,5`,
        `Длина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 159,
        count: 1,
      },
      packageJoke: {
        price: 34000,
        count: 999,
      },
      images: [
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
      ],
    },
    {
      id: 9,
      title: "Светлячок Salmo Rodtip S",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Диаметр(мм): 4,5`,
        `Длина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 159,
        count: 1,
      },
      packageJoke: null,
      images: [
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoCardProducts}`,
        `${photoCardProducts}`,
      ],
    },
    {
      id: 10,
      title: "almo S",
      descr: [
        `о ходит для ночной рыбалки.`,
        `Диар(мм): 4,5`,
        `лина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: null,
      packageJoke: {
        price: 20000,
        count: 999,
      },
      images: [
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 11,
      title: "Нить",
      descr: [
        `Отлично подит дляочной ралки.`,
        `Дир(мм): 4,5`,
        `Длина(см): 3,9`,
        `Каория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 1509,
        count: 12,
      },
      packageJoke: {
        price: 20000,
        count: 999,
      },
      images: [
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 12,
      title: "Светлячок Salmo Rodtip S",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Диаметр(мм): 4,5`,
        `Длина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 159,
        count: 1,
      },
      packageJoke: {
        price: 40000,
        count: 999,
      },
      images: [
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 13,
      title: "Ведро",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Диаметр(мм): 4,5`,
        `Длина(см): 3,9`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 1000,
        count: 1,
      },
      packageJoke: {
        price: 15000,
        count: 199,
      },
      images: [
        `${photoCardProducts}`,
        `${photoCardProducts}`,
        `${photoCardProducts}`,
      ],
    },
    {
      id: 14,
      title: "Удочка Salmo Rodtip S",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Диаметр(мм): 4,5`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 15,
        count: 1,
      },
      packageJoke: null,
      images: [
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 15,
      title: "Леска Rodtip S",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Длина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 1509,
        count: 1,
      },
      packageJoke: {
        price: 20000,
        count: 999,
      },
      images: [
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 16,
      title: "Светлячок S",
      descr: [
        `Диаметр(мм): 4,5`,
        `Длина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 159,
        count: 1,
      },
      packageJoke: {
        price: 34000,
        count: 999,
      },
      images: [
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
      ],
    },
    {
      id: 17,
      title: "Светлячок Salmo Rodtip S",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Диаметр(мм): 4,5`,
        `Длина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 159,
        count: 1,
      },
      packageJoke: null,
      images: [
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoCardProducts}`,
        `${photoCardProducts}`,
      ],
    },
    {
      id: 18,
      title: "almo S",
      descr: [
        `о ходит для ночной рыбалки.`,
        `Диар(мм): 4,5`,
        `лина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: null,
      packageJoke: {
        price: 20000,
        count: 999,
      },
      images: [
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 19,
      title: "Нить",
      descr: [
        `Отлично подит дляочной ралки.`,
        `Дир(мм): 4,5`,
        `Длина(см): 3,9`,
        `Каория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 1509,
        count: 12,
      },
      packageJoke: {
        price: 20000,
        count: 999,
      },
      images: [
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 20,
      title: "Светлячок Salmo Rodtip S",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Диаметр(мм): 4,5`,
        `Длина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 159,
        count: 1,
      },
      packageJoke: {
        price: 40000,
        count: 999,
      },
      images: [
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 21,
      title: "Ведро",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Диаметр(мм): 4,5`,
        `Длина(см): 3,9`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 1000,
        count: 1,
      },
      packageJoke: {
        price: 15000,
        count: 199,
      },
      images: [
        `${photoCardProducts}`,
        `${photoCardProducts}`,
        `${photoCardProducts}`,
      ],
    },
    {
      id: 22,
      title: "Удочка Salmo Rodtip S",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Диаметр(мм): 4,5`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 15,
        count: 1,
      },
      packageJoke: null,
      images: [
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 23,
      title: "Леска Rodtip S",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Длина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 1509,
        count: 1,
      },
      packageJoke: {
        price: 20000,
        count: 999,
      },
      images: [
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 24,
      title: "Светлячок S",
      descr: [
        `Диаметр(мм): 4,5`,
        `Длина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 159,
        count: 1,
      },
      packageJoke: {
        price: 34000,
        count: 999,
      },
      images: [
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
      ],
    },
    {
      id: 25,
      title: "Светлячок Salmo Rodtip S",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Диаметр(мм): 4,5`,
        `Длина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 159,
        count: 1,
      },
      packageJoke: null,
      images: [
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoCardProducts}`,
        `${photoCardProducts}`,
      ],
    },
    {
      id: 26,
      title: "almo S",
      descr: [
        `о ходит для ночной рыбалки.`,
        `Диар(мм): 4,5`,
        `лина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: null,
      packageJoke: {
        price: 20000,
        count: 999,
      },
      images: [
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 27,
      title: "Нить",
      descr: [
        `Отлично подит дляочной ралки.`,
        `Дир(мм): 4,5`,
        `Длина(см): 3,9`,
        `Каория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 1509,
        count: 12,
      },
      packageJoke: {
        price: 20000,
        count: 999,
      },
      images: [
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 28,
      title: "Светлячок Salmo Rodtip S",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Диаметр(мм): 4,5`,
        `Длина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 159,
        count: 1,
      },
      packageJoke: {
        price: 40000,
        count: 999,
      },
      images: [
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 29,
      title: "Ведро",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Диаметр(мм): 4,5`,
        `Длина(см): 3,9`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 1000,
        count: 1,
      },
      packageJoke: {
        price: 15000,
        count: 199,
      },
      images: [
        `${photoCardProducts}`,
        `${photoCardProducts}`,
        `${photoCardProducts}`,
      ],
    },
    {
      id: 30,
      title: "Удочка Salmo Rodtip S",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Диаметр(мм): 4,5`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 15,
        count: 1,
      },
      packageJoke: null,
      images: [
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 31,
      title: "Леска Rodtip S",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Длина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 1509,
        count: 1,
      },
      packageJoke: {
        price: 20000,
        count: 999,
      },
      images: [
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 32,
      title: "Светлячок S",
      descr: [
        `Диаметр(мм): 4,5`,
        `Длина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 159,
        count: 1,
      },
      packageJoke: {
        price: 34000,
        count: 999,
      },
      images: [
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
      ],
    },
    {
      id: 33,
      title: "Светлячок Salmo Rodtip S",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Диаметр(мм): 4,5`,
        `Длина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 159,
        count: 1,
      },
      packageJoke: null,
      images: [
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoCardProducts}`,
        `${photoCardProducts}`,
      ],
    },
    {
      id: 34,
      title: "almo S",
      descr: [
        `о ходит для ночной рыбалки.`,
        `Диар(мм): 4,5`,
        `лина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: null,
      packageJoke: {
        price: 20000,
        count: 999,
      },
      images: [
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 35,
      title: "Нить",
      descr: [
        `Отлично подит дляочной ралки.`,
        `Дир(мм): 4,5`,
        `Длина(см): 3,9`,
        `Каория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 1509,
        count: 12,
      },
      packageJoke: {
        price: 20000,
        count: 999,
      },
      images: [
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 36,
      title: "Светлячок Salmo Rodtip S",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Диаметр(мм): 4,5`,
        `Длина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 159,
        count: 1,
      },
      packageJoke: {
        price: 40000,
        count: 999,
      },
      images: [
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 37,
      title: "Ведро",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Диаметр(мм): 4,5`,
        `Длина(см): 3,9`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 1000,
        count: 1,
      },
      packageJoke: {
        price: 15000,
        count: 199,
      },
      images: [
        `${photoCardProducts}`,
        `${photoCardProducts}`,
        `${photoCardProducts}`,
      ],
    },
    {
      id: 38,
      title: "Удочка Salmo Rodtip S",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Диаметр(мм): 4,5`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 15,
        count: 1,
      },
      packageJoke: null,
      images: [
        `${photoOpenGood}`,
        `${photoOpenGood}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 39,
      title: "Леска Rodtip S",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Длина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 1509,
        count: 1,
      },
      packageJoke: {
        price: 20000,
        count: 999,
      },
      images: [
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
      ],
    },
    {
      id: 40,
      title: "Светлячок S",
      descr: [
        `Диаметр(мм): 4,5`,
        `Длина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 159,
        count: 1,
      },
      packageJoke: {
        price: 34000,
        count: 999,
      },
      images: [
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
      ],
    },
    {
      id: 41,
      title: "Леска Rodtip S",
      descr: [
        `Отлично подходит для ночной рыбалки.`,
        `Длина(см): 3,9`,
        `Категория: светлячок`,
        `Летний вид.`,
        `Производитель: Salmo`,
      ],
      oneJoke: {
        price: 1509,
        count: 1,
      },
      packageJoke: {
        price: 20000,
        count: 999,
      },
      images: [
        `${photoCardProducts}`,
        `${photoOpenGood}`,
        `${photoCardProducts}`,
        `${photoOpenGood}`,
      ],
    },
  ] as Array<TypeGood>,
  
}

export const allGoodsReducer = (state = initialState, action: AllGoodsActionsTypes): typeof initialState => {
  switch(action.type) {
    case 'allGoods/TEST': {
      return {
        ...state
      };
    }
    default: 
      return state;
  }
}


export type AllGoodsActionsTypes = InferActionsTypes<typeof allGoodsActions>

// тестовый образец
export const allGoodsActions = {
	allGoodsSuccess: () => ({
    type: 'allGoods/TEST', payload: {}    
	} as const),
}

// тестовый образец
export const allGoodsThunk = (): ThunkType => async (dispatch, getState) => {
	console.log("Test!")
}







