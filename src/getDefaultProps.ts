// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип
import React from "react"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME<T> = Partial<T> | undefined;

// Hint: infer
export const getDefaultProps = <T>(
    component: React.ComponentType<T>
): FIXME<T>  => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
    return component.defaultProps;
};
