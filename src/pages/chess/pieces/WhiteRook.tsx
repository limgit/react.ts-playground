import { PieceProps } from "./type";

export function WhiteRook({ style }: PieceProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" style={style}>
      <g
        fill="#fff"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="butt"
          d="M9 39h27v-3H9v3zm3-3v-4h21v4H12zm-1-22V9h4v2h5V9h5v2h5V9h4v5"
        />
        <path d="m34 14-3 3H14l-3-3" />
        <path
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M31 17v12.5H14V17"
        />
        <path d="m31 29.5 1.5 2.5h-20l1.5-2.5" />
        <path fill="none" strokeLinejoin="miter" d="M11 14h23" />
      </g>
    </svg>
  );
}
