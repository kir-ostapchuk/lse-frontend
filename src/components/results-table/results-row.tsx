import React, {FC} from 'react';
import {IResults} from "../../types/types";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

interface ResultsRowProps {
    result: IResults,
}

const ResultsRow: FC<ResultsRowProps> = ({result}) => {
    return (
        <TableRow
            key={result.id}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            <TableCell align="left">{result.quizName}</TableCell>
            <TableCell align="left">{result.firstName}</TableCell>
            <TableCell align="left">{result.lastName}</TableCell>
            <TableCell align="left">{result.group}</TableCell>
            <TableCell align="left">{result.faculty}</TableCell>
            <TableCell align="left">{result.email}</TableCell>
            <TableCell align="left">{result.score}</TableCell>
            <TableCell align="left">{result.maxScore}</TableCell>
        </TableRow>
    );
};

export default ResultsRow;
