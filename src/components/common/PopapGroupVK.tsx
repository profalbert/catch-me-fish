import React from 'react';
import stylePGVK from './PopapGroupVK.module.css';
import CloseIcon from '@material-ui/icons/Close';
import { AppStateType } from '../../store/redux-store';
import { connect } from 'react-redux';
import { onHideGroupVKThunk } from '../../store/app-reducer';
import cn from 'classnames'


type MapStatePropsType = {
  isShowGroupVK: boolean
}
type MapDispatchPropsType = {
  onHideGroupVK: (isShowGroupVK: boolean) => void
}
type OwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


const PopapGroupVKContainer: React.FC<PropsType> = ({isShowGroupVK, onHideGroupVK}) => {
  const onCloseForm = () => {
    onHideGroupVK(false)
  };


  return (
    <div className={cn(stylePGVK.PGVKBlockWrap, {[stylePGVK.PGVKBlockWrapOpen]: isShowGroupVK === true}, {[stylePGVK.PGVKBlockWrapClose]: isShowGroupVK === false})}>
      <div className={cn(stylePGVK.PGVKBlock, {[stylePGVK.PGVKBlockOpen]: isShowGroupVK === true}, {[stylePGVK.PGVKBlockClose]: isShowGroupVK === false})}>

        <div className={stylePGVK.PGVKBlockCloseWrap}>
          <button onClick={onCloseForm} className={cn(stylePGVK.PGVKBlockCloseButton, "closeButton")}><CloseIcon style={{ fontSize: 26 }} /></button>
        </div>

        <div className={stylePGVK.PGVKBlockTextWrap}>
          <div className={stylePGVK.PGVKBlockText}>
            Присоединяйтесь к нам ВКонтакте, задавайте вопросы, следите за новостями компании, а также делитесь своими отчетами о рыбалке. <br/>
            Ни хвоста, ни чешуи!
          </div>
        </div>

        <div className={stylePGVK.PGVKBlockButtonWrap}>
          <div className={stylePGVK.PGVKBlockButtonBlock}>
            <a className={cn(stylePGVK.PGVKBlockButtonLink, "hoverButtonsMainClass")} target="blank" href="https://vk.com/catchmefish">Группа ВКонтакте</a>
          </div>
        </div>

      </div>
    </div>     
  );
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isShowGroupVK: state.appPage.isShowGroupVK
  }
}
let mapDispatchToProps: MapDispatchPropsType = {
  onHideGroupVK: onHideGroupVKThunk,
}


const PopapGroupVK = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(PopapGroupVKContainer)

export default PopapGroupVK;