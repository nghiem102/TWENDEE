import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableFieldsType } from "../types/common";
import TablePagination from "./TablePagination";

interface Props {
  data: any;
  fields: TableFieldsType;
}
const DataTable: React.FC<Props> = ({ data, fields }) => {
    let newData = data
    newData = newData?.sort((a:any,b:any) => {
        return a.fullName.localeCompare(b.fullName)
    })
    console.log(newData)
  const columns = Object.keys(fields).map((item) => ({
    key: item,
    label: fields[item].label,
  }));

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  style={{ ...fields[column.key].style }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {newData?.map((item: any, index: number) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map(({ key }) => {
                    const value = item[key];
                    return (
                      <TableCell key={key}>
                        {fields[key].renderContent
                          ? fields[key].renderContent(item)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination />
    </Paper>
  );
};
export default DataTable;
