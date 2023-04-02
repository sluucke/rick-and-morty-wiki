import styled from "styled-components";
import {
  color,
  size,
  display,
  flexbox,
  background,
  ColorProps,
  SizeProps,
  DisplayProps,
  FlexboxProps,
  BackgroundProps,
  grid,
  GridProps,
  fontStyle,
  FontStyleProps,
  fontWeight,
  FontWeightProps,
  variant,
  typography,
  TypographyProps,
  MarginProps,
  margin,
} from "styled-system";

type ITypographyProps = ColorProps &
  SizeProps &
  DisplayProps &
  FlexboxProps &
  BackgroundProps &
  GridProps &
  FontStyleProps &
  FontWeightProps &
  TypographyProps &
  MarginProps & {
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  };

const sizeVariant = variant({
  prop: "size",
  variants: {
    sm: {
      fontSize: "1rem",
    },
    md: {
      fontSize: "1.2rem",
    },
    lg: {
      fontSize: "1.4rem",
    },
    xl: {
      fontSize: "1.6rem",
    },
    "2xl": {
      fontSize: "1.8rem",
    },
    "3xl": {
      fontSize: "2rem",
    },
    "4xl": {
      fontSize: "2.2rem",
    },
    "5xl": {
      fontSize: "2.4rem",
    },
    "6xl": {
      fontSize: "2.6rem",
    },
  },
});

export const Typography = styled.p<ITypographyProps>`
  color: ${({ theme }) => theme.colors.text.gray};
  margin: 0;
  padding: 0;

  ${color}
  ${size}
  ${display}
  ${flexbox}
  ${background}
  ${grid}
  ${fontStyle}
  ${fontWeight}
  ${sizeVariant}
  ${typography}
  ${margin}
`;
