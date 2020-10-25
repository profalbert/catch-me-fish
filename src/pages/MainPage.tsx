import React from 'react';
import styleMainPage from './MainPage.module.css';
import photoForCallback from '../assets/img/PhotoForCallback.jpg';
import iconList from '../assets/icons/iconList.svg';
import cn from 'classnames'
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { NavLink } from 'react-router-dom';
import { appActions } from '../store/app-reducer';
import { connect } from 'react-redux';
import { AppStateType } from '../store/redux-store';


SwiperCore.use([Pagination, A11y, Autoplay]);


type MapStatePropsType = {
}
type MapDispatchPropsType = {
  handleOpenForm: (isopenForm: boolean) => void
}
type OwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


const MainPageContainer: React.FC<PropsType> = ({handleOpenForm}) => {
  return (
    <div className={styleMainPage.MainPage}>

      <section className={styleMainPage.HuntingGoods}>
        <div className={"MainContainerWrap"}>
          <div className={styleMainPage.HuntingGoodsWrapContent}>
            <div className={styleMainPage.HuntingGoodsContent}>
              <h2 className={styleMainPage.HuntingGoodsTitle}>Товары для охоты и рыбалки</h2>
              <span className={styleMainPage.HuntingGoodsText}>
                “Catch me” - магазин для любителей рыбалки и охоты.  
                Мы предлагаем широкий ассортимент качественной продукции, 
                простую и удобную процедуру покупки, 
                экспресс-доставку и первоклассное обсуживание.
                <br></br>
                Ознакомьтесь с нашим каталогом!
              </span>
              <NavLink className={cn(styleMainPage.HuntingGoodsButton, "hoverButtonsMainClass")} exact to={`/allGoods`}>В каталог</NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className={styleMainPage.CallBack}>
        <div className={"MainContainerWrap"}>
          <div className={styleMainPage.CallBackWrapContent}>
            <div className={styleMainPage.CallBackContent}>
              <h2 className={styleMainPage.CallBackTitle}>Отзывы о нашей работе</h2>
              <span className={styleMainPage.CallBackText}>
                На нашем  счету уже более 1000 довольных клиентов.
                Надеемся, что и вы станете одним из них.
                <br></br>
                <br></br>
                Уже являетесь нашим клиентом и хотите поделиться 
                своим мнением?
              </span>
              <button onClick={() => handleOpenForm(true)} className={cn(styleMainPage.CallBackButton, "hoverButtonsMainClass")}>Оставить отзыв</button>
            </div>


            <div className={cn(styleMainPage.CallBackSlider, "CallBackSlider")}>
              <Swiper
                spaceBetween={150}
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                {[1,2,3].map(item => (
                  <SwiperSlide key={item}>
                    <div className={styleMainPage.CallBackSliderBlock}>
                      <div className={styleMainPage.CallBackSliderImg}><img src={photoForCallback} alt="картинка"/></div>
                      <div className={styleMainPage.CallBackSliderContent}>
                        <div className={styleMainPage.CallBackSliderName}>
                          Андрей Петров
                        </div>
                        <div className={styleMainPage.CallBackSliderDate}>
                          17.08.2020
                        </div>
                        <div className={styleMainPage.CallBackSliderText}>
                          Всем рыбакам рекомендую покупать в CatchMe!
                          <br></br>
                          Отличные насадки!
                          Я в восторге!
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>  
             </div>


          </div>
        </div>
      </section>

      <section className={styleMainPage.SpecialOffer}>
        <div className={"MainContainerWrap"}>
          <div className={cn(styleMainPage.SpecialOfferWrapContent, "SpecialOfferWrapContent")}>


            <Swiper
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 2,
                },
                1440: {
                  slidesPerView: 2,
                },
              }}
            >
              {[1,2,3,4,5,6].map(item => (
                <SwiperSlide key={item}>
                  <div className={styleMainPage.SpecialOfferBlock}>
                    <div className={styleMainPage.SpecialOfferBlockContent}>
                      <h2 className={styleMainPage.SpecialOfferTitle}>
                        Специальное предложение
                      </h2>
                      <div className={styleMainPage.SpecialOfferText}>
                        Комплект на двоих со скидкой 20%
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>            


          </div>
        </div>
      </section>

      <section className={styleMainPage.AboutUs}>
        <div className={"MainContainerWrap"}>
          <div className={styleMainPage.AboutUsWrapContent}>
            <div className={styleMainPage.AboutUsBlock}>
              <h2 className={styleMainPage.AboutUsTitle}>
                О нас
              </h2>
              <div className={styleMainPage.AboutUsText}>
                Мы работаем 24/7 по Москве, 
                МО и Владимирской области. 
                Быстрая и своевременная доставка, 
                учитываем любые пожелания. Курьер доставит 
                заказ в любую точку, в том числе и на водоём.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styleMainPage.MobileNewBlockMenuListWrap}>
        <div className={"MainContainerWrap"}>
          <div className={styleMainPage.MobileNewBlockMenuList}>
            <div className={styleMainPage.MobileNewBlockMenuListLink}>
              <NavLink to={`/allGoods/${"Летняя рыбалка"}`}>
                <span className={styleMainPage.MobileNewBlockMenuListText}>Летняя рыбалка</span>
                <span className={styleMainPage.MobileNewBlockMenuListImg}><img src={iconList} alt="иконка"/></span>
              </NavLink>              
            </div>
            <div className={styleMainPage.MobileNewBlockMenuListLink}>
              <NavLink to={`/allGoods/${"Зимняя рыбалка"}`}>
                <span className={styleMainPage.MobileNewBlockMenuListText}>Зимняя рыбалка</span>
                <span className={styleMainPage.MobileNewBlockMenuListImg}><img src={iconList} alt="иконка"/></span>
              </NavLink>              
            </div>
            <div className={styleMainPage.MobileNewBlockMenuListLink}>
              <NavLink to={`/allGoods/${"Охота"}`}>
                <span className={styleMainPage.MobileNewBlockMenuListText}>Охота</span>
                <span className={styleMainPage.MobileNewBlockMenuListImg}><img src={iconList} alt="иконка"/></span>
              </NavLink>              
            </div>
            <div className={styleMainPage.MobileNewBlockMenuListLink}>
              <NavLink to={`/allGoods/${"Туризм"}`}>
                <span className={styleMainPage.MobileNewBlockMenuListText}>Туризм</span>
                <span className={styleMainPage.MobileNewBlockMenuListImg}><img src={iconList} alt="иконка"/></span>
              </NavLink>              
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
  }
}
let mapDispatchToProps: MapDispatchPropsType = {
  handleOpenForm: appActions.handleOpenFormSuccess,
}


const MainPage = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(MainPageContainer)

export default MainPage;