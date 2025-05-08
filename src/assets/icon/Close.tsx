import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';
import {Colors} from '../../theme/Colors';
const Close = (props: SvgProps) => (
  <Svg width={30} height={30} viewBox="0 0 72 72" fill="none" {...props}>
    <G id="close-circle">
      <Path
        id="Icon"
        d="M45 27.0001L27 45.0001M45 45.0001L27 27.0001M36 63C50.9117 63 63 50.9117 63 36C63 21.0883 50.9117 9 36 9C21.0883 9 9 21.0883 9 36C9 50.9117 21.0883 63 36 63Z"
        stroke={Colors.CORALRED}
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default Close;
