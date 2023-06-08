import React from "react";
import { UserContext, contextType } from "../../stores/UserContext";

export default function Home() {

  // grab out context value
  const contextValue = React.useContext(UserContext);
  // if undefined just show loading screen
  if(!contextValue){ 
    return<div>Loading...</div>
  }
  // then destructure values from context value instead of an assertion
  const {value, setValue} = contextValue as contextType;
  
  return (
    <div>
      <h2> Home Page </h2>
      <h3>{value}</h3>
    </div>
  );
}
