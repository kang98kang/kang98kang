import type { FC, DetailedHTMLProps, HTMLAttributes } from "react";

type ReactSpanProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export type IconProps = ReactSpanProps & {
  name: string;
};

// prettier-ignore
export const Icons: FC<IconProps> = ({name, className:_classname, ...props}) => {
  const className = ['material-icons', _classname].join(' ');
  return <span {...props} className={className}>{name}</span>
}
