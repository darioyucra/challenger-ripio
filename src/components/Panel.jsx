import React from 'react'
import Billeteras from './Billeteras'
import Cotizaciones from './Cotizaciones'
import Total from './Total'

const Panel = () => {
  return (
    <div className='panel'>
      <Total/>
      <Cotizaciones/>
      <Billeteras/>
    </div>
  )
}

export default Panel