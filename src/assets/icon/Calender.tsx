import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Calendar = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 22H5C3.89 22 3 21.1 3 20L3.01 6C3.01 4.9 3.89 4 5 4H6V3C6 2.45 6.45 2 7 2C7.55 2 8 2.45 8 3V4H16V3C16 2.45 16.45 2 17 2C17.55 2 18 2.45 18 3V4H19C20.1 4 21 4.9 21 6V12H19V10H5V20H12V22ZM22.13 16.99L22.84 16.28C23.23 15.89 23.23 15.26 22.84 14.87L22.13 14.16C21.74 13.77 21.11 13.77 20.72 14.16L20.01 14.87L22.13 16.99ZM21.42 17.7L16.41 22.71C16.23 22.89 15.97 23 15.71 23H14.5C14.22 23 14 22.78 14 22.5V21.29C14 21.02 14.11 20.77 14.29 20.58L19.3 15.57L21.42 17.7Z"
      fill="black"
      fillOpacity={0.54}
    />
  </Svg>
);
export default Calendar;
