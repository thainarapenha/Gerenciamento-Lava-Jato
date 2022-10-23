import React from "react";
import InputMask from "react-input-mask";

export const MascaraCelular = (props) => {
  return (
    <InputMask mask="(99) 9.9999-9999" placeholder="Digite o WhatsApp" value={props.value} onChange={props.onChange} />
  );
}