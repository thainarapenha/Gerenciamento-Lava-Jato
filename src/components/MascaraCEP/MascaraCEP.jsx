import React from "react";
import InputMask from "react-input-mask";

export const MascaraCEP = (props) => {
  return (
    <InputMask mask="99999-999" placeholder="Digite o CEP do cliente" value={props.value} onChange={props.onChange} />
  );
}