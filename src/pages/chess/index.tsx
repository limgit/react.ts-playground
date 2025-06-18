import { useLayoutEffect, useRef, useState } from "react";
import { CONSTS, fenToState } from "./chess.util";
import { ChessBoard, ChessPiece } from "./ChessBoard";
import {
  boardStyle,
  containerStyle,
  headerStyle,
  buttonElStyle,
  inputElStyle,
  inputFieldStyle,
  inputsStyle,
  movesStyle,
  pieceLayerStyle,
} from "./style.css";
import { Button, Input, Textarea } from "@headlessui/react";

interface BoardProps {
  fen: string;
}
function Board({ fen }: BoardProps) {
  const boardState = fenToState(fen);
  const [boardSize, setBoardSize] = useState({ width: 200, height: 200 });
  const boardContainerRef = useRef<HTMLDivElement>(null);
  const { width, height } = boardSize;

  useLayoutEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const size = entries[0]?.contentBoxSize[0]?.inlineSize;
      if (!size) return;
      setBoardSize({ width: size, height: size });
    });
    const targetDiv = boardContainerRef.current;
    if (targetDiv) {
      observer.observe(targetDiv);
    }
    return () => {
      if (targetDiv) {
        observer.unobserve(targetDiv);
      }
    };
  }, []);

  return (
    <div className={boardStyle} ref={boardContainerRef}>
      <ChessBoard width={width} height={height} />
      {boardState !== null && (
        <div className={pieceLayerStyle}>
          {boardState.board.map((cell, cellIdx) => {
            if (cell === CONSTS.EMPTY) return null;
            const row = Math.floor(cellIdx / 8);
            const col = cellIdx % 8;
            return (
              <ChessPiece
                key={cellIdx}
                piece={cell}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  width: width / 8,
                  height: height / 8,
                  transform: `translate(${col * (width / 8)}px, ${row * (height / 8)}px)`,
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export function Chess() {
  const [fenInput, setFenInput] = useState(
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
  );
  const [pgnInput, setPgnInput] = useState("");

  return (
    <div className={containerStyle}>
      <h1 className={headerStyle}>Chess board</h1>
      <Board fen={fenInput} />
      <div className={movesStyle}>Implement moves here</div>
      <div className={inputsStyle}>
        <div className={inputFieldStyle}>
          <label htmlFor="fen">FEN</label>
          <Input
            className={inputElStyle}
            id="fen"
            type="text"
            value={fenInput}
            onChange={(e) => setFenInput(e.target.value)}
          />
          <Button className={buttonElStyle}>Apply</Button>
        </div>
        <div className={inputFieldStyle}>
          <label htmlFor="pgn">PGN</label>
          <Textarea
            id="pgn"
            className={inputElStyle}
            value={pgnInput}
            onChange={(e) => setPgnInput(e.target.value)}
            rows={4}
          />
          <Button className={buttonElStyle}>Apply</Button>
        </div>
      </div>
    </div>
  );
}
