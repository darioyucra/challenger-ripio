import React from 'react'
import Iconcoin1 from '../img/icon-coin-1.png'
import Iconcoin2 from '../img/icon-coin-2.png'
import Iconcoin3 from '../img/icon-coin-3.png'
import Iconcoin4 from '../img/icon-coin-4.png'
import Iconcoin5 from '../img/icon-coin-5.png'
import Iconcoin6 from '../img/icon-coin-6.png'

const Billeteras = () => {
  return (
    <div className='panel-row billeteras'>
        <h2>Billeteras</h2>

        <div className='grid-billeteras'>
            <div className='labels'>
                <span className='column1'>#</span>
                <span>Moneda</span>
                <span>Balance</span>
                <span>Equivalente</span>
                <span>Porcentaje balance</span>
            </div>

            <div className='row-billeteras'>
                <span className='column1'>-</span>
                <div className='currency'>
                    <img src={Iconcoin1} alt="" />
                    <span>Pesos - ARS</span>
                </div>
                <span className='value'>$0</span>
                <span className='equivalente'>-</span>
                <span className='porcentaje'>0%</span>
                <div className='button'>
                    <button>Depositar</button>
                </div>
            </div>

            <div className='row-billeteras'>
                <span className='column1'>-</span>
                <div className='currency'>
                    <img src={Iconcoin2} alt="" />
                    <span>Bitcoin - BTC</span>
                </div>
                <span className='value'>0 BTC</span>
                <span className='equivalente'>≈$0</span>
                <span className='porcentaje'>0%</span>
                <div className='button'>
                    <button>Comprar</button>
                </div>
            </div>

            <div className='row-billeteras'>
                <span className='column1'>-</span>
                <div className='currency'>
                    <img src={Iconcoin3} alt="" />
                    <span>Ethereum - ETH</span>
                </div>
                <span className='value'>0 ETH</span>
                <span className='equivalente'>≈$0</span>
                <span className='porcentaje'>0%</span>
                <div className='button'>
                    <button>Comprar</button>
                </div>
            </div>

            <div className='row-billeteras'>
                <span className='column1'>-</span>
                <div className='currency'>
                    <img src={Iconcoin4} alt="" />
                    <span>USD Coin - USDC</span>
                </div>
                <span className='value'>0 USDC</span>
                <span className='equivalente'>≈$0</span>
                <span className='porcentaje'>0%</span>
                <div className='button'>
                    <button>Comprar</button>
                </div>
            </div>

            <div className='row-billeteras'>
                <span className='column1'>-</span>
                <div className='currency'>
                    <img src={Iconcoin5} alt="" />
                    <span>Dai - DAI</span>
                </div>
                <span className='value'>0 DAI</span>
                <span className='equivalente'>≈$0</span>
                <span className='porcentaje'>0%</span>
                <div className='button'>
                    <button>Comprar</button>
                </div>
            </div>

            <div className='row-billeteras'>
                <span className='column1'>-</span>
                <div className='currency'>
                    <img src={Iconcoin6} alt="" />
                    <span>Litecoin - LTC</span>
                </div>
                <span className='value'>0.0000 LTC</span>
                <span className='equivalente'>≈$$23.442,48</span>
                <span className='porcentaje'>0%</span>
                <div className='button'>
                    <button>Trade</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Billeteras