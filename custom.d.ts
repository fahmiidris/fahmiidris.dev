interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

declare type IconType = (props: IconBaseProps) => JSX.Element;

declare module '*.svg' {
  export const ReactComponent: IconType;
}
