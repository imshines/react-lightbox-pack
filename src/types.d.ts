declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}

declare module "*.module.css";

type SrcType = {
  id: string;
  image: string;
  title?: string;
  description?: string;
};

type DataArrType = string[];

interface LightBoxTypes {
  state: boolean;
  event: (boolean, number) => void;
  data: SrcType[];
  dataArr?: DataArrType;
  imageWidth?: string;
  imageHeight?: string;
  thumbnailHeight?: number;
  thumbnailWidth?: number;
  setImageIndex: (number) => void;
  imageIndex: number;
}

type ArrowType = "next" | "prev";

type ImageIndexType = number;
