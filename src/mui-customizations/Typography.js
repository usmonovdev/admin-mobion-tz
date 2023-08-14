import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const TextP = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: theme.palette.custom.text,
    fontWeight: "400"
}));

export const TextHeader = styled(Typography)(({ theme }) => ({
    fontSize: "32px",
    color: theme.palette.custom.text,
    fontWeight: "500",
    "@media screen and (max-width: 720px)": {
        fontSize: "32px"
    },
    "@media screen and (max-width: 360px)": {
        fontSize: "24px"
    }
}))

export const TextH3 = styled(Typography)(({ theme }) => ({
    fontSize: "24px",
    color: theme.palette.custom.text,
    fontWeight: "500",
    "@media screen and (max-width: 720px)": {
        fontSize: "18px"
    },
    "@media screen and (max-width: 360px)": {
        fontSize: "14px"
    }
}))

export const TextInfo = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    color: theme.palette.custom.grey,
    fontWeight: "500",
    "@media screen and (max-width: 720px)": {
        fontSize: "14px"
    },
    "@media screen and (max-width: 360px)": {
        fontSize: "12px"
    }
}))

export const TextH1 = styled(Typography)(({ theme }) => ({
    fontSize: "40px",
    color: "#fff",
    fontWeight: "700",
    lineHeight: "50px",
    "@media screen and (max-width: 720px)": {
        fontSize: "22px"
    },
    "@media screen and (max-width: 360px)": {
        fontSize: "12px"
    }
}))

export const TextH2 = styled(Typography)(({ theme }) => ({
    fontSize: "26px",
    color: theme.palette.custom.text,
    fontWeight: "500",
    "@media screen and (max-width: 720px)": {
        fontSize: "22px"
    },
    "@media screen and (max-width: 360px)": {
        fontSize: "12px"
    }
}))