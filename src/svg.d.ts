declare module '*.svg' {
    const Icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
    export default Icon;
}
