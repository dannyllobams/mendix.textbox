import { ReactElement, createElement } from "react";

export interface HelloWorldSampleProps {
    label?: string;
}

export function HelloWorldSample({ label }: HelloWorldSampleProps): ReactElement {
    return <div className="widget-hello-world">{label}</div>;
}
