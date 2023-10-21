import React from 'react'


export const ListItem = (props) => {
  return (
    
<tr>
  <td className='td'>{props.srno}</td>
<td className='td'>{props.number}</td>
<td className='td'>{props.date}</td>
<td className='td'>{props.name}</td>
<td className='td'>{props.unit}</td>
<td className='td'>{props.bill}</td>

</tr>
 )
}
