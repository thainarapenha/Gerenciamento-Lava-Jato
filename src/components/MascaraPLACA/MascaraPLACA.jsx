import React from "react";
import InputMask from "react-input-mask";

export const MascaraPLACA = (props) => {
  return (
    <InputMask mask="aaa9*99" placeholder="Digite a placa do cliente" value={props.value} onChange={props.onChange} />
  );
}