import React, {useEffect} from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import AllGoodsPage from './pages/AllGoodsPage';
import ContactsDeliveryPage from './pages/ContactsDeliveryPage';
import OpenCardGoodPage from './pages/OpenCardGoodPage';
import BasketPage from './pages/BasketPage';
import Page404 from './pages/Page404';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import HeaderMobile from './components/Header/HeaderMobile';
import Footer from './components/Footer/Footer';
import FooterMobile from './components/Footer/FooterMobile';
import CallBackForm from './components/common/CallBackForm';
import PopapGroupVK from './components/common/PopapGroupVK';
import { connect } from 'react-redux';
import { AppStateType } from './store/redux-store';
import { initializeAppThunk } from './store/app-reducer';
import Preloader from './components/common/Preloader';


type MapStatePropsType = {
  initializedApp: boolean
}
type MapDispatchPropsType = {
  initializeApp: () => void
}
type OwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


const AppContainer: React.FC<PropsType> = ({initializeApp, initializedApp}) => {
  useEffect(() => {
    initializeApp()
  }, [initializeApp])


  if(!initializedApp) {
    return (
      <div className={"appPreloaderWrap"}>
        <div className={"appPreloader"}>
          <Preloader />
        </div>
      </div>
    )
  }


  return (
    <div className="App">
      <Header />  
      <HeaderMobile />

      <Switch>
        <Route path="/" exact render={() => <MainPage />}/>
        <Route path="/contactsDelivery" render={() => <ContactsDeliveryPage />}/>
        <Route path="/allGoods/:typeFishing/:categoryGoods/:subcategoryGoods/:nameGood" render={() => <OpenCardGoodPage />}/>
        <Route path="/allGoods/:typeFishing?/:categoryGoods?/:subcategoryGoods?" render={() => <AllGoodsPage />}/>
        <Route path="/basket" render={() => <BasketPage />}/>
        <Route path="*" render={() => <Page404 />}/> 
      </Switch>

      <Footer />
      <FooterMobile />


      <CallBackForm />
      <PopapGroupVK />
    </div>
  );
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    initializedApp: state.appPage.initializedApp,
  }
}
let mapDispatchToProps: MapDispatchPropsType = {
  initializeApp: initializeAppThunk,
}


const App = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(AppContainer)

export default App;
