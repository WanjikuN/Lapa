import { Box, Button, TextField, Typography } from "@mui/material";
import NairobiMap from "../components/Contact/NairobiMap";
import FooterHome from "../components/FooterHome";
import Navbar from "../components/Navbar";
import "./Contact.css";
const Contact = ({page, setPage}) => {
  return (
    <div>
      <Navbar setPage={setPage} />
      <div id="contact-cont">
        <div id="map">
          {/* map */}
          <NairobiMap />
        </div>
        <div id="form">
          {/* forn */}

          
            <Box
              component="form"
              // onSubmit={handleSubmit}
              noValidate
              autoComplete="off"
              sx={{ maxWidth: "500px", margin: "auto" }}
            >
              <Typography variant="h4" gutterBottom>
                Contact Us
              </Typography>

              <TextField
                required
                label="Name"
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
                type="email"
              />
              <TextField
                required
                label="Subject"
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
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
                sx={{ marginTop: "20px" }}
                id="btn"
              >
                Send Message
              </Button>
            </Box>
         
        </div>
      </div>
      <div>
        {/* footer */}
        <FooterHome />
      </div>
    </div>
  );
};
export default Contact;
