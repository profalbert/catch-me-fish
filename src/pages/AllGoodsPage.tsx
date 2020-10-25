import React, {useState, useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';
import CardProduct from '../components/common/CardProduct';
import styleAG from './AllGoodsPage.module.css';
import iconList from '../assets/icons/iconList.svg'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppStateType } from '../store/redux-store';
import { TypeGood } from '../types/types';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import { compose } from 'redux';
import cn from 'classnames'


const listArray = [
  {
    "id": 1,
    "MCTitle": "Аксессуары для рыбалки",
    "MCList": ["Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 2,
    "MCTitle": "Тубусы, коробки, ящики для снастей",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 3,
    "MCTitle": "Сумки, мешки, рюкзаки, чехлы",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 4,
    "MCTitle": "Эхолоты",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 5,
    "MCTitle": "Вертлюги, карабины",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 6,
    "MCTitle": "Верши, подъемники, рачевни",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 7,
    "MCTitle": "Поводки",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 8,
    "MCTitle": "Подсачеки",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 9,
    "MCTitle": "Садки",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 10,
    "MCTitle": "Резина рыболовная",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 11,
    "MCTitle": "Грузила",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 12,
    "MCTitle": "Джиг головки",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 13,
    "MCTitle": "Поплавки",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 14,
    "MCTitle": "Крючки",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 15,
    "MCTitle": "Леска",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 16,
    "MCTitle": "Плетеные шнуры",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 17,
    "MCTitle": "Фидерная оснастка, донки",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 18,
    "MCTitle": "Прикормка для рыбалки",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 19,
    "MCTitle": "Блесны",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 20,
    "MCTitle": "Воблеры",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 21,
    "MCTitle": "Силиконовые и искуственные приманки",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 22,
    "MCTitle": "Удилища",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 23,
    "MCTitle": "Спиннинги",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
  {
    "id": 24,
    "MCTitle": "Катушки",
    "MCList": [
                "Антизакручиватели",
                "Бисер, бусины, шарики",
                "Бубенчики, колокольчики",
                "Ведра для прикорма",
                "Зевники, захваты для рыбы, куканы",
                "Кружки оснащенные и неоснащенные",
                "Лаки",
                "Наборы для нахлыста",
                "Наборы для рыбалки, оснастка",
                "Кембрики, трубки",
                "Нить",
                "Ножницы, рогатки, щипцы",
                "Подставки для удилищ, стойки",
                "Светлячки",
                "Сигнализаторы поклевки",
                "Смазки, спреи",
              ],
  },
]

const selectList = [
  {
    id: 1,
    title: 'Популярности',
  },
  {
    id: 2,
    title: 'Названию',
  },
  {
    id: 3,
    title: 'Цене',
  },
]

const selectSingleRef = React.createRef<HTMLDivElement>();
const containerGoodsRef = React.createRef<HTMLDivElement>();


const useStyles = makeStyles((theme) =>
  createStyles({
    paginationGoodsUl: {
      "& .MuiPaginationItem-page.Mui-selected": {
        backgroundColor: "#f3c256",
        color: "#0d1011",
      },
      "& .MuiPaginationItem-root": {
        color: "#f5f5f5",
      },
      [theme.breakpoints.down('md')]: {
        "& .MuiPaginationItem-root": {
          height: "35px",
          width: "35px",
          minWidth: "auto",
          padding: "0px",
        },
      },
    },
  }),
);



type MapStatePropsType = {
  goodsList: Array<TypeGood>
}
type MapDispatchPropsType = {  
}
type OwnPropsType = {}
type PathParamsType = {
	categoryGoods: string
  nameGood: string
  subcategoryGoods: string
  typeFishing: string
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType & RouteComponentProps<PathParamsType>


const AllGoodsPageContainer: React.FC<PropsType> = ({goodsList, ...props}) => {
  const classes = useStyles()

  const [activeList, setActiveList] = useState<number>(0)
  const [activePageGoodsCount, setActivePageGoodsCount] = useState<number>(1)
  const [isClickOnPagination, setIsClickOnPagination] = useState<boolean>(false)
  const [activeSelectTitle, setActiveSelectTitle] = useState<string>(selectList[0].title)
  const [activeSelectTitleIndex, setActiveSelectTitleIndex] = useState<number>(selectList[0].id)
  const [isOpenCategoryList, setIsOpenCategoryList] = useState<boolean>(true)

  useEffect(() => {
    if (isClickOnPagination && window.document.body.scrollWidth < 992) {
      if (!!containerGoodsRef.current) {
        containerGoodsRef.current.scrollIntoView({block: "start", behavior: "smooth"})
      }
    }
  }, [activePageGoodsCount, isClickOnPagination])

  const onClickSelectTitle = () => {
    if (!!selectSingleRef.current) {
      if ('active' === selectSingleRef.current.getAttribute('data-state')) {
        selectSingleRef.current.setAttribute('data-state', '');
      } else {
        selectSingleRef.current.setAttribute('data-state', 'active');
      }
    }
  }
  const onClickSelectLabel = (e: any) => {
    if (selectSingleRef.current) {
      setActiveSelectTitle(e.target.textContent)
      selectSingleRef.current.setAttribute('data-state', '')
    }
  }
  const onChangePageInPagination = (page: number) => {
    setActivePageGoodsCount(page)
    setIsClickOnPagination(true)
  }


  let pageSize = 0
  if (window.document.body.scrollWidth >= 1440) pageSize = 8
  else if (window.document.body.scrollWidth >= 1200 && window.document.body.scrollWidth < 1440) pageSize = 6
  else if (window.document.body.scrollWidth >= 992 && window.document.body.scrollWidth < 1200) pageSize = 4
  else if (window.document.body.scrollWidth >= 768 && window.document.body.scrollWidth < 992) pageSize = 30
  else if (window.document.body.scrollWidth >= 576 && window.document.body.scrollWidth < 768) pageSize = 30
  else if (window.document.body.scrollWidth < 576) pageSize = 30


  return (
    <div className={styleAG.AllGoodsWrap}>

      <div className={styleAG.AllGoodsWrapContentWrap}>
        <div className={"MainContainerWrap"}>
          <div className={styleAG.AllGoodsWrapContent}>

            <div className={styleAG.AllGoodsMobileTitleBlockWrap}>
              <div className={styleAG.AllGoodsMobileTitleBlock}>
                <div className={styleAG.AllGoodsMobileTitle}>{props.match.params.typeFishing}</div>
              </div>
            </div>

            <div className={styleAG.AllGoodsMobileOpenCategoryBlockWrap}>
              <div className={styleAG.AllGoodsMobileOpenCategoryBlock}>
                <button onClick={() => setIsOpenCategoryList(prev => !prev)} className={styleAG.AllGoodsMobileOpenCategoryButton}>
                  {`${isOpenCategoryList ? 'Скрыть' : 'Раскрыть'} категории товаров`}
                </button>
              </div>
            </div>


            <div>
              <div className={styleAG.AGMenuAndContainerWrap}>
                <div className={cn(styleAG.AGMenuWrap, {[styleAG.AGMenuMobileWrap]: !isOpenCategoryList})}>
                  <div className={styleAG.AGMenu}>

                    {listArray.map(item => (
                      <div key={item.id} className={styleAG.AGMenuMainCategory}>
                        <div className={styleAG.AGMenuMCTitleWrap} 
                          onClick={() => {
                            if (item.id === activeList) setActiveList(0)
                            else setActiveList(item.id)
                          }}
                        >
                          <div className={styleAG.AGMenuMCTitle}>
                            <span className={styleAG.AGMenuMCTitleLink}>
                              {item.MCTitle}
                            </span>
                          </div>
                          <div className={styleAG.AGMenuMCIcon}>
                            <button 
                              className={`${(item.id === activeList) ? styleAG.AGMenuMCButtonUp : styleAG.AGMenuMCButtonDown}`} 
                            >
                              <img src={iconList} alt="иконка"/>
                            </button>
                          </div>
                        </div>
                        
                        <div className={styleAG.AGMenuDopCategory}>
                            <CSSTransition
                              in={item.id === activeList}
                              timeout={0}
                              classNames={"CSSTransList"}
                              mountOnEnter
                              unmountOnExit
                            >
                              <ul className={styleAG.AGMenuDCList}>
                                {item.MCList.map(listItem => (
                                  <li key={listItem} className={styleAG.AGMenuDCListTitle}>
                                    <NavLink 
                                      onClick={() => setIsOpenCategoryList(false)}
                                      className={styleAG.AGMenuDCListTitleLink} 
                                      activeClassName={styleAG.AGMenuDCListTitleLink__active} 
                                      to={`/allGoods/${props.match.params.typeFishing}/${item.MCTitle}/${listItem}`}
                                    >
                                      {listItem}
                                    </NavLink>
                                  </li>         
                                ))}
                              </ul>
                            </CSSTransition>                          
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
                    

                <div className={styleAG.AGSortGoodsMobileWrap}>
                  <div className={styleAG.AGSortGoods}>
                    <div className={styleAG.AGSortGoodsTitle}>Сортировать по:</div> 
                    <div className={styleAG.AGSortGoodsSelectWrap}>

                    <div ref={selectSingleRef} className="__select" data-state="">
                      <div onClick={() => onClickSelectTitle()} className="__select__title" data-default={activeSelectTitle}>{activeSelectTitle}</div>
                      <div className="__select__content">
                        {selectList.map(item => (
                          <div key={`selectLabel-${item.id}`} className={"__select__labelWrap"}>
                            <input id={`singleSelect-${item.id}`} className="__select__input" type="radio" name="singleSelect" checked={item.id === activeSelectTitleIndex} onChange={() => setActiveSelectTitleIndex(item.id)}/> 
                            <label onClick={(e: any) => onClickSelectLabel(e)} htmlFor={`singleSelect-${item.id}`} className="__select__label">{item.title}</label>
                          </div>
                        ))}
                      </div>
                    </div>

                    </div>
                  </div>
                </div>  



                <div className={styleAG.AGContainerGoodsWrap}>
                  <div ref={containerGoodsRef} className={styleAG.AGContainerGoods}>
                    {goodsList.slice(activePageGoodsCount * pageSize - pageSize, activePageGoodsCount * pageSize).map((item) => (
                      <div key={item.id} >
                        <CardProduct good={item}/>
                      </div>
                    ))}
                  </div>
                  <div className={styleAG.AGContainerGoodsPaginationWrap}>
                    <div className={styleAG.AGContainerGoodsPaginationBlock}>
                      <Pagination 
                        classes={{
                          ul: classes.paginationGoodsUl,
                        }}
                        siblingCount={0}
                        count={Math.ceil(goodsList.length / pageSize)} 
                        page={activePageGoodsCount}
                        onChange={(event: any, page: number) => onChangePageInPagination(page)}
                        size={"large"}
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    goodsList: state.allGoodsPage.goodsList
  }
}
let mapDispatchToProps: MapDispatchPropsType = {  
}

const AllGoodsPage = compose<React.ComponentType>(
  withRouter,
	connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)
)(AllGoodsPageContainer);

export default AllGoodsPage;