import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { getUsers } from "../features/UserSlice.js";

const TablePagination:React.FC = () => {
    const dispatch = useDispatch()
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    dispatch(getUsers({page:value,pageSize:10}))
  };

  return (
    <Stack spacing={2} style={{alignItems:'center', padding:'20px 0'}}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange}/>
    </Stack>
  );
}

export default TablePagination
