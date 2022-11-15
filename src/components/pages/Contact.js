import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const styles = {
  title: {
    textAlign: "center",
  },
};

const formStyle = {
  border: "2px solid #000000",
  borderRadius: "5px",
  padding: 15,
  backgroundColor: "#00000001",
  marginBottom: "25px",
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contact-form">
    <Grid container justifyContent="center">
      <Grid item xs={10} md={6}>
        <h2 style={styles.title}>Contact Me</h2>
        <form id="form" style={formStyle} onSubmit={handleSubmit}>
          <Grid container direction="column" alignItems="center">
          <TextField
              required
              sx={{
                "& .MuiInputBase-root": {
                  color: "#000000",
                },
                "& .MuiFormLabel-root": {
                  color: "#000000",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "#000000",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#000000",
                  },
                  "&:hover fieldset": {
                    borderColor: "#000000",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#000000",
                  },
                },
              }}
              id="contactName"
              label="Name"
              variant="outlined"
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%" }}
            />
            <TextField
              required
              sx={{
                "& .MuiInputBase-root": {
                  color: "#000000",
                },
                "& .MuiFormLabel-root": {
                  color: "#000000",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "#000000",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#000000",
                  },
                  "&:hover fieldset": {
                    borderColor: "#000000",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#000000",
                  },
                },
              }}
              id="contactEmail"
              label="E-Mail"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%" }}
            />
            <TextField
              required
              sx={{
                "& .MuiInputBase-root": {
                  color: "#000000",
                },
                "& .MuiFormLabel-root": {
                  color: "#000000",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "#000000",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#000000",
                  },
                  "&:hover fieldset": {
                    borderColor: "#000000",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#000000",
                  },
                },
              }}
              id="contactMessage"
              label="Message"
              variant="outlined"
              margin="normal"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              multiline
              rows={6}
              style={{ width: "100%" }}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
    </div>
  );
};

export default Contact;
