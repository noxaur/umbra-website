type HeightTypes = `h-${string}` | `min-h-${string}` | `max-h-${string}`;
type WidthTypes = `w-${string}` | `min-w-${string}` | `max-w-${string}`;
export type SeparatorProp = {
	width: WidthTypes;
	height: HeightTypes;
	css?: React.CSSProperties;
};

export default function Separator({ width, height, css }: SeparatorProp) {
	if (css) {
		return <div className={`${width} ${height} ${css}`}></div>;
	}
	return <div className={`${width} ${height} bg-gold`}></div>;
}
