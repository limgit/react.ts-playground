export const CONSTS = {
  EMPTY: 0x00,
  PAWN: 0x01,
  KNIGHT: 0x02,
  BISHOP: 0x03,
  ROOK: 0x04,
  QUEEN: 0x05,
  KING: 0x06,
  WHITE: 0x10,
  BLACK: 0x20,
};
const MASK = {
  PIECE: 0x0f,
  COLOR: 0xf0,
};
const PIECE_KIND_TO_CONST = {
  p: CONSTS.PAWN,
  n: CONSTS.KNIGHT,
  b: CONSTS.BISHOP,
  r: CONSTS.ROOK,
  q: CONSTS.QUEEN,
  k: CONSTS.KING,
};
const CONST_TO_PIECE_KIND = Object.fromEntries(
  Object.entries(PIECE_KIND_TO_CONST).map(([k, v]) => [v, k]),
);

export interface BoardState {
  board: number[];
  turn: number;
  castling: number; // 0b1111 == KQkq
  enPassant: number; // en passant target square (-1 if not en passant). a8 = 0, h1 = 63
  halfMove: number; // halfmove number
  fullMove: number; // fullmove number
}

/**
 * Convert the cell notation to index value
 *
 * Top left (a8) of the board has index 0
 * Top right (h8) of the board has index 7
 * Bottom left (a1) of the board has index 56
 * Bottom right (h1) of the board has index 63
 * i.e., starting from top left, assign index left-to-bottom.
 */
function cellToIndex(cell: string): number {
  const rank = Number.parseInt(cell[1]!) - 1;
  const file = cell.charCodeAt(0) - "a".charCodeAt(0);
  return (7 - rank) * 8 + file;
}
/**
 * Convert the index to cell notation.
 *
 * For details, see {@linkcode cellToIndex}.
 */
function indexToCell(index: number): string {
  const file = index % 8;
  const rank = 7 - Math.floor(index / 8);
  return `${String.fromCharCode(file + "a".charCodeAt(0))}${rank + 1}`;
}

export function fenToState(fen: string): BoardState | null {
  try {
    const [board, turn, castling, enPassant, halfMove, fullMove] =
      fen.split(" ");
    if (!board || !turn || !castling || !enPassant || !halfMove || !fullMove) {
      throw new Error("Invalid FEN");
    }
    return {
      board: board.split("/").flatMap((row) => {
        return row.split("").flatMap((chr) => {
          const emptyCount = Number.parseInt(chr);
          if (Number.isNaN(emptyCount)) {
            // Piece notation
            const pieceKind =
              PIECE_KIND_TO_CONST[
                chr.toLowerCase() as keyof typeof PIECE_KIND_TO_CONST
              ];
            if (!pieceKind) {
              throw new Error(`Invalid piece notation: ${chr}`);
            }
            return [
              pieceKind |
                (chr.toUpperCase() === chr ? CONSTS.WHITE : CONSTS.BLACK),
            ];
          }
          return Array.from({ length: emptyCount }, () => CONSTS.EMPTY);
        });
      }),
      turn: turn === "w" ? CONSTS.WHITE : CONSTS.BLACK,
      castling:
        (castling.includes("K") ? 0b1000 : 0) |
        (castling.includes("Q") ? 0b0100 : 0) |
        (castling.includes("k") ? 0b0010 : 0) |
        (castling.includes("q") ? 0b0001 : 0),
      enPassant: enPassant === "-" ? -1 : cellToIndex(enPassant),
      halfMove: Number.parseInt(halfMove),
      fullMove: Number.parseInt(fullMove),
    };
  } catch {
    return null;
  }
}
export function stateToFen(state: BoardState): string {
  const board = Array.from({ length: 8 }, (_, idx) =>
    state.board.slice(idx * 8, (idx + 1) * 8),
  )
    .map((row) => {
      return row.reduce((acc, curr) => {
        if (curr === CONSTS.EMPTY) {
          const endNum = parseInt(acc.at(-1) ?? "NotNumber");
          if (Number.isNaN(endNum)) {
            return `${acc}1`;
          }
          return `${acc.slice(0, -1)}${endNum + 1}`;
        } else {
          const piece = CONST_TO_PIECE_KIND[curr & MASK.PIECE]!;
          return `${acc}${(curr & MASK.COLOR) === CONSTS.WHITE ? piece.toUpperCase() : piece}`;
        }
      }, "");
    })
    .join("/");
  const turn = state.turn === CONSTS.WHITE ? "w" : "b";
  const castling =
    state.castling === 0
      ? "-"
      : "KQkq"
          .split("")
          .filter((_, idx) => state.castling & (1 << idx))
          .join("");
  const enPassant = state.enPassant === -1 ? "-" : indexToCell(state.enPassant);
  return [
    board,
    turn,
    castling,
    enPassant,
    state.halfMove,
    state.fullMove,
  ].join(" ");
}
