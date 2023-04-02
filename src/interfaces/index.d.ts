import { ITheme } from "@/styles/theme";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
