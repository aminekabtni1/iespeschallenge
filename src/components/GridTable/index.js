import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
export default function GridTable({ columns, rows, label }) {
  return (
    <TableContainer
      sx={{
        overflowX: "auto",
        "&& .MuiTableCell-root": { backgroundColor: "transparent !important" },
        "&& .MuiTableHead-root": { display: "table-header-group", padding: 0 },
      }}
    >
      <Table aria-label={label} size="small">
        <TableHead>
          <TableRow>
            {columns.map((c) => (
              <TableCell
                key={c.key}
                sx={{
                  color: "#a0aec0",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                {c.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={row.id || i}>
              {columns.map((c) => (
                <TableCell
                  key={c.key}
                  sx={{
                    color: "#ffffff",
                    fontSize: "13px",
                    borderColor: "rgba(160,174,192,.15)",
                    py: 2,
                  }}
                >
                  {c.render ? c.render(row[c.key], row) : row[c.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
