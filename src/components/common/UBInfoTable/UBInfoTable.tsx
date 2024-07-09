import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

interface IUBTableData {
  degree: string;
  [key: string]: string | number;
}

interface UBInfoTableProps {
  columns: string[];
  initialRows: IUBTableData[];
}

const ResponsiveTableContainer = styled(TableContainer)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '70%',
  margin: 'auto',
  marginTop: '5%',
  overflowX: 'auto',
  backgroundColor: '#FFD954', // Yellow background color
});

const StyledTableCell = styled(TableCell)({
  backgroundColor: '#FFD954', // Yellow background color for table cells
});

export const UBInfoTable: React.FC<UBInfoTableProps> = ({ columns, initialRows }) => {
  const [rows, setRows] = useState<IUBTableData[]>([...initialRows]);

  const handleInputChange = (degree: string, column: string, value: string) => {
    const newValue = parseFloat(value);
    if (newValue >= 0) {
      const updatedRows = rows.map((row) =>
        row.degree === degree ? { ...row, [column]: value } : row
      );
      setRows(updatedRows);
    }
  };

  const totals = columns.reduce<{ [key: string]: number }>((acc, column) => {
    if (
      column !== 'Degree Program' &&
      column !== 'Faculty' &&
      column !== '8. Finance-Income Bz$' &&
      column !== '9. Finance-Expenditures Bz$' &&
      column !== '1. Students Enrolled Academic Year 2023/2024' &&
      column !== '5. Origin of Students(Number)' &&
      column !== 'Faculty (2021/2022)' &&
      column !== 'Faculty (2022/2023)' &&
      column !== 'Faculty (2023/2024)' &&
      column !== '6. Campus Statistics (Number of Students) Academic Year 2023-2024'
    ) {
      acc[column] = rows.reduce((sum, row) => sum + (parseFloat(row[column] as string) || 0), 0);
    }
    return acc;
  }, {});

  const totalRow = { degree: 'Total', ...totals };

  return (
    <ResponsiveTableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="dynamic table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell
                key={column}
                align={column === 'Degree Program' || column === 'Faculty' || column === '8. Finance-Income Bz$' || column === '9. Finance-Expenditures Bz$' || column === '1. Students Enrolled Academic Year 2023/2024' || column === '5. Origin of Students(Number)' || column === '6. Campus Statistics (Number of Students) Academic Year 2023-2024' || column === 'Faculty (2021/2022)' || column === 'Faculty (2022/2023)' || column === 'Faculty (2023/2024)' ? 'left' : 'right'}
                sx={{ fontWeight: 'bold' }}
              >
                {column}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.degree} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              {columns.map((column) => (
                <StyledTableCell
                  key={column}
                  align={column === 'Degree Program' || column === 'Faculty' || column === '8. Finance-Income Bz$' || column === '9. Finance-Expenditures Bz$' || column === '1. Students Enrolled Academic Year 2023/2024' || column === '5. Origin of Students(Number)' || column === '6. Campus Statistics (Number of Students) Academic Year 2023-2024' || column === 'Faculty (2021/2022)' || column === 'Faculty (2022/2023)' || column === 'Faculty (2023/2024)' ? 'left' : 'right'}
                  sx={{ fontWeight: column === 'Degree Program' ? 'bold' : 'normal' }}
                >
                  {column === 'Degree Program' || column === 'Faculty' || column === '8. Finance-Income Bz$' || column === '9. Finance-Expenditures Bz$' || column === '1. Students Enrolled Academic Year 2023/2024' || column === '5. Origin of Students(Number)' || column === '6. Campus Statistics (Number of Students) Academic Year 2023-2024' || column === 'Faculty (2021/2022)' || column === 'Faculty (2022/2023)' || column === 'Faculty (2023/2024)'? (
                    <span style={{ fontWeight: 'bold' }}>{row.degree}</span>
                  ) : (
                    <TextField
                      type="number"
                      value={row[column] as string}
                      onChange={(e) => handleInputChange(row.degree, column, e.target.value)}
                      variant="outlined"
                      size="small"
                      inputProps={{ min: 0 }}
                    />
                  )}
                </StyledTableCell>
              ))}
            </TableRow>
          ))}
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            {columns.map((column) => (
              <StyledTableCell
                key={column}
                align={column === 'Degree Program' ? 'left' : 'right'}
                sx={{ fontWeight: 'bold' }}
              >
                {column === 'Degree Program' ? 'Total' : totalRow[column]}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </ResponsiveTableContainer>
  );
};

export default UBInfoTable;
