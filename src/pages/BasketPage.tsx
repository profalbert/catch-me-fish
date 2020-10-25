import React, {useState} from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import styleBP from './BasketPage.module.css';
import cn from 'classnames'
import { withStyles } from '@material-ui/core/styles';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { TypeActiveTypeJokes, TypeGood, TypeGoodInBasket } from '../types/types';
import { AppStateType } from '../store/redux-store';
import { connect } from 'react-redux';
import { clearBasketThunk, changeCountGoodThunk, removeTypeGoodFromBasketThunk, onSubmitAllDataThunk } from '../store/basket-reducer';


const MyRadioButton = withStyles({
  root: {
    color: '#f3c256',
    '&$checked': {
      color: '#f3c256',
    },
  },
  checked: {},
})((props: RadioProps) => <Radio color="default" {...props} />);

const MyCheckboxButton = withStyles({
  root: {
    color: '#f3c256',
    '&$checked': {
      color: '#f3c256',
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const basketStepTitles = [
  {
    id: 1,
    title: 'Наполнение корзины',
  },
  {
    id: 2,
    title: 'Доставка',
  },
  {
    id: 3,
    title: 'Подтверждение заказа',
  },
]


const patternEmail = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/);
const patternPhone = new RegExp(/^((8|\+7)[ - ]?)?(\(?\d{3}\)?[ - ]?)?[\d\- ]{7,10}$/);

type selectedValueRadioType = 'CourierDelivery' | 'RussianPost';
type selectedValueCheckboxType = 'true' | 'false';


type MapStatePropsType = {
  goodsInBasket: Array<TypeGoodInBasket>
  totalPrice: number
}
type MapDispatchPropsType = {
  clearBasket: () => void
  changeCountGood: (goodBasket: TypeGoodInBasket, changeCountNum: number) => void
  removeGoodFromBasket: (good: TypeGood | TypeGoodInBasket, activeTypeJokes: TypeActiveTypeJokes) => void
  onSubmitAllData: (formData: any) => void
}
type OwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


const BasketPageContainer: React.FC<PropsType> = ({goodsInBasket, totalPrice, clearBasket, changeCountGood, removeGoodFromBasket, onSubmitAllData}) => {
  const [activeBasketStep, setActiveBasketStep] = useState<number>(1);
  const [selectedValueRadio, setSelectedValueRadio] = useState<selectedValueRadioType | ''>('CourierDelivery');
  const [selectedValueCheckBox, setSelectedValueCheckbox] = useState<selectedValueCheckboxType>('true');

  const { register, handleSubmit, errors, reset } = useForm();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValueRadio(event.target.value as selectedValueRadioType);
  };
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'true') setSelectedValueCheckbox('false') 
    else setSelectedValueCheckbox('true')
  };
  const onSubmit = (data: any) => {
    onSubmitAllData(data)
    setActiveBasketStep(3)
    reset()
  };
  const clearTrasferBusket = () => {
    clearBasket()
  };


  return (
    <div className={styleBP.BusketPageWrap}>

      <div className={styleBP.BusketPage}>
        <div className={"MainContainerWrap"}>
          <div className={styleBP.BPContent}>
            <div className={styleBP.BPTitle}>{basketStepTitles.find(item => item.id === activeBasketStep)?.title}</div>

            <div className={styleBP.BPPurchaseSteps}>
              <div className={styleBP.BPPurchaseStepsBlock}>
                <div className={cn(styleBP.BPPurchaseStepsBlockNumber, {[styleBP.BPPurchaseStepsBlockNumber__active]: activeBasketStep === 1})}>1</div>
                <div className={styleBP.BPPurchaseStepsBlockLine}></div>
                <div className={cn(styleBP.BPPurchaseStepsBlockNumber, {[styleBP.BPPurchaseStepsBlockNumber__active]: activeBasketStep === 2})}>2</div>
                <div className={styleBP.BPPurchaseStepsBlockLine}></div>
                <div className={cn(styleBP.BPPurchaseStepsBlockNumber, {[styleBP.BPPurchaseStepsBlockNumber__active]: activeBasketStep === 3})}>3</div>
              </div>              
            </div>



            {activeBasketStep === 1 &&  (
              goodsInBasket.length === 0 
                ? <div className={styleBP.BPBusketGoodVoidTitle}>Ваша корзина пуста</div>
                : <div className={styleBP.BPBusketWrap}>
                    <div className={styleBP.BPBusket}>
                      <div className={styleBP.BPBusketColumns}>
                        <div className={styleBP.BPBusketColumn}>Товар</div>
                        <div className={styleBP.BPBusketColumn}>Количество</div>
                        <div className={styleBP.BPBusketColumn}>Стоимость</div>
                        <div className={styleBP.BPBusketColumn}>Всего</div>
                        <div className={styleBP.BPBusketColumn}></div>
                      </div>

                      <div className={styleBP.BPBusketGoodWrap}>
                        <div className={styleBP.BPBusketGood}>

                            {goodsInBasket.map(goodBasket => (
                              <div key={goodBasket.idBasket}>
                                {/* блок товара для десктопа */}
                                <div className={styleBP.BPBusketGoodBlock}>
                                  <div className={styleBP.BPBusketGoodImgAndText}>
                                    <div className={styleBP.BPBusketGoodImg}><img src={goodBasket.images[0]} alt="картинка"/></div>
                                    <div className={styleBP.BPBusketGoodTextWrap}>
                                      <div className={styleBP.BPBusketGoodMainText}>{goodBasket.title}</div>
                                      <div className={styleBP.BPBusketGoodDopText}>
                                        {goodBasket.activeTypeJokes.nameActiveTypeJokes === "oneJoke" 
                                          && `(${goodBasket.activeTypeJokes.count} шт)`                      
                                        }
                                        {goodBasket.activeTypeJokes.nameActiveTypeJokes === "packageJoke" 
                                          && `(упаковка ${goodBasket.activeTypeJokes.count} шт)`                        
                                        }                              
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styleBP.BPBusketGoodCalcWrap}>
                                    <div className={styleBP.BPBusketGoodCal}>
                                      <div className={styleBP.BPBusketGoodCalcButton}>
                                        <button onClick={() => changeCountGood(goodBasket, -1)} disabled={goodBasket.count <= 1}><span></span></button>
                                      </div>
                                      <div className={styleBP.BPBusketGoodCalcAmount}>{goodBasket.count}</div>
                                      <div className={cn(styleBP.BPBusketGoodCalcButton, styleBP.BPBusketGoodCalcButtonPlus)}>
                                        <button onClick={() => changeCountGood(goodBasket, 1)} disabled={goodBasket.count >= 999}><span></span></button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styleBP.BPBusketGoodPriceWrap}>
                                    <div className={styleBP.BPBusketGoodPrice}>
                                      {goodBasket.activeTypeJokes.price} ₽
                                    </div>
                                  </div>
                                  <div className={styleBP.BPBusketGoodAllWrap}>
                                    <div className={styleBP.BPBusketGoodAll}>
                                      {goodBasket.totalPrice} ₽
                                    </div>
                                  </div>
                                  <div className={styleBP.BPBusketGoodDeleteGoodWrap}>
                                    <div className={styleBP.BPBusketGoodDeleteGood}>
                                      <button onClick={() => removeGoodFromBasket(goodBasket, goodBasket.activeTypeJokes)} className={cn(styleBP.BPBusketGoodDeleteGoodButton, "closeButton")}><HighlightOffIcon style={{fontSize: 25, color: "#f5f5f5"}}/></button>
                                    </div>
                                  </div>
                                </div>


                                {/* блок товара для мобилок */}
                                <div className={styleBP.BPBusketMobileGoodBlock}>
                                  <div className={styleBP.BPBusketGoodImgAndText}>
                                    <div className={styleBP.BPBusketGoodTextWrap}>
                                      <div className={styleBP.BPBusketGoodMainText}>{goodBasket.title}</div>
                                      <div className={styleBP.BPBusketGoodDopText}>
                                        {goodBasket.activeTypeJokes.nameActiveTypeJokes === "oneJoke" 
                                          && `(${goodBasket.activeTypeJokes.count} шт)`                      
                                        }
                                        {goodBasket.activeTypeJokes.nameActiveTypeJokes === "packageJoke" 
                                          && `(упаковка ${goodBasket.activeTypeJokes.count} шт)`                        
                                        }                              
                                      </div>
                                    </div>
                                    <div className={styleBP.BPBusketGoodDeleteGood}>
                                      <button onClick={() => removeGoodFromBasket(goodBasket, goodBasket.activeTypeJokes)} className={cn(styleBP.BPBusketGoodDeleteGoodButton, "closeButton")}><HighlightOffIcon style={{fontSize: 25, color: "#f5f5f5"}}/></button>
                                    </div>
                                  </div>

                                  <div className={styleBP.BPBusketMobileGoodContentWrap}>
                                    <div className={styleBP.BPBusketGoodImg}><img src={goodBasket.images[0]} alt="картинка"/></div>
                                    
                                    <div>                                    
                                      <div className={styleBP.BPBusketGoodPriceWrap}>
                                        <div className={styleBP.BPBusketGoodPrice}>Цена</div>
                                        <div className={styleBP.BPBusketGoodPrice}>
                                          {goodBasket.activeTypeJokes.price} ₽
                                        </div>
                                      </div>
                                      <div className={styleBP.BPBusketGoodCalcWrap}>
                                        <div className={styleBP.BPBusketGoodPrice}>Количество</div>
                                        <div className={styleBP.BPBusketGoodCal}>
                                          <div className={styleBP.BPBusketGoodCalcButton}>
                                            <button onClick={() => changeCountGood(goodBasket, -1)} disabled={goodBasket.count <= 1}><span></span></button>
                                          </div>
                                          <div className={styleBP.BPBusketGoodCalcAmount}>{goodBasket.count}</div>
                                          <div className={cn(styleBP.BPBusketGoodCalcButton, styleBP.BPBusketGoodCalcButtonPlus)}>
                                            <button onClick={() => changeCountGood(goodBasket, 1)} disabled={goodBasket.count >= 999}><span></span></button>
                                          </div>
                                        </div>
                                      </div>
                                      <div className={styleBP.BPBusketGoodAllWrap}>
                                        <div className={styleBP.BPBusketGoodPrice}>Сумма</div>
                                        <div className={styleBP.BPBusketGoodAll}>
                                          {goodBasket.totalPrice} ₽
                                        </div>
                                      </div>
                                    </div>                                  
                                  </div>                                
                                </div>
                              </div>
                            ))}
                          
                        </div>
                      </div>

                      <div className={styleBP.BPBusketSumWrap}>
                        <div className={styleBP.BPBusketSum}>Итого: <span className={styleBP.BPBusketSumPrice}>{totalPrice} ₽</span></div>
                      </div>

                      <div className={styleBP.BPBusketButtonsWrap}>
                        <div className={styleBP.BPBusketButtonsBlock}>
                          <button onClick={() => clearTrasferBusket()} className={styleBP.BPBusketButtonsClearBasket}>Очистить корзину</button>
                          <button onClick={() => setActiveBasketStep(2)} className={cn(styleBP.BPBusketButtonsContinue, "hoverButtonsMainClass")}>Далее</button>
                        </div>                 
                      </div>
                    </div>
                  </div>
            )}




            {activeBasketStep === 2 &&
              <div className={styleBP.BPFormBlockWrap}>
                <div className={styleBP.BPFormBlock}>
                  <form className={styleBP.BPForm} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styleBP.BPFormRadioButtonsBlockWrap}>
                      <div className={styleBP.BPFormRadioButtonsBlock}>
                        <div className={styleBP.BPFormRadioButton}>
                          <MyRadioButton
                            checked={selectedValueRadio === 'CourierDelivery'}
                            onChange={handleChange}
                            value="CourierDelivery"
                            name="typeDelivery"
                            inputRef={register({required: true})}
                          />
                        </div>
                        <div className={cn({[styleBP.errorForm]: !!errors.typeDelivery}, styleBP.BPFormRadioButtonText)}>Доставка курьером (Москва, МО, Владимирская область)</div>
                      </div>
                      <div className={styleBP.BPFormRadioButtonsBlock}>
                        <div className={styleBP.BPFormRadioButton}>
                          <MyRadioButton
                            checked={selectedValueRadio === 'RussianPost'}
                            onChange={handleChange}
                            value="RussianPost"
                            name="typeDelivery"
                            inputRef={register({required: true})}
                          />
                        </div>
                        <div className={cn({[styleBP.errorForm]: !!errors.typeDelivery}, styleBP.BPFormRadioButtonText)}>Почта России (Другие регионы)</div>
                      </div>
                    </div>

                    <div className={styleBP.BPFormMainFieldBlockWrap}>
                      <div className={styleBP.BPFormMainFieldBlock}>
                        <input 
                          ref={register({required: true, maxLength: 200 })} 
                          name="fullName" 
                          className={cn({[styleBP.errorForm]: !!errors.fullName}, styleBP.BPFormMainField, styleBP.BPFormMainFieldFIO)} 
                          type="text" 
                          placeholder="ФИО (обязательно)" 
                        />
                        <input 
                          ref={register({required: true, pattern: patternPhone, maxLength: 100})} 
                          name="phone" 
                          className={cn({[styleBP.errorForm]: !!errors.phone}, styleBP.BPFormMainField, styleBP.BPFormMainFieldPhone)} 
                          type="text"
                          placeholder="Телефон (обязательно)" 
                        />
                        <input 
                          ref={register({required: true, pattern: patternEmail, maxLength: 100})} 
                          name="email" 
                          className={cn({[styleBP.errorForm]: !!errors.email}, styleBP.BPFormMainField, styleBP.BPFormMainFieldEmail)} 
                          type="text" 
                          placeholder="E-mail (обязательно)" 
                        />
                        <textarea 
                          ref={register({required: true, maxLength: 500})} 
                          name="adress" 
                          className={cn({[styleBP.errorForm]: !!errors.adress}, styleBP.BPFormMainField, styleBP.BPFormMainFieldAdress)} 
                          cols={30} 
                          rows={10} 
                          placeholder={`${(selectedValueRadio === 'RussianPost') ? "Адрес ближайшего почтового отделения с индексом (обязательно)" : "Адрес доставки (обязательно)"}`} 
                        ></textarea>
                      </div>
                    </div>
                    

                    <div className={styleBP.BPFormChekcboxAndAttentionWrap}>
                      <div className={cn(styleBP.BPFormChekcboxBlockWrap)}>
                        <div className={styleBP.BPFormChekcboxBlock}>
                          <MyCheckboxButton 
                            name="isProcessPersonalData" 
                            inputRef={register({required: true})}
                            onChange={handleChangeCheckbox}
                            checked={selectedValueCheckBox === 'true'}
                            value={selectedValueCheckBox}
                            icon={<RadioButtonUncheckedIcon style={{color: "#f3c256"}}/>} 
                            checkedIcon={<RadioButtonCheckedIcon style={{color: "#f3c256"}}/>} 
                          />
                        </div>
                        <div className={cn({[styleBP.errorForm]: !!errors.isProcessPersonalData}, styleBP.BPFormChekcboxText)}>Даю согласие на обработку персональных данных</div>
                      </div>

                      {selectedValueRadio === 'RussianPost' &&
                        <div className={styleBP.BPFormAttentionBlockWrap}>
                          <div className={styleBP.BPFormAttentionBlock}>
                            <span className={styleBP.BPFormAttentionBlockTitle}>Внимание!</span>  <br/>
                            Пожалуйста  указывайте адрес ближайшего 
                            почтового отделения, а не домашний адрес. 
                            Проверить его можно <a className={styleBP.BPFormAttentionBlockTitle} target="blank" href="https://www.pochta.ru/offices">здесь</a>.
                          </div>
                        </div>
                      }                    
                    </div>              


                    <div className={styleBP.BPFormCommentBlokWrap}>
                      <div className={styleBP.BPFormCommentBlok}>
                        <textarea name="comment" ref={register({maxLength: 2000})} className={cn(styleBP.BPFormMainField, styleBP.BPFormCommentBlokTextarea)} cols={30} rows={10} placeholder="Комментарий к заказу / дополнительная информация"></textarea>
                      </div>
                    </div>

                    <div className={styleBP.BPFormButtonsBlockWrap}>
                      <div className={styleBP.BPFormButtonsBlock}>
                        <button onClick={() => setActiveBasketStep(1)} className={cn(styleBP.BPFormButtonBack, "hoverButtonsMainClass")}>Назад</button>
                        <button className={cn(styleBP.BPFormButtonContinue, "hoverButtonsMainClass")} type="submit">Далее</button>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
            }




            {activeBasketStep === 3 &&
              <div className={styleBP.BPConfirmationOrderWrap}>
                <div className={styleBP.BPConfirmationOrder}>
                  <div className={styleBP.BPConfirmationOrderText}>
                    Спасибо за заказ! <br/>
                    В ближайшее время мы свяжемся с вами.
                  </div>
                  <div className={styleBP.BPConfirmationOrderButtonBlock}>
                    <NavLink className={cn(styleBP.BPConfirmationOrderButton, "hoverButtonsMainClass")} exact to="/">На главную</NavLink>
                  </div>
                </div>
              </div>
            }

          </div>
        </div>
      </div>

    </div>
  );
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    goodsInBasket: state.basketPage.goodsInBasket,
    totalPrice: state.basketPage.totalPrice,
  }
}
let mapDispatchToProps: MapDispatchPropsType = {
  clearBasket: clearBasketThunk,  
  changeCountGood: changeCountGoodThunk,
  removeGoodFromBasket: removeTypeGoodFromBasketThunk,
  onSubmitAllData: onSubmitAllDataThunk,
}


const BasketPage = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(BasketPageContainer)

export default BasketPage;