import React from "react";

const Spinner = (props)=>{

  return (
  
    <diV className="ui active dimmer">
<div className="ui big text loader">
    Loading....
</div>
    </diV>
  )  
}
Spinner.defultProps ={
    message:"loading...."
}
export default Spinner