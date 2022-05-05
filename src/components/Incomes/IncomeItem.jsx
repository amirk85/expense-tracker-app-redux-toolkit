import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function IncomeItem({ income }) {
  const { id, desc, amount } = income;

  return (
    <div>
      <List>
        {
          <ListItem
            secondaryAction={
              <Box>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  sx={{ marginRight: "0.5rem" }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Box>
            }
          >
            <ListItemText primary={desc} secondary={amount} />
          </ListItem>
        }
      </List>
    </div>
  );
}
