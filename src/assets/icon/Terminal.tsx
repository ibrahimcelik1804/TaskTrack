import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Colors } from "../../theme/Colors";
const Terminal = (props: SvgProps) => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M20 4H4C2.89 4 2 4.9 2 6V18C2 19.1 2.89 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.11 4 20 4ZM20 18H4V8H20V18ZM12 16C12 15.45 12.45 15 13 15H17C17.55 15 18 15.45 18 16C18 16.55 17.55 17 17 17H13C12.45 17 12 16.55 12 16ZM6.79 9.71C7.18 9.32 7.81 9.32 8.2 9.71L10.79 12.3C11.18 12.69 11.18 13.32 10.79 13.71L8.2 16.3C7.81 16.69 7.18 16.69 6.79 16.3C6.4 15.91 6.4 15.28 6.79 14.89L8.67 13L6.79 11.12C6.4 10.73 6.4 10.1 6.79 9.71Z"
      fill={Colors.LAVENDERPURPLE}
      fillOpacity={1}
    />
  </Svg>
);
export default Terminal;
