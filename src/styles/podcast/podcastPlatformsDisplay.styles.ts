import { makeStyles } from "@material-ui/core/styles";

export const usePodcastPlatformsPageDisplayStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: 30,
    rowGap: 30,
    "@media (max-width: 1280px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 900px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@media (max-width: 700px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 500px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
  platformElement: {
    textAlign: "center",
  },
  platformImage: {
    borderRadius: 12,
    "&:hover": {
      outline: "2px solid #8145A7",
      filter: "brightness(80%)",
    }
  }
}));
