import { CSSProperties } from "react";
import { CONSTS } from "./chess.util";
import { BlackRook } from "./pieces/BlackRook";
import { BlackKnight } from "./pieces/BlackKnight";
import { BlackBishop } from "./pieces/BlackBishop";
import { BlackQueen } from "./pieces/BlackQueen";
import { BlackKing } from "./pieces/BlackKing";
import { BlackPawn } from "./pieces/BlackPawn";
import { WhiteRook } from "./pieces/WhiteRook";
import { WhiteKnight } from "./pieces/WhiteKnight";
import { WhiteBishop } from "./pieces/WhiteBishop";
import { WhiteQueen } from "./pieces/WhiteQueen";
import { WhiteKing } from "./pieces/WhiteKing";
import { WhitePawn } from "./pieces/WhitePawn";

interface ChessBoardProps {
  width: number;
  height: number;
}
export function ChessBoard({ width, height }: ChessBoardProps) {
  const [light, dark] = ["#F0D9B5", "#B58863"];
  return (
    <svg width={width} height={height}>
      {/* Draw checkerboard */}
      {Array.from({ length: 64 }, (_, idx) => idx).map((cellIdx) => {
        const row = Math.floor(cellIdx / 8);
        const col = cellIdx % 8;
        return (
          <rect
            key={cellIdx}
            x={col * (width / 8)}
            y={row * (height / 8)}
            width={width / 8}
            height={height / 8}
            fill={row % 2 === col % 2 ? light : dark}
          />
        );
      })}
    </svg>
  );
}

interface ChessPieceProps {
  piece: number;
  style: CSSProperties;
}
export function ChessPiece({ piece, style }: ChessPieceProps) {
  if (piece === (CONSTS.BLACK | CONSTS.ROOK)) {
    return <BlackRook style={style} />;
  }
  if (piece === (CONSTS.BLACK | CONSTS.KNIGHT)) {
    return <BlackKnight style={style} />;
  }
  if (piece === (CONSTS.BLACK | CONSTS.BISHOP)) {
    return <BlackBishop style={style} />;
  }
  if (piece === (CONSTS.BLACK | CONSTS.QUEEN)) {
    return <BlackQueen style={style} />;
  }
  if (piece === (CONSTS.BLACK | CONSTS.KING)) {
    return <BlackKing style={style} />;
  }
  if (piece === (CONSTS.BLACK | CONSTS.PAWN)) {
    return <BlackPawn style={style} />;
  }
  if (piece === (CONSTS.WHITE | CONSTS.ROOK)) {
    return <WhiteRook style={style} />;
  }
  if (piece === (CONSTS.WHITE | CONSTS.KNIGHT)) {
    return <WhiteKnight style={style} />;
  }
  if (piece === (CONSTS.WHITE | CONSTS.BISHOP)) {
    return <WhiteBishop style={style} />;
  }
  if (piece === (CONSTS.WHITE | CONSTS.QUEEN)) {
    return <WhiteQueen style={style} />;
  }
  if (piece === (CONSTS.WHITE | CONSTS.KING)) {
    return <WhiteKing style={style} />;
  }
  if (piece === (CONSTS.WHITE | CONSTS.PAWN)) {
    return <WhitePawn style={style} />;
  }
  return null;
}
