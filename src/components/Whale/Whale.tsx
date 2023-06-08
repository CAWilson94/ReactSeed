import React from "react";
import { UserContext, contextType } from "../../stores/UserContext";

export default function Whale() {

  const bob: contextType| undefined = React.useContext(UserContext);

  if(!bob){ 
    <div>Loading...</div>
  }
  const {value, setValue} = bob as contextType;

  const provider: contextType = React.useMemo(() => ({value, setValue}), [value, setValue]);

  return (
    <div>
      <h2>Whale</h2>
      <h3> {`${value} is very happy`}</h3>
    </div>
  );
}


