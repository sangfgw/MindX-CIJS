import {
  Stack,
  Box,
  Link,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import PrimaryButton from "../button/PrimaryButton";
import CSXImage from "/site/links/CSX.png";

// Text Items
const TEXT_ITEMS = [
  "It's personal when you need it to be and digital when you want it to be.",
  "Account & card starting from CHF 0",
  "Credit cards with attractive benefits, such as cashback",
  "Open an account in just a few minutes - without having to make a video call",
  "Client service available online, by phone, or in person",
];

// Generate List Items Handler
const generateListItemsHandler = () => {
  return TEXT_ITEMS.map((TEXT_ITEM, index) => (
    <ListItem
      disablePadding
      key={TEXT_ITEM}
      sx={{
        "::marker": index !== 0 && {
          fontSize: "1.25rem",
          fontWeight: "bold",
          padding: 0,
        },

        "::before": index !== 0 && {
          display: "inline-block",
          content: '""',
          width: "8px",
          height: "8px",
          background: "#262626",
          margin: "1rem" /* 12px */,
          marginLeft: "0.5rem",
        },
      }}
    >
      <ListItemText primary={TEXT_ITEM} />
    </ListItem>
  ));
};

const SectionDiscover = () => {
  return (
    <Stack
      direction="row"
      sx={{
        background: "#f1f2f2",
        paddingInline: "14rem" /* 224px */,
        paddingTop: "1.5rem" /* 24px */,
        paddingBottom: "3.375rem" /* 54px */,
      }}
    >
      <Box sx={{ width: "50%", marginBottom: "1.25rem" }}>
        <Link
          variant="h3"
          underline="none"
          sx={{
            color: "#262626",
            ":hover": {
              color: "#7c7c7b",
            },
          }}
          href="#"
        >
          <Typography
            sx={{
              fontSize: "2rem",
              marginTop: "1.875rem" /* 30px */,
              marginBottom: "1.25rem" /* 20px */,
            }}
          >
            CSX - the all-in-one banking service for every day
          </Typography>
        </Link>

        <List
          sx={{
            paddingY: "0.9375rem" /* 15px */,
            marginTop: "1.5rem" /* 24px */,
          }}
        >
          {generateListItemsHandler()}
        </List>

        <Typography variant="body1" sx={{ marginTop: "1.25rem" }}>
          Opt for the most flexible banking service in Switzerland now.
        </Typography>

        <PrimaryButton>
          <Typography
            variant="subtitle1"
            textTransform="capitalize"
            fontWeight="bold"
            lineHeight={1.2}
          >
            Discover CSX
          </Typography>
        </PrimaryButton>
      </Box>

      <Box sx={{ width: "50%", position: "relative" }}>
        <Box
          component="img"
          src={CSXImage}
          alt="CSX Image"
          itemType="http://schema.org/ImageObject"
          sx={{
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
            objectPosition: "0px 0px",
          }}
        ></Box>
      </Box>
    </Stack>
  );
};

export default SectionDiscover;
