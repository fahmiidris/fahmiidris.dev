declare module '*.svg' {
  export const ReactComponent: (props: React.ComponentProps<'svg'>) => JSX.Element;
}
