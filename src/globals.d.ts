import {FunctionComponent, SVGAttributes} from "react";

declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.svg" {
  const content: FunctionComponent<SVGAttributes<SVGElement>>;
  export default content;
}

export interface IPageProps {
  data: any;
}
