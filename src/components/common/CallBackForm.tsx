import React, {useState} from 'react';
import styleCB from './CallBackForm.module.css';
import cn from 'classnames'
import { withStyles } from '@material-ui/core/styles';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useForm } from "react-hook-form";
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { AppStateType } from '../../store/redux-store';
import { appActions, onSubmitDataForCallbackThunk } from '../../store/app-reducer';


const MyCheckboxButton = withStyles({
  root: {
    color: '#f3c256',
    '&$checked': {
      color: '#f3c256',
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);


const patternPhoneOrEmail = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$|^((8|\+7)[ - ]?)?(\(?\d{3}\)?[ - ]?)?[\d\- ]{7,10}$/);

type selectedValueCheckboxType = 'true' | 'false';


type MapStatePropsType = {
  isOpenForm: boolean
}
type MapDispatchPropsType = {
  handleOpenForm: (isopenForm: boolean) => void
  onSubmitDataForCallback: (formData: any) => void
}
type OwnPropsType = {  
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


const CallBackFormContainer: React.FC<PropsType> = ({isOpenForm, handleOpenForm, onSubmitDataForCallback}) => {
  const [selectedValueCheckBox, setSelectedValueCheckbox] = useState<selectedValueCheckboxType>('true');

  const { register, handleSubmit, errors, reset } = useForm();

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'true') setSelectedValueCheckbox('false') 
    else setSelectedValueCheckbox('true')
  };
  const onSubmit = (data: any) => {
    onSubmitDataForCallback(data)
    handleOpenForm(false)
    reset()
  };
  const onCloseForm = () => {
    handleOpenForm(false)
  };


  return (
    <div className={cn(styleCB.CBBlockWrap, {[styleCB.CBBlockWrapOpen]: isOpenForm === true}, {[styleCB.CBBlockWrapClose]: isOpenForm === false})}>
      <div className={"MainContainerWrap"}>
        <div className={styleCB.CBBlockContentWrap}>
          <div className={cn(styleCB.CBBlock, {[styleCB.CBBlockOpen]: isOpenForm === true}, {[styleCB.CBBlockClose]: isOpenForm === false})}>
            <div className={styleCB.CBBlockCloseWrap}>
              <button onClick={onCloseForm} className={cn(styleCB.CBBlockCloseButton, "closeButton")}><CloseIcon style={{ fontSize: 26 }} /></button>
            </div>

            <form className={styleCB.CBForm} onSubmit={handleSubmit(onSubmit)}>

              <div className={styleCB.CBFormTitleWrap}>
                <div className={styleCB.CBFormTitle}>
                  Оставьте отзыв о нашей работе,
                  нам важно ваше мнение.
                </div>
              </div>

              <div className={styleCB.CBFormMainFieldBlockWrap}>
                <div className={styleCB.CBFormMainFieldBlock}>
                  <input 
                    ref={register({required: true, maxLength: 200 })} 
                    name="fullName" 
                    className={cn({[styleCB.errorForm]: !!errors.fullName}, styleCB.CBFormMainField, styleCB.CBFormMainFieldFullName)} 
                    type="text" 
                    placeholder="Ваше имя (обязательно)" 
                  />
                  <input 
                    ref={register({required: true, pattern: patternPhoneOrEmail, maxLength: 100})} 
                    name="phoneOrEmail" 
                    className={cn({[styleCB.errorForm]: !!errors.phoneOrEmail}, styleCB.CBFormMainField, styleCB.CBFormMainFieldPhoneOrEmail)} 
                    type="text"
                    placeholder="Телефон или e-mail (обязательно)" 
                  />
                  <textarea 
                    ref={register({required: true, maxLength: 500})} 
                    name="callBackText" 
                    className={cn({[styleCB.errorForm]: !!errors.callBackText}, styleCB.CBFormMainField, styleCB.CBFormMainFieldCallBackText)} 
                    cols={30} 
                    rows={10} 
                    placeholder={"Текст отзыва (обязательно)"} 
                  ></textarea>
                </div>
              </div>
              

              <div className={styleCB.CBFormChekcboxAndAttentionWrap}>
                <div className={cn(styleCB.CBFormChekcboxBlockWrap, styleCB.CBFormChekcboxBlockWrap)}>
                  <div className={styleCB.CBFormChekcboxBlock}>
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
                  <div className={cn({[styleCB.errorForm]: !!errors.isProcessPersonalData}, styleCB.CBFormChekcboxText)}>Даю согласие на обработку персональных данных</div>
                </div>                    
              </div> 

              <div className={styleCB.CBFormButtonsBlockWrap}>
                <div className={styleCB.CBFormButtonsBlock}>
                  <button className={cn(styleCB.CBFormButtonContinue, "hoverButtonsMainClass")} type="submit">Оставить отзыв</button>
                </div>
              </div>

            </form>
          </div>
        </div>        
      </div>
    </div>     
  );
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isOpenForm: state.appPage.isOpenForm
  }
}
let mapDispatchToProps: MapDispatchPropsType = {
  handleOpenForm: appActions.handleOpenFormSuccess,
  onSubmitDataForCallback: onSubmitDataForCallbackThunk,
}


const CallBackForm = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(CallBackFormContainer)

export default CallBackForm;