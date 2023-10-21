import React, { useState } from "react";
import { Header } from "./Header";
import { List } from "./List";
import { ListItem } from "./ListItem";
import { Footerlist } from "./Footerlist";

function Main(){
  let Mydata=[];
  const[newunit,setnewunit]=useState(0);
  const[newbill,setnewbill]=useState(0);

 const[ data,setdata]=useState(Mydata)
  const sort=( info)=>{
     const neww=[info,...data];
     setdata(neww);
    
}
const sum=(cal)=>{
 setnewunit(parseFloat(newunit)+parseFloat(cal.unit));
 setnewbill(parseFloat(newbill)+parseFloat(cal.bill));
  
}
return(
    <div className="container">
        <Header/>
        <div className="row">
        <List  add={sort}  
        bdata={sum}/>
            <div className="col-8 bg-danger">
            <table class="table ">
    <thead>
      <tr>
        <th>Sr No</th>
        <th>Bill no</th>
        <th>Bill Date</th>
        <th>customer</th>
        <th>Unit</th>
        <th>Bill</th>
      </tr>
    </thead>{
data.map((el,index)=>{
  return(
    <ListItem 
    srno={index+1}
    number={el.number}
    date={el.date}
    name={el.name}
    unit={el.unit}
    bill={el.bill}
 />
  )
})
}
    </table>
    <Footerlist   unit={newunit}    bill={newbill} />
            </div>
        </div>
 </div>
)
}
export default Main;
