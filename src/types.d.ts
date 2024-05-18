declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
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
