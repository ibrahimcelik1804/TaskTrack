import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Colors } from "../../theme/Colors";
const Float = (props: SvgProps) => (
  <Svg
    width={96}
    height={96}
    viewBox="0 0 24 24"
    fill="none"

    {...props}
  >
    <Path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7 8C7 7.45 7.45 7 8 7H13C13.55 7 14 7.45 14 8C14 8.55 13.55 9 13 9H8C7.45 9 7 8.55 7 8ZM10 14C10 14.55 9.55 15 9 15H8C7.45 15 7 14.55 7 14C7 13.45 7.45 13 8 13H9C9.55 13 10 13.45 10 14ZM8 12C7.45 12 7 11.55 7 11C7 10.45 7.45 10 8 10H13C13.55 10 14 10.45 14 11C14 11.55 13.55 12 13 12H8ZM18 15H17V16C17 16.55 16.55 17 16 17C15.45 17 15 16.55 15 16V15H14C13.45 15 13 14.55 13 14C13 13.45 13.45 13 14 13H15V12C15 11.45 15.45 11 16 11C16.55 11 17 11.45 17 12V13H18C18.55 13 19 13.45 19 14C19 14.55 18.55 15 18 15Z"
      fill={Colors.LAVENDERPURPLE}
      fillOpacity={1}
    />
  </Svg>
);
export default Float;
