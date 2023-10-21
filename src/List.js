import React, { useState } from 'react'

export const List = ( props) => {
    const[number,setnumber]=useState('');
        const[date,setdate]=useState('');
        const[name,setname]=useState('');
        const[unit,setunit]=useState('');
        const[bill,setbill]=useState(0);

const calculate=()=>{
    if ( unit>0 && unit<=100) {
        const ans=(unit*8)
        setbill(ans);
    }
    else if( unit>=101  && unit<=200){
 const ans1= ((unit-100)*10)+800
setbill(ans1);
    }
    else if( unit>=201  && unit<=300){
        const ans2= ((unit-200)*12)+1800
       setbill(ans2);
    }
    else if( unit>=301  && unit<=400){
        const ans2= ((unit-300)*14)+3000
       setbill(ans2);
    }
    else if( unit>=401 ){
        const ans2= ((unit-400)*16)+4400
       setbill(ans2);
    }

}
const add=()=>{
let pdata={
            number:number,
            date:date,
            name:name,
            unit:unit,
         bill:bill
         }
        let deta={
            unit:unit,
             bill:bill
        }
        setnumber(" ");
        setdate(" ");
        setname("");
        setunit(" ");
        console.log(pdata);
 props.add(pdata);
 props.bdata(deta)
    }
  return (
    <div className='col-sm-4 col-4 bg-dark text-light'>
Bill No:-
<input type='text' value={number} onChange={(e)=>setnumber(e.target.value)}/>
<br></br>
<br></br>
Bill Date:-
<input  type='date' name='date' value={date}  onChange={(e)=>setdate(e.target.value)}/>
<br></br>
<br></br>
Customer:-
<input type='text' value={name} onChange={(e)=>setname(e.target.value)}/>
<br></br>
<br></br>
Unit:-
<input  type='text' value={unit}  onKeyUp={calculate} onChange={(e)=>setunit(e.target.value)} />
<br></br>
<br></br>
<button onClick={add} >
    Submit
</button>
</div>
  )
}
