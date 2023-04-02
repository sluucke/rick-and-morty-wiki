import styled from "styled-components";
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  border,
  BorderProps,
  typography,
  TypographyProps,
  padding,
  PaddingProps,
  margin,
  MarginProps,
  display,
  DisplayProps,
} from "styled-system";

type IBoxProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  SpaceProps &
  BorderProps &
  TypographyProps &
  PaddingProps &
  MarginProps &
  DisplayProps;

export const Box = styled.div<IBoxProps>`
  ${color}
  ${flexbox}
  ${grid}
  ${layout}
  ${space}
  ${border}
  ${typography}
  ${padding}
  ${margin}
  ${display}
`;
