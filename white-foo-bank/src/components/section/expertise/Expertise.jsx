import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

import Savings from "../../../assets/img/site/icon/Savings";
import ChartLine from "../../../assets/img/site/icon/ChartLine";
import Wallet from "../../../assets/img/site/icon/Wallet";
import Shield from "../../../assets/img/site/icon/Shield";

// Styled Component
const StyledGridContainer = styled(Grid)(() => ({
  boxShadow: "0 15px 30px rgba(0,0,0,.1)",
  transform: "translateY(-35%)",
  borderRadius: "5px",
}));

const StyledGridItem = styled(Grid)(() => ({
  ":first-of-type": {
    ".expertise-card": {
      borderRadius: "5px 0 0 5px",
    },
  },

  ":not(:last-of-type)": {
    borderRight: "1px solid #eee",
  },

  ":last-of-type": {
    ".expertise-card": {
      borderRadius: "0 5px 5px 0",
    },
  },
}));

const StyledCard = styled(Card)(() => ({
  maxWidth: 285,
  height: 258,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  boxShadow: "none",
  borderRadius: 0,

  ":hover": {
    ".MuiCardContent-root": {
      transform: "translateY(0)",
    },

    "& .card-title": {
      transform: "translateY(-5%)",
    },

    "& .card-desc": {
      transform: "translateY(-5%)",
    },

    "& .card-link": {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
}));

const StyledCardContent = styled(CardContent)(() => ({
  textAlign: "center",
  padding: "0 1rem",
  position: "relative",
  transition: "all .5s ease",
  transform: "translateY(10%)",
}));

const StyledTitle = styled(Typography)(() => ({
  fontSize: "1.25rem",
  fontWeight: 600,
  marginBottom: "0.75rem" /* 12px */,
  transition: "all .5s ease",
}));

const StyledDescription = styled(Typography)(() => ({
  fontSize: "0.9375rem",
  transition: "all .5s ease",
}));

const StyledButton = styled(Button)(() => ({
  background: "linear-gradient(90deg,#ee0979,#ff6a00)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textTransform: "none",
  position: "relative",
  transform: "translateY(80%)",
  opacity: 0,
  transition: "all .5s ease",
  outline: "none",

  ":after": {
    background: "linear-gradient(90deg,#ee0979,#ff6a00)",
    content: '""',
    position: "absolute",
    width: "calc(100% - 1rem)",
    transform: "scaleX(0)",
    height: "2px",
    bottom: 6,
    marginInline: "auto",
    backgroundColor: "#0087ca",
    transformOrigin: "bottom left",
    transition: "transform 0.25s ease-out",
  },
  ":hover": {
    ":after": {
      transform: "scaleX(1)",
      transformOrigin: "bottom left",
    },
  },

  ":focus": {
    outline: "none",
  },
}));

// Expertises
const EXPERTISES = [
  {
    id: 1,
    Icon: <Savings fill="#fb7756" />,
    title: "Tiết kiệm",
    content:
      "Chuyển tiền trong và ngoài ngân hàng một cách dễ dàng và nhanh chóng với mức phí phù hợp.",
    href: "/",
  },

  {
    id: 2,
    Icon: <ChartLine fill="#facd60" />,
    title: "Chất Lượng",
    content:
      "Các dịch vụ của WhiteFoo Bank sẽ mang đến cho bạn những gì tốt nhất hiện có, và nhiều ưu đãi.",
    href: "/",
  },

  {
    id: 3,
    Icon: <Wallet fill="#1ac0c6" />,
    title: "Nhanh Chóng",
    content:
      "Giao dịch diễn ra chưa đến 5 giây kể từ lúc xác nhận thanh toán, chuyển trực tiếp đến người nhận.",
    href: "/",
  },
  {
    id: 4,
    Icon: <Shield fill="#ee0979" />,
    title: "Bảo Mật",
    content:
      "Thông tin giao dịch luôn được mã hóa để giúp dữ liệu của bạn luôn được an toàn, không bị đánh cắp.",
    href: "/",
  },
];

// Function: Loading Expertise Card Handler
const loadingExpertiseCardHandler = () => {
  return EXPERTISES.map(({ id, Icon, title, content, href }) => (
    <StyledGridItem item xs={3} key={id}>
      <StyledCard className="expertise-card">
        <StyledCardContent
          sx={{
            "& svg": {
              // fill: "#fb7756",
              height: 55,
              margin: "0.5rem 0 1rem",
            },
          }}
        >
          {Icon}
          <StyledTitle className="card-title">{title}</StyledTitle>
          <StyledDescription className="card-desc">{content}</StyledDescription>
        </StyledCardContent>
        <CardActions>
          <StyledButton href={href} className="card-link">
            Xem Thêm
          </StyledButton>
        </CardActions>
      </StyledCard>
    </StyledGridItem>
  ));
};

// <Main Component>
const Expertise = () => {
  return (
    <Box
      sx={{
        paddingInline: "0.9375rem" /* 15px */,
      }}
    >
      <StyledGridContainer container>
        {loadingExpertiseCardHandler()}
      </StyledGridContainer>
    </Box>
  );
};

export default Expertise;
