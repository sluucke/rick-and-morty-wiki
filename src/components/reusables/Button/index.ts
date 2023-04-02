import styled from "styled-components";
import {
  background,
  variant,
  SizeProps,
  BackgroundProps,
  flexbox,
  FlexboxProps,
  fontWeight,
  TypographyProps,
  typography,
  display,
  DisplayProps,
  MarginProps,
  margin,
  LayoutProps,
  layout,
  width,
  maxWidth,
  WidthProps,
  MaxWidthProps,
  PaddingProps,
  padding,
  BorderProps,
  border,
} from "styled-system";

type IButtonProps = {
  size?: "md" | "lg";
  fullWidth?: boolean;
  variant?: "primary" | "text";
} & SizeProps &
  BackgroundProps &
  FlexboxProps &
  TypographyProps &
  DisplayProps &
  MarginProps &
  WidthProps &
  MaxWidthProps &
  PaddingProps &
  BorderProps;

const sizeVariant = variant({
  prop: "size",
  variants: {
    md: {
      padding: "0.625rem 2rem",
      fontSize: "1rem",
      borderRadius: "0.75rem",
    },
    lg: {
      padding: "1.25rem 2.25rem",
      fontSize: "1.4rem",
      borderRadius: "0.75rem",
    },
  },
});

const typeVariant = variant({
  prop: "variant",
  variants: {
    primary: {
      backgroundColor: "primary",
      color: "background",
      "&:hover": {
        backgroundColor: "primary-hover",
      },
    },
    text: {
      backgroundColor: "transparent",
      color: "primary",
    },
  },
});

export const Button = styled.button<IButtonProps>`
  border: none;
  font-weight: 600;
  transition: all 200ms ease-in-out;

  ${(props) => props.fullWidth && `width: 100%;`}

  ${typeVariant}
  ${sizeVariant}
  ${background}
  ${flexbox}
  ${fontWeight}
  ${typography}
  ${display}
  ${margin}
  ${width}
  ${maxWidth}
  ${padding}
  ${border}
`;

Button.defaultProps = {
  size: "md",
  variant: "primary",
};
