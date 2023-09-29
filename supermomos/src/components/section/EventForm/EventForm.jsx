import * as React from "react";

import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
  Checkbox,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Chip,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import GroupsIcon from "@mui/icons-material/Groups";
import PaidIcon from "@mui/icons-material/Paid";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

import { ThemeProvider, createTheme } from "@mui/material/styles";

// Button Theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#14597a",
    },
  },
});

const submitBtnTheme = createTheme({
  palette: {
    primary: {
      main: "#fef452",
    },
  },
});

// Component
const EventForm = () => {
  // Using useState Hook To Manage Upload File Data
  const [image, setImage] = React.useState();

  // Using useState Hook To Manage Event Data
  const [event, setEvent] = React.useState();

  // EVENT DATA
  const EVENT_DATA = {
    id: "event-1",
    title:
      "Web3 Founders & Designers Mixer + fireside chat with Coinbase Senior Designer & Airfoil founder",
    imageURL: `./site/event/event-1/header-boat.jpeg`,
    event_date: new Date(2023, 9, 11, 19),
    location: "Chelsea Market (163 W 20nd Street). Manhattan, NYC",
    capacity: 50,
    person_cost: 30,
    event_desc: `
            <p>Calling all web3 founders and designers for an exciting night of exchanging ideas and making new friends! Come make friends with fellow designers and founders in web3. There will also be lots of insights to be gained through an intimate chat +Q&A with two giants in the industry:</p>
            <br>
            <p>Phil Hedayatnia, Founder & CEO of Airfoil, a growth design studio that has designed and built products in web3, the creator economy, the future of work, and much more for 80+ startups since 2018</p>
            <br>
            <p>Jihoon Suh, Senior Product Designer at Coinbase, who was previously Senior Product Designer for Messenger for Meta.</p>
            <br>
            <p>This will be a curated group with limited spots, so do sign up early!</p>
            <br>
            <p>About Airfoil:</p>
            <br>
            <p>Airfoil Studio is the design, branding, and engineering team helping web3 take flight. As one of crypto's first large-scale design firms, our mission is to design a friendlier financial layer for the internet. We’re a team of 85+ creatives, working from Airfoil’s hubs in Toronto, Singapore, and Seoul, who’ve worked on 100+ projects since 2018, including Solana Pay, Drift Protocol, Bonfida Solana Name Service, Utopia Labs, Planetarium, Layer3.xyz, MarginFi, Hyperspace, VBA Game, and more.</p>
            <br>
            <p>Learn more about Airfoil and our work at airfoil.studio.</p>
        `,
  };

  // Function: Image Upload Handler
  const imageUploadHandler = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    console.log(
      event.target.files[0],
      URL.createObjectURL(event.target.files[0])
    );
  };

  // Chips Data
  const CHIPS_DATA = ["Product", "Marketing", "Engineering", "Design"];

  // Function: Loading Chips Handler
  const loadingChipsHandler = () => {
    return CHIPS_DATA.map((chip_data) => (
      <Chip
        key={chip_data}
        variant="outlined"
        label={chip_data}
        clickable
        sx={{
          fontSize: "0.75rem",
          fontWeight: 600,
          borderRadius: "4px",
          background: "rgba(0, 0, 0, 0.02)",
          border: "1px solid #d9d9d9",
        }}
      />
    ));
  };

  // Function: Event Submit Handler
  const eventSubmitHandler = (event) => {
    // Prevent Default Form Submit Behaviour
    event.preventDefault();

    // Create Event
    setEvent(EVENT_DATA);

    // Update Image
    setImage(EVENT_DATA.imageURL);

    // Scroll Back To Top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Date Format Options
  const dateFormatOptions = {
    month: "long",
    day: "numeric",
    weekday: "short",
  };

  // Time Format Options
  const timeFormatOptions = {
    hour: "numeric",
    hour12: true,
  };

  // Function: Date Format Handler
  const dateFormatHandler = (options) => {
    // Fri, October 27
    const dateFormat = new Intl.DateTimeFormat("en-US", options)
      .format(event.event_date)
      .toString();

    // October 27, Fri
    const dateSplit = dateFormat.split(" ");
    const rawDayOfTheWeek = dateSplit[0];
    const dayOfTheWeek = rawDayOfTheWeek.slice(0, rawDayOfTheWeek.indexOf(","));
    const day = dateSplit[2];
    const month = dateSplit[1];

    return month + " " + day + "," + " " + dayOfTheWeek;
  };

  // Function: Time Format Handler
  const timeFormatHandler = (options) => {
    const timeFormat = new Intl.DateTimeFormat("en-US", options)
      .format(event.event_date)
      .toString();

    return timeFormat;
  };

  // Function: capacity Format Handler
  const capacityFormatHandler = () => {
    return event?.capacity + " " + "people";
  };

  // Function: person cost Format Handler
  const personCostFormatHander = () => {
    return "$" + event?.person_cost;
  };

  return (
    <Box
      sx={{ marginTop: "4rem" /* 64px */, marginBottom: "8rem" /* 128px */ }}
    >
      <form onSubmit={eventSubmitHandler}>
        <Stack direction="row" gap="18px" flexWrap="wrap">
          <Box sx={{ flex: `${event ? 1.5 : 1}` }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "3rem",
                background: "rgb(148, 47, 112)",
                color: "rgb(255, 255, 255)",
                padding: "0.25rem 0.75rem",
                fontWeight: "bold",
                marginBottom: "1.75rem",
                width: "fit-content",
              }}
            >
              {event ? event.title : "Untitle Event"}
            </Typography>

            <FormGroup row sx={{ marginBottom: "1.75rem" }}>
              <FormControl
                sx={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flex: 1,
                  margin: 0,
                  "& label": {
                    fontWeight: "bold",
                  },
                }}
              >
                <FormLabel>
                  {" "}
                  <EventIcon
                    sx={{
                      width: "44px",
                      height: "44px",
                      marginRight: "0.9375rem" /* 15px */,
                      color: "#14597a",
                    }}
                  />
                </FormLabel>
                {event ? (
                  <Typography
                    variant="h3"
                    sx={{ fontSize: "1.75rem", fontWeight: 600 }}
                  >
                    {dateFormatHandler(dateFormatOptions)}
                  </Typography>
                ) : (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date"
                      sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
                    />
                  </LocalizationProvider>
                )}
              </FormControl>

              <FormControl
                sx={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flex: 1,
                  margin: 0,
                  "& label": {
                    fontWeight: "bold",
                  },
                }}
              >
                <FormLabel>
                  {" "}
                  <AccessTimeIcon
                    sx={{
                      width: "44px",
                      height: "44px",
                      marginX: "0.9375rem" /* 15px */,
                      color: "#14597a",
                    }}
                  />
                </FormLabel>
                {event ? (
                  <Typography
                    variant="h3"
                    sx={{ fontSize: "1.75rem", fontWeight: 600 }}
                  >
                    {timeFormatHandler(timeFormatOptions)}
                  </Typography>
                ) : (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      label="Time"
                      sx={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                      }}
                    />
                  </LocalizationProvider>
                )}
              </FormControl>
            </FormGroup>

            <FormGroup sx={{ marginBottom: "0.75rem" }}>
              <FormControl
                sx={{
                  margin: 0,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <FormLabel
                  sx={{ display: "inline-flex", alignItems: "center" }}
                >
                  {" "}
                  <PlaceIcon
                    sx={{
                      marginRight: "0.9375rem" /* 15px */,
                      color: "#14597a",
                    }}
                  />
                </FormLabel>

                {event ? (
                  <Typography variant="body1">{event.location}</Typography>
                ) : (
                  <TextField
                    type="text"
                    // label="Venue"
                    placeholder="Venue"
                    id="event-location"
                    fullWidth
                    sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
                  />
                )}
              </FormControl>
            </FormGroup>

            <FormGroup row>
              <FormControl
                sx={{
                  flex: 1,
                  margin: 0,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <FormLabel
                  sx={{ display: "inline-flex", alignItems: "center" }}
                >
                  {" "}
                  <GroupsIcon
                    sx={{
                      marginRight: "0.9375rem" /* 15px */,
                      color: "#14597a",
                    }}
                  />
                </FormLabel>

                {event ? (
                  <Typography variant="body1">
                    {capacityFormatHandler()}
                  </Typography>
                ) : (
                  <TextField
                    type="number"
                    InputProps={{
                      inputProps: {
                        min: 0,
                      },
                    }}
                    // label="Max Capacity"
                    placeholder="Max Capacity"
                    id="event-capacity"
                    sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
                  />
                )}
              </FormControl>

              <FormControl
                sx={{
                  flex: 1,
                  margin: 0,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <FormLabel
                  sx={{ display: "inline-flex", alignItems: "center" }}
                >
                  {" "}
                  <PaidIcon
                    sx={{ marginX: "0.9375rem" /* 15px */, color: "#14597a" }}
                  />
                </FormLabel>

                {event ? (
                  <Typography variant="body">
                    {personCostFormatHander()}
                  </Typography>
                ) : (
                  <TextField
                    type="number"
                    InputProps={{
                      inputProps: {
                        min: 0,
                      },
                    }}
                    // label="Cost per person"
                    placeholder="Cost per person"
                    id="event-person-cost"
                    sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
                  />
                )}
              </FormControl>
            </FormGroup>
          </Box>

          <Box sx={{ flex: 2 }}>
            <Box
              sx={{
                width: "739px",
                height: "445px",
                background: "rgba(242, 242, 242, 0.1)",
                border: "1px dashed rgb(242, 242, 242)",
                borderRadius: "0px 64px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* <img src={image} /> */}
              {!event?.imageURL && (
                <ThemeProvider theme={theme}>
                  <Button
                    variant="text"
                    component="label"
                    startIcon={
                      !image && (
                        <InsertPhotoIcon
                          sx={{
                            width: "32px",
                            height: "32px",
                            aspectRatio: "auto 24 / 24",
                          }}
                        />
                      )
                    }
                    sx={{
                      position: "static",

                      "::before": {
                        display: "block",
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      },
                    }}
                  >
                    {!image && (
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "1.25rem",
                          fontWeight: 600,
                          textTransform: "none",
                        }}
                      >
                        Add a banner
                      </Typography>
                    )}
                    <input
                      type="file"
                      accept="image/jpeg"
                      onChange={imageUploadHandler}
                      hidden
                    />
                  </Button>
                </ThemeProvider>
              )}
            </Box>
          </Box>
        </Stack>

        {event ? (
          <Box sx={{ width: "45%", marginTop: "2rem" }}>
            <Typography
              variant="body1"
              dangerouslySetInnerHTML={{ __html: event?.event_desc }}
            />
          </Box>
        ) : (
          <Box sx={{ width: "45%" }}>
            <FormGroup sx={{ marginBottom: "2rem" /* 32px */ }}>
              <FormControlLabel
                htmlFor="event-description"
                label={<Typography variant="body1">Description</Typography>}
                labelPlacement="top"
                control={
                  <TextField
                    // label="Venue"
                    placeholder="Description of your event.."
                    id="event-description"
                    fullWidth
                    rows={8}
                    multiline
                    sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
                  />
                }
                sx={{ margin: 0, placeItems: "start" }}
              />
            </FormGroup>

            <FormGroup
              sx={{
                background: "#fff",
                padding: "2rem",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                marginBottom: "2rem" /* 32px */,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "fit-content",
                  padding: "0.5rem 1rem",
                  background: "#fef452",
                  color: "#942f70",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                Settings
              </Typography>

              <FormControlLabel
                control={<Checkbox />}
                label="I want to approve attendees"
              />

              <FormControl>
                <FormLabel id="event-privacy">Privacy</FormLabel>
                <RadioGroup
                  aria-labelledby="event-privacy"
                  defaultValue="public"
                  name="event-privacy-group"
                  row
                >
                  <FormControlLabel
                    value="public"
                    control={<Radio />}
                    label="Public"
                  />

                  <FormControlLabel
                    value="curated_audience"
                    control={<Radio />}
                    label="Curated Audience"
                  />

                  <FormControlLabel
                    value="community_only"
                    control={<Radio />}
                    label="Community Only"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel id="event-privacy" sx={{ marginBottom: "0.125rem" }}>
                  Tag your social
                </FormLabel>
                <Box sx={{ marginBottom: "0.25rem" /* 4px */ }}>
                  <Typography variant="body1" sx={{ color: "#475467" }}>
                    Pick tags for our curation engine to work its magin
                  </Typography>
                </Box>
              </FormControl>

              <Stack direction="row" gap="8px" flexWrap="wrap">
                {loadingChipsHandler()}
              </Stack>
            </FormGroup>

            <ThemeProvider theme={submitBtnTheme}>
              <Button
                variant="contained"
                type="submit"
                sx={{ padding: "0.75rem 1.25rem", borderRadius: "8px" }}
                fullWidth
              >
                <Typography
                  variant="body1"
                  sx={{
                    textTransform: "capitalize",
                    color: "#942f70",
                    fontWeight: 600,
                  }}
                >
                  Create Social
                </Typography>
              </Button>
            </ThemeProvider>
          </Box>
        )}
      </form>
    </Box>
  );
};

export default EventForm;
