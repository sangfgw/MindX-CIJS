import About from "../../site-cpn/About";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";

import { styled } from "@mui/system";

import ArrowRight from "../../../assets/svg-cpn/ArrowRight";
import PensionsImage from "/site/expertise/card/pensionskasse-fuer-wohneigentum-vorbezug-und-verpfaendung-teaser.jpeg";
import SchweizerMarktImage from "/site/expertise/card/schweizer-markt-fragen-und-antworten-teaser.jpeg";
import SustainableImage from "/site/expertise/card/sustainable-building-teaser.jpeg";
import EinflussImage from "/site/expertise/card/einfluss-demographie-auf-die-inflation-teaser.jpeg";
import FrontifyMigratedImage from "/site/expertise/card/frontifyMigrated-532361521.jpeg";
import RoadImage from "/site/expertise/card/Road-2120582163.jpeg";
import TurtlesImage from "/site/expertise/card/turtles-932492714.jpeg";
import PersonSmileImage from "/site/expertise/card/person-smile-2101758826.jpeg";

// Styled Expertise Card
const StyledExpertiseCard = styled(Card)(() => ({
  maxWidth: 588,
  height: 392,
  position: "relative",
  "::before": {
    display: "block",
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(90deg,rgba(38,38,38,.4) 3.57%,rgba(38,38,38,.2) 48.8%,rgba(38,38,38,0) 72.97%,rgba(38,38,38,0) 97.63%)",
    zIndex: 2,
  },

  ":has(> a.expertise-link:hover)": {
    ".expertise-image": {
      transform: "scale(1.1)",
    },

    ".expertise-title": {
      textDecoration: "underline",
    },

    ".expertise-action-btn": {
      transform: "translateX(0.5rem)",
    },
  },
}));

const StyledCardContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const StyledCardTag = styled(Typography)(() => ({
  color: "#ffffff",
  fontSize: "0.875rem",
  fontWeight: "bold",
  zIndex: 10,
  marginBottom: "1.5rem",
}));

const StyledCardTitle = styled(Typography)(() => ({
  color: "#ffffff",
  fontSize: "1.5rem",
  zIndex: 10,
  width: "300px",
  height: "140px",
  marginBottom: "0.5rem",
}));

const StyledCardActions = styled(CardActions)(() => ({
  padding: 0,
  paddingInline: "1rem",
}));

const StyledCardButton = styled(Button)(() => ({
  transition: "transform .6s ease-in-out",
  minWidth: "fit-content",
  "& svg": {
    fill: "white",
    width: "16px",
    height: "16px",
  },
  zIndex: 10,
}));

const StyledLink = styled(Link)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 11,
}));

const StyledCardImage = styled(Box)(({ imageurl }) => ({
  backgroundImage: `url(${imageurl})`,
  backgroundPosition: "start center",
  backgroundSize: "cover",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
  transition: "transform .6s ease-in-out",
}));

// Expertises
const EXPERTISES = [
  {
    id: 1,
    tag: "Using your pension fund",
    title:
      "In Switzerland, pension fund assets can be used to purchase a home.",
    href: "/",
    card_img: PensionsImage,
  },
  {
    id: 2,
    tag: "Invest Better",
    title: "Ten questions and answers for investors.",
    href: "/",
    card_img: SchweizerMarktImage,
  },
  {
    id: 3,
    tag: "Sustainable building",
    title:
      "The advantages of an energy-efficient home and what you need to know",
    href: "/",
    card_img: SustainableImage,
  },
  {
    id: 4,
    tag: "Monitor Switzerland Q3",
    title: "Switzerland's shifting economy",
    href: "/",
    card_img: EinflussImage,
  },

  {},

  {
    id: 5,
    tag: "Our history",
    title: "Entrepreneurial from the start",
    href: "/",
    card_img: FrontifyMigratedImage,
  },

  {
    id: 6,
    tag: "Our management",
    title: "Deciding, directing, doing",
    href: "/",
    card_img: RoadImage,
  },

  {
    id: 7,
    tag: "Sustainability",
    title: "Protect, include, progress",
    href: "/",
    card_img: TurtlesImage,
  },

  {
    id: 8,
    tag: "Diversity & Inclusion",
    title: "All of us together",
    href: "/",
    card_img: PersonSmileImage,
  },
];

// Function: loading expertise card handler
const loadingExpertiseCardHandler = () => {
  // Miscs Content
  const miscsContent = [
    {
      MiscComponent: <About />,
      isLoaded: false,
    },
  ];

  // Function: loading Misc Expertise Content Handler
  const miscExpertiseContentHandler = () => {
    // Find Misc Content Index
    const miscIndex = miscsContent.findIndex(
      (CONTENT) => CONTENT.isLoaded === false
    );

    // Change isLoaded To True
    miscsContent[miscIndex] = {
      ...miscsContent[miscIndex],
      isLoaded: true,
    };

    // Return Misc Component
    return miscsContent[miscIndex].MiscComponent;
  };

  // Return Component
  return EXPERTISES.map((expertise) => {
    return Object.keys(expertise).length > 0 ? (
      <Grid item xs={6} key={expertise.id}>
        <StyledExpertiseCard>
          <StyledCardContent>
            <StyledCardTag>{expertise.tag}</StyledCardTag>
            <StyledCardTitle className="expertise-title">
              {expertise.title}
            </StyledCardTitle>
          </StyledCardContent>
          <StyledCardActions>
            <StyledCardButton
              size="small"
              startIcon={<ArrowRight />}
              className="expertise-action-btn"
            />
          </StyledCardActions>
          <StyledCardImage
            imageurl={expertise.card_img}
            className="expertise-image"
          />
          <StyledLink href={expertise.href} className="expertise-link" />
        </StyledExpertiseCard>
      </Grid>
    ) : (
      <Grid item key={self.crypto.randomUUID()} xs={12}>
        {miscExpertiseContentHandler()}
      </Grid>
    );
  });
};

// Component
const SectionExpertise = () => {
  return (
    <Box
      sx={{
        paddingX: "14rem" /* 224px */,
        paddingY: "5rem" /* 80px */,
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "2rem" /* 32px */, marginBottom: "2rem" /* 32px */ }}
      >
        Our expertise. Your overview.
      </Typography>
      {/* Expertise Card */}
      <Grid container spacing={3}>
        {loadingExpertiseCardHandler()}
      </Grid>
    </Box>
  );
};

export default SectionExpertise;
