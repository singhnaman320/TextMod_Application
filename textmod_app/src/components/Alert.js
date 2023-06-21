import React from 'react'

export default function Alert(props) {

  // Capitalizing first word of alert
  const capitalize = (word) =>{

    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    
    props.presentAlert && <div className={`alert alert-${props.presentAlert.alertType} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.presentAlert.alertType)}</strong>: {props.presentAlert.msg}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    
  )
}