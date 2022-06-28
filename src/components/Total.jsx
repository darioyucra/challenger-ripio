import React from 'react'
import Notification from '../img/notification.png';
import Help from '../img/help.png';

const Total = () => {
  return (
    <div className='panel-row total'>
        <div className='total-row-1'>
            <span>Panel</span>
            <div className='alerts'>
                <div className='alert1'>
                    <img src={Notification} alt="" />
                </div>

                <div className='alert2'>
                    <img src={Help} alt="" />
                </div>
            </div>
        </div>

        <div className='total-row-2'>
            <div className='total-column'>
                <span>Balance total</span>
                <p>$0 <span>Ver detalle</span></p>
            </div>

            <div className='actions'>
                <button id='depositar'>Depositar</button>
                <button id='comprar'>Comprar</button>
            </div>
        </div>
    </div>
  )
}

export default Total