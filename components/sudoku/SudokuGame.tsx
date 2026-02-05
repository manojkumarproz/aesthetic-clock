"use client";
import { useEffect, useState } from "react";
import { generateSudoku } from "../../utils/sudokuGenerator";

export default function SudokuGame() {
    const [board, setBoard] = useState<number[][]>([]);
    const [solution, setSolution] = useState<number[][]>([]);
    const [level, setLevel] = useState(1);

    useEffect(() => {
        const { puzzle, solution } = generateSudoku(level);
        setBoard(puzzle);
        setSolution(solution);
    }, [level]);

    const updateCell = (r: number, c: number, val: string) => {
        const newBoard = board.map(row => [...row]);
        newBoard[r][c] = Number(val) || 0;
        setBoard(newBoard);
    };

    const checkWin = () => {
        if (JSON.stringify(board) === JSON.stringify(solution)) {
            alert("🎉 Level Complete!");
            setLevel(l => l + 1);
        }
    };

    if (!board.length) return null;

    return (
        <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-4 shadow-xl">
            <h3 className="text-white text-center mb-3 font-semibold">
                Sudoku • Level {level}
            </h3>

            <div className="grid grid-cols-9 gap-[3px] w-[420px] md:w-[480px] xl:w-[520px]">
                {board.map((row, r) =>
                    row.map((cell, c) => (
                        <input
                            key={`${r}-${c}`}
                            value={cell || ""}
                            onChange={(e) => updateCell(r, c, e.target.value)}
                            maxLength={1}
                            className={`
                                        aspect-square
                                        text-lg md:text-xl xl:text-2xl
                                        text-white text-center
                                        bg-white/5
                                        border border-white/20

                                        ${c % 3 === 0 ? "border-l-4 border-l-white/60" : ""}
                                        ${r % 3 === 0 ? "border-t-4 border-t-white/60" : ""}
                                        ${c === 8 ? "border-r-4 border-r-white/60" : ""}
                                        ${r === 8 ? "border-b-4 border-b-white/60" : ""}

                                        focus:outline-none focus:bg-white/10
                                    `}
                        />

                    ))
                )}
            </div>

            <button
                onClick={checkWin}
                className="mt-4 w-full bg-white/10 hover:bg-white/20 text-white rounded-lg py-2"
            >
                Check
            </button>
        </div>
    );
}
