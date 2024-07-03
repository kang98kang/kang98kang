import { FC } from "react";
//FC = Function Component

export type ArrowComponentProps = {
  href: string;
  text: string;
};

export const ArrowComponent: FC<ArrowComponentProps> = (props) => {
  const { href, text } = props;
  return (
    <li>
      <a href={href}>
        <p>{text}</p>
      </a>
    </li>
  );
};

export default ArrowComponent;
