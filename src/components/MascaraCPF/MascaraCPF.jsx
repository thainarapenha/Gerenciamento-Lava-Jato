import React from "react";
import InputMask from "react-input-mask";

export const MascaraCPF = (props) => {
  return (
    <InputMask mask="999.999.999-99" placeholder="Digite o CPF do cliente" value={props.value} onChange={props.onChange} />
  );
}