import { colors } from "../colors";

export const theme = {
  colors,
  extend: {
    typography: {
      DEFAULT: {
        css: {
          maxWidth: "65ch",
          color: "inherit",
          a: {
            color: "inherit",
            opacity: 0.75,
            fontWeight: "500",
            textDecoration: "underline",
            "&:hover": {
              opacity: 1,
              color: colors.primary,
            },
          },
          b: {
            color: "inherit",
          },
          strong: {
            color: "inherit",
          },
          em: {
            color: "inherit",
          },
          h1: {
            color: "inherit",
          },
          h2: {
            color: "inherit",
          },
          h3: {
            color: "inherit",
          },
          h4: {
            color: "inherit",
          },
          code: {
            color: "inherit",
          },
        },
      },
    },
  },
};
