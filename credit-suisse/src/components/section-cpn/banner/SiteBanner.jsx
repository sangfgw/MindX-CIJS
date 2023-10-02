import HeaderBoatImage from "/site/banner/header-boat.jpeg";
import {
  Box,
  CardMedia,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Stack,
  Link,
} from "@mui/material";

import ArrowRight from "../../../assets/svg-cpn/ArrowRight";

import PrimaryButton from "../button/PrimaryButton";

// Card Content
const cardContents = [
  {
    tag: "Pension provision",
    title:
      "Pay in to Pillar 3a by the end of the year and re-duce your tax bill.",
  },
  {
    tag: "CSX promotion",
    title: "Discounted tickets for ZFF with CSX? Of course.",
  },
  {
    tag: "Mortgages",
    title: "What to look out for when purchasing your own home.",
  },
  {
    tag: "Bank for Entrepreneurs",
    title: "One hundred Swiss startups with great market potential",
  },
];

// Function: loading card Handler
const loadingCardHandler = () => {
  return cardContents.map((cardContent, index) => {
    return (
      <Card
        sx={{
          width: 282,
          height: 282,
          minHeight: "282px",
          padding: "1.5rem 1rem 2rem 1rem" /* 24px 16px 32px 16px */,
          boxShadow: "0 0 16px rgba(0,0,0,.1)",
          position: "relative",
          transition: "box-shadow 0.3s ease-in-out",
          top: index % 2 !== 0 && "104px",
          "& .card-link:hover + .card-btn": {
            transform: "translateX(20px)",
          },
          "& .card-btn": {
            transition: "transform .3s",
          },
          "&:has(.card-link:hover)": {
            boxShadow: "0 10px 20px rgba(0,0,0,.25)",
          },
        }}
        key={self.crypto.randomUUID()}
      >
        <CardContent sx={{ padding: 0 }}>
          <Typography
            sx={{ fontSize: 14, marginBottom: "1.5rem" }}
            color="#262626"
            gutterBottom
          >
            {cardContent.tag}
          </Typography>
          <Typography
            variant="h5"
            component="div"
            marginBottom="0.75rem" // 12px
            color="#262626"
          >
            {cardContent.title}
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: 0 }}>
          <Link
            href="#"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 10,
            }}
            className="card-link"
          />
          <Button
            variant="text"
            size="large"
            sx={{
              marginTop: "1.25rem" /* 20px */,
              padding: "1rem 1.5rem" /* 32px 16px */,
              color: "#000",
              position: "absolute",
              bottom: 16,
              left: -8,
            }}
            className="card-btn"
          >
            <ArrowRight />
          </Button>
        </CardActions>
      </Card>
    );
  });
};

const SiteBanner = () => {
  return (
    <Box flex={1} minHeight="807px">
      <CardMedia
        image={HeaderBoatImage}
        sx={{
          padding: "9.6875rem 14.125rem" /* 155px 90px */,
          height: "807px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Card
            sx={{
              width: 566,
              padding: "2.5rem",
              marginLeft: "-2.5rem" /* 40px */,
              marginBottom: "1.25rem" /* 20px */,
              marginTop: "9rem" /* 144px */,
              marginRight: "5.375rem" /* 86px */,
              borderRadius: "3px",
            }}
          >
            <CardContent sx={{ padding: 0 }}>
              <Typography
                variant="h3"
                component="div"
                paddingLeft="1rem" // 16px
                marginBottom="0.75rem" // 12px
                sx={{
                  position: "relative",
                  "::before": {
                    display: "inline-block",
                    content: '""',
                    position: "absolute",
                    left: 0,
                    width: "8px",
                    height: "100%",
                    backgroundColor: "#003868",
                  },
                }}
              >
                Information about the integration with UBS
              </Typography>
            </CardContent>
            <CardActions sx={{ padding: 0 }}>
              <PrimaryButton>
                <Typography
                  variant="subtitle1"
                  textTransform="capitalize"
                  fontWeight="bold"
                  lineHeight={1.2}
                >
                  Read more
                </Typography>
              </PrimaryButton>
            </CardActions>
          </Card>
        </Box>

        <Stack
          mt="1rem"
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          width={588}
          gap="24px"
          marginRight="-24px"
        >
          {loadingCardHandler()}
        </Stack>
      </CardMedia>
    </Box>
  );
};

export default SiteBanner;
