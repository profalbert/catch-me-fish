import React from 'react';
import styleCD from './ContactsDeliveryPage.module.css';
import mainPhotoCD from '../assets/img/ContactsDelivery.jpg'
import cn from 'classnames'

const ContactsDeliveryPage = () => {
  return (
    <div className={styleCD.ContactsDeliveryPage}>

      <div className={styleCD.CDBlockWrap}>
        <div className={styleCD.CDBlock}>
          <div className={styleCD.CDImg}><img src={mainPhotoCD} alt="картинка"/></div>
          <div className={styleCD.CDContent}>
            <div className={styleCD.CDDeliveryBlock}>
              <div className={cn(styleCD.CDTitle, styleCD.CDDeliveryTitle)}>Доставка</div>
              <div className={styleCD.CDDeliveryText}>
                Доставка курьером до адреса по Москве, МО и Владимирской области. 
                <br/>
                Доставка в регионы осуществляется Почтой России или транспортной компанией ПЭК. 
                <br/>
                При заказе на сумму от 5000 руб. доставка бесплатная. 
                <br/>
                Стоимость и сроки доставки уточняйте у менеджера.
              </div>
            </div>
            <div className={styleCD.CDPaymentBlock}>
              <div className={styleCD.CDTitle}>Оплата</div>
              <div className={styleCD.CDPaymentItems}>
                - Наличными курьеру по факту получения товара
                <br/><br/>
                - Безналичным способом
                <br/><br/>
                - Наложенным платежом при получении заказа в отделении Почты России*
              </div>
              <div className={styleCD.CDPaymentMinitext}>
                *Наложенный платеж— сумма, которую адресат должен 
                оплатить при получении письма или посылки в 
                почтовом отделении. После оплаты получателем, 
                сумма наложенного платежа перечисляется отправителю 
                денежным переводом. Получатель может отказаться 
                от получения отправления (тогда оно возвращается отправителю).
              </div>
              <div className={styleCD.CDPaymentTerm}>
                При заказе от 10000 тыс предоплата 25% от 
                суммы заказа. 
                <br/>
                Не распространяется на отправку 
                почтой России наложенным платежом. 
                <br/>
                Без минимальной суммы заказа.
              </div>
            </div>
            <div className={styleCD.CDContactsBlock}>
              <div className={styleCD.CDTitle}>Контакты</div>
              <div><a href="tel:+79775741346">+7 (977) 574-13-46</a> <span>(звонки и WhatsApp)</span></div>
              <div><a href="tel:+79776220921">+7 (977) 622-09-21</a> <span>(звонки и WhatsApp)</span></div>
              <div><a target="blank" href="https://vk.com/catchmefish">Наша группа ВКонтакте</a></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ContactsDeliveryPage;