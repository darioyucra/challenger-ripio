import {useEffect, useState} from 'react'
import Slider from "react-slick";
import ArrowSlider from '../img/arrow-slider.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cotizaciones = () => {

    const[monedas, setMonedas] = useState([]);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://app.ripio.com/api/v3/public/rates/?country=AR"

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            setMonedas(resultado);
        }
        consultarAPI();
    },[])

    var settings = {
        dots: false,
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            }
        ]
      };

    const classCurrency = (valor) => {
        if(valor > 0.00) {
            return 'positivo'
        } else {
            return 'negativo'
        }
    }

  return (
    <div className='panel-row cotizaciones'>
        <h2>Cotizaciones <a href="#">Ver todas</a></h2>
        <div className='currencys'>
            <Slider {...settings}>
                {
                    monedas.map(moneda  => {
                        return <div className='box-currency'>
                            <div className='row name-icon-currency'>
                                <span className='name_currency'>{moneda.ticker}</span>
                            </div>
                            <p className='price_currency'>$ {moneda.buy_rate}</p>
                            <p className='last_day'>
                                Últimas 24hs. <span className={classCurrency(Number(moneda.variation))}>{moneda.variation}</span>
                            </p>
                        </div>
                    })
                }
            </Slider>
        </div>
    </div>
  )
}

export default Cotizaciones