import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styleFooter from './Footer.module.css';
import logoWhite from '../../assets/icons/logoWhite.svg';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);


const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={styleFooter.Footer}>
      <div className={classes.root}>
        <div className={"MainContainerWrap"}>
            <div className={styleFooter.footerWrap}>
              <div className={styleFooter.footerLogoBlock}><NavLink exact to={"/"} ><img src={logoWhite} alt="белый логотип"/></NavLink></div>

              <div>
                <nav className={styleFooter.footerNavBlock}>
                  <ul>
                    <li><NavLink activeClassName={styleFooter.footerNavBlockActiveItem} exact to="/">Главная</NavLink></li>
                    <li><NavLink activeClassName={styleFooter.footerNavBlockActiveItem} to={`/allGoods/${"Летняя рыбалка"}`}>Летняя рыбалка</NavLink></li>
                    <li><NavLink activeClassName={styleFooter.footerNavBlockActiveItem} to={`/allGoods/${"Зимняя рыбалка"}`}>Зимняя рыбалка</NavLink></li>
                    <li><NavLink activeClassName={styleFooter.footerNavBlockActiveItem} to={`/allGoods/${"Охота"}`}>Охота</NavLink></li>
                    <li><NavLink activeClassName={styleFooter.footerNavBlockActiveItem} to={`/allGoods/${"Туризм"}`}>Туризм</NavLink></li>
                    <li><NavLink activeClassName={styleFooter.footerNavBlockActiveItem} to={`/contactsDelivery`}>Контакты и доставка</NavLink></li>
                  </ul>
                </nav>
              </div>

              <div className={styleFooter.footerContactsBlockWrap}>
                <div className={styleFooter.footerContactsBlock}>
                  <div><a href="tel:+79776220921">+7 (977) 622-09-21</a></div>
                  <div><a href="tel:+79775741346">+7 (977) 574-13-46</a></div>                  
                  <div><a target="blank" href="https://vk.com/catchmefish">Мы ВКонтакте</a></div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;