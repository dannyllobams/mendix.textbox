import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { TextBoxContainerProps } from "../typings/TextBoxProps";

import "./ui/TextBox.css";

export function TextBox({ text }: TextBoxContainerProps): ReactElement {
    return <HelloWorldSample label={text ? text : "World"} />;
}
