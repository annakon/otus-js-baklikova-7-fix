// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип
import React from "react"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME = any;

// Hint: infer
export const getDefaultProps = <T>(
    component: React.ComponentType<T>
): GetUserOrderStates => {
    return component.defaultProps;
};
