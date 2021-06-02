///////////////
// public types

import React from 'react';
import { tAnchorEdge, tPaths, tSvgElems, tArrowShapes } from '.';

export type xarrowPropsType = {
  start: refType;
  end: refType;
  startAnchor?: anchorType | anchorType[];
  endAnchor?: anchorType | anchorType[];
  label?: labelType | labelsType;
  color?: string;
  lineColor?: string | null;
  headColor?: string | null;
  tailColor?: string | null;
  strokeWidth?: number;
  showHead?: boolean;
  headSize?: number;
  showTail?: boolean;
  tailSize?: number;
  path?: pathType;
  showXarrow?: boolean;
  curveness?: number;
  gridBreak?: number;
  // gridRadius?: number;
  dashness?:
    | boolean
    | {
        strokeLen?: number;
        nonStrokeLen?: number;
        animation?: boolean | number;
      };
  headShape?: svgEdgeShapeType | svgCustomEdgeType;
  tailShape?: svgEdgeShapeType | svgCustomEdgeType;
  animateDrawing?: boolean | number;
  passProps?: JSX.IntrinsicElements[svgElemType];
  SVGcanvasProps?: React.SVGAttributes<SVGSVGElement>;
  arrowBodyProps?: React.SVGProps<SVGPathElement>;
  arrowHeadProps?: JSX.IntrinsicElements[svgElemType];
  arrowTailProps?: JSX.IntrinsicElements[svgElemType];
  divContainerProps?: React.HTMLProps<HTMLDivElement>;
  SVGcanvasStyle?: React.CSSProperties;
  divContainerStyle?: React.CSSProperties;
  _extendSVGcanvas?: number;
  _debug?: boolean;
  _cpx1Offset?: number;
  _cpy1Offset?: number;
  _cpx2Offset?: number;
  _cpy2Offset?: number;
};

export type pathType = typeof tPaths[number];
export type anchorType = anchorPositionType | anchorCustomPositionType;
export type anchorPositionType = typeof tAnchorEdge[number];

export type anchorCustomPositionType = {
  position: anchorPositionType;
  offset: { rightness?: number; bottomness?: number };
};
export type refType = React.MutableRefObject<any> | string;
export type labelsType = {
  start?: labelType;
  middle?: labelType;
  end?: labelType;
};
export type labelType = JSX.Element | string;

export type svgCustomTypeGeneric<T extends svgElemType> = {
  svgElem: T;
  svgProps?: JSX.IntrinsicElements[T];
  offsetForward?: number;
};
export type svgCustomEdgeType = { [K in svgElemType]: svgCustomTypeGeneric<K> }[svgElemType];
export type svgEdgeShapeType = typeof tArrowShapes[number];
export type svgEdgeType = svgEdgeShapeType | svgCustomEdgeType;
export type svgElemType = typeof tSvgElems[number];

////////////////
// private types

export type _prevPosType = {
  start: {
    x: number;
    y: number;
    right: number;
    bottom: number;
  };
  end: {
    x: number;
    y: number;
    right: number;
    bottom: number;
  };
};

export type anchorSideType = 'left' | 'right' | 'top' | 'bottom';

// pick the common props between 2 objects
type Common<A, B> = {
  [P in keyof A & keyof B]: A[P] | B[P];
};

// const c: Common<T1, T2> = { y: 123 };

// export type SvgCustomTypeOneLiner = svgElemType extends infer T
//   ? T extends svgElemType
//     ? { svgElem: T; svgProps?: JSX.IntrinsicElements[T] }
//     : never
//   : never;

// export type svgCustomType<T extends svgElemType> = {
//   svgElem: T;
//   svgProps?: { [key in T]: JSX.IntrinsicElements[T] };
//   offsetForward?: number;
// };
