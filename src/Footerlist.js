import React from 'react'

export const Footerlist = (props) => {
  return (
    <div className='new'>


Total unit:-
<input   value={props.unit}/> 
Total Bill:-
<input  value={props.bill}/>
    </div>
  )
}
