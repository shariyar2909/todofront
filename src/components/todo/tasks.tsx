import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { status } from './todo-get';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Todo } from './todo';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface taskProps {
    todoList?: Todo[];
    status: status;
    updateListState:(todo:Todo[]) => void;
}

export function Task(props: taskProps) {

  const updateStatus =(id:number, currStatus:string) => {

    const currState = [...props.todoList!];
    const updateObj = props.todoList!.find(x => x.id === id);
    currStatus === status.Pending ?
    updateObj!.status = status.Completed :
    updateObj!.status = status.Pending;
    props.updateListState(currState);

  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Move to</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { props.todoList?.map(row => (
              row.status === props.status &&
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center">{row.title}</StyledTableCell>
              <StyledTableCell align="center">{row.description}</StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
              <StyledTableCell align="center">
                <Button variant="contained" color={props.status === status.Pending ? 'success' : 'secondary'} onClick={() => updateStatus(row.id,row.status)}>
                  {props.status === status.Pending ? status.Completed : status.Pending}
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
