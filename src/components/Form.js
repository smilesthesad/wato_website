import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import GreyButton from "./GreyButton";

function Form(props) {
    return (
        <Grid container spacing={2}>
            {props.fields.map(field => {
                return (
                    <Grid item xs={field.xs}>
                        <TextField
                            label={field.label}
                            variant="filled"
                            multiline={field.multiline}
                            rows={field.rows}
                            fullWidth
                        />
                    </Grid>
                );
            })}
            <Grid item xs={6}>
                <GreyButton>
                    {props.submitLabel}
                </GreyButton>
            </Grid>
        </Grid>
    );
}

export default Form;
