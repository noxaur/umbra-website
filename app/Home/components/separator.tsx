interface SeparatorProp {
    className?: string;
}

export default function Separator({className}: SeparatorProp) {
    return <div className={`bg-gold ${className}`}></div>;
}
