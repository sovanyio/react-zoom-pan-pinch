import React from "react";
import { PropsList } from '../store/interfaces/transformElementInterface';
declare class TransformComponent extends React.Component<PropsList> {
    private wrapperRef;
    private contentRef;
    componentDidMount(): void;
    render(): JSX.Element;
}
export { TransformComponent };
