import Info from "./info/Info";
import { Box, Grid, Link } from "@mui/material";
import { styled } from "@mui/system";
import SocialMedia from "./socials/SocialMedia";
import Copyright from "./copyright/Copyright";

// Styled Component
const StyledFooterWrapper = styled(Box)(() => ({
  padding: "1.5rem" /* 24px */,
  backgroundColor: "#003868",
  color: "white",
}));

const StyledFooterLink = styled(Link)(() => ({
  fontSize: "0.875rem" /* 14px */,
  textDecoration: "none",
  color: "white",
  transition: "color .3s ease",

  ":hover": {
    color: "#dadada",
  },
}));

// INFO ITEMS
const INFO_ITEMS = [
  {
    id: "info-1",
    title: "Switzerland",
    items: [
      {
        item_id: "info-1_item-1",
        link: <StyledFooterLink href="/">Private Clients</StyledFooterLink>,
      },
      {
        item_id: "info-1_item-2",
        link: <StyledFooterLink href="/">Wealth Management</StyledFooterLink>,
      },
      {
        item_id: "info-1_item-3",
        link: <StyledFooterLink href="/">Corporate Clients</StyledFooterLink>,
      },
      {
        item_id: "info-1_item-4",
        link: <StyledFooterLink href="/">Investment Banking</StyledFooterLink>,
      },
      {
        item_id: "info-1_item-5",
        link: <StyledFooterLink href="/">Careers</StyledFooterLink>,
      },
      {
        item_id: "info-1_item-6",
        link: <StyledFooterLink href="/">Contact & Support</StyledFooterLink>,
      },
      {
        item_id: "info-1_item-7",
        link: <StyledFooterLink href="/">About Us</StyledFooterLink>,
      },
      {
        item_id: "info-1_item-8",
        link: <StyledFooterLink href="/">Asset Management</StyledFooterLink>,
      },
    ],
  },

  {
    id: "info-2",
    title: "Services",
    items: [
      {
        item_id: "info-2_item-1",
        link: <StyledFooterLink href="/">Contact Us</StyledFooterLink>,
      },
      {
        item_id: "info-2_item-2",
        link: <StyledFooterLink href="/">Escalation Process</StyledFooterLink>,
      },
      {
        item_id: "info-2_item-3",
        link: <StyledFooterLink href="/">Branches and ATMs</StyledFooterLink>,
      },
      {
        item_id: "info-2_item-4",
        link: <StyledFooterLink href="/">Coworking & events</StyledFooterLink>,
      },
    ],
  },

  {
    id: "info-3",
    title: "Careers",
    items: [
      {
        item_id: "info-3_item-1",
        link: <StyledFooterLink href="/">Culture</StyledFooterLink>,
      },
      {
        item_id: "info-3_item-2",
        link: <StyledFooterLink href="/">Locations</StyledFooterLink>,
      },
      {
        item_id: "info-3_item-3",
        link: <StyledFooterLink href="/">Teams</StyledFooterLink>,
      },
      {
        item_id: "info-3_item-4",
        link: <StyledFooterLink href="/">Students</StyledFooterLink>,
      },
      {
        item_id: "info-3_item-5",
        link: <StyledFooterLink href="/">School leavers</StyledFooterLink>,
      },

      {
        item_id: "info-3_item-6",
        link: <StyledFooterLink href="/">Join us</StyledFooterLink>,
      },
    ],
  },

  {
    id: "info-4",
    title: "About Credit Suisse",
    items: [
      {
        item_id: "info-4_item-1",
        link: <StyledFooterLink href="/">Our company</StyledFooterLink>,
      },
      {
        item_id: "info-4_item-2",
        link: <StyledFooterLink href="/">Media and News</StyledFooterLink>,
      },
      {
        item_id: "info-4_item-3",
        link: <StyledFooterLink href="/">Investor relations</StyledFooterLink>,
      },
      {
        item_id: "info-4_item-4",
        link: (
          <StyledFooterLink href="/">Reports and research</StyledFooterLink>
        ),
      },
      {
        item_id: "info-4_item-5",
        link: <StyledFooterLink href="/">Events</StyledFooterLink>,
      },

      {
        item_id: "info-4_item-6",
        link: (
          <StyledFooterLink href="/">Articles and stories</StyledFooterLink>
        ),
      },

      {
        item_id: "info-4_item-7",
        link: (
          <StyledFooterLink href="/">
            Legal documents and notes
          </StyledFooterLink>
        ),
      },

      {
        item_id: "info-4_item-8",
        link: (
          <StyledFooterLink href="/">Diversity & Inclusion</StyledFooterLink>
        ),
      },

      {
        item_id: "info-4_item-9",
        link: <StyledFooterLink href="/">Change The Game</StyledFooterLink>,
      },
    ],
  },
];

// Function: loading Info Items Handler
const loadingInfoItemsHandler = () => {
  return INFO_ITEMS.map((INFO_ITEM) => {
    return (
      <Grid item xs={2.4} key={INFO_ITEM.id}>
        <Info title={INFO_ITEM.title} items={INFO_ITEM.items} />
      </Grid>
    );
  });
};

// <Main Component>
const Footer = () => {
  return (
    <StyledFooterWrapper>
      <Grid container>
        {loadingInfoItemsHandler()}
        <Grid item xs={2.4} key="last-info-item"></Grid>
      </Grid>

      <SocialMedia />
      <Copyright />
    </StyledFooterWrapper>
  );
};

export default Footer;
