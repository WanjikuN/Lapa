import { Box, Button, TextField, Typography } from "@mui/material";
import NairobiMap from "../components/Contact/NairobiMap";
import FooterHome from "../components/FooterHome";
import Navbar from "../components/Navbar";
import "./Contact.css";
const Contact = ({ page, setPage }) => {
  return (
    <>
      <Navbar setPage={setPage} />
      <div id="contact-cont">
        <div id="map">
          {/* map */}
          <NairobiMap />
        </div>

        {/* forn */}

        <Box
          id="form"
          component="form"
          // onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
          // sx={{ maxWidth: "300px", margin: "auto" }}
        >
          {/* <Typography
            variant="h1"
            gutterBottom
            id="contact-title"
            style={{ color: "#581411" }}
          >
            Contact Us
          </Typography> */}

          <TextField
            className="form-input"
            required
            size="small"
            label="Name"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            size="small"
            className="form-input"
            required
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            type="email"
          />
          <TextField
            size="small"
            className="form-input"
            required
            label="Subject"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            size="small"
            required
            label="Message"
            fullWidth
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
          />
          <Button
            type="submit"
            variant="contained"
            // color="primary"
            fullWidth
            sx={{ marginTop: "2px" }}
            id="btn"
          >
            Send Message
          </Button>
        </Box>
      </div>
      <div>
        {/* footer */}
        <FooterHome />
      </div>
    </>
  );
};
export default Contact;
