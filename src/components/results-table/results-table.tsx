import * as React from 'react';
import {FC} from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import {IResults} from '../../types/types';
import ResultsHeader from "./results-header";
import ResultsBody from "./results-body";

interface ResultsTableProps {
    results: IResults[],
    forCurrentUser: boolean,
}

const ResultsTable: FC<ResultsTableProps> = ({results, forCurrentUser}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <ResultsHeader forCurrentUser={forCurrentUser}/>
                <ResultsBody results={results} forCurrentUser={forCurrentUser}/>
            </Table>
        </TableContainer>
    );
}

export default ResultsTable;
