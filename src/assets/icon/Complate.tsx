import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import { Colors } from '../../theme/Colors';
const Complate = (props: SvgProps) => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 24 24"
    fill="none"
    {...props}>
    <Path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z"
      fill={Colors.DARKGREEN}
      fillOpacity={1}
    />
  </Svg>
);
export default Complate;
