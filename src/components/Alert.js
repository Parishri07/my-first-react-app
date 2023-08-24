import React from 'react'

export default function Alert(props) {
    const capitalise = (word)=>{
       const lower = word.toLowerCase();
       return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show" role="alert"`} style={{color: alert && alert.textColor}}>
    <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg}
  </div>
  )
}

//if the first condition is true then only second condition gets executed otherwise not. This happens because JSX gets converted to JavaScript calls
