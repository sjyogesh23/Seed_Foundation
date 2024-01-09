import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export const Learn = (props) => {
  const emergence = props.emergence;

  const purpose = props.purpose;

  const future = props.future;

  const rows = [
    createData(
      purpose?.table?.students[0],
      purpose?.table?.institute[0],
      purpose?.table?.industry[0],


    ),
    createData(
      purpose?.table?.students[1],
      purpose?.table?.institute[1],
      purpose?.table?.industry[1],


    ),
    createData(
      purpose?.table?.students[2],
      purpose?.table?.institute[2],
      purpose?.table?.industry[2],


    )
  ];
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="about_learn_title">Emergence of Seed Foundation of PEC</div>
        </AccordionSummary>
        <AccordionDetails className="about_learn_body">
          <Typography style={{textAlign:'start'}}>{emergence}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div className="about_learn_title">Purpose of Seed Foundation of PEC</div>
        </AccordionSummary>
        <AccordionDetails className="about_learn_body">
          <Typography>
            {purpose?.header}

            <br/><br/>

            <div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Student</TableCell>
                      <TableCell align="center">Institute</TableCell>
                      <TableCell align="center">Industry</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        style={{backgroundColor:'#f5f5f5'}}
                      >
                        <TableCell component="th" scope="row" align="center">
                          {row.name}
                        </TableCell>
                        <TableCell align="center">{row.calories}</TableCell>
                        <TableCell align="center">{row.fat}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div className="about_learn_title">Future of Seed Foundation of PEC</div>
        </AccordionSummary>
        <AccordionDetails className="about_learn_body">
          <Typography style={{textAlign:'start'}}>{future}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};