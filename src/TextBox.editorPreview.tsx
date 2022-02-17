import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { TextBoxPreviewProps } from "../typings/TextBoxProps";

export function preview({ text }: TextBoxPreviewProps): ReactElement {
    return <HelloWorldSample label={text} />;
}

export function getPreviewCss(): string {
    return require("./ui/TextBox.css");
}
