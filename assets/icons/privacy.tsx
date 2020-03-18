import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function PrivacyIcon(props: IconProps) {
  return (
    <Svg width="40%" height="40%" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.6 6.5a5.4 5.4 0 0110.8 0v2.106c.31.006.59.017.844.038.556.045 1.058.142 1.526.381a3.9 3.9 0 011.705 1.704c.239.47.336.971.381 1.527.044.537.044 1.198.044 2.006V16.738c0 .808 0 1.469-.044 2.006-.045.556-.142 1.058-.381 1.526a3.9 3.9 0 01-1.705 1.705c-.468.239-.97.336-1.526.381-.537.044-1.198.044-2.006.044H7.762c-.808 0-1.469 0-2.006-.044-.556-.045-1.058-.142-1.527-.381a3.9 3.9 0 01-1.704-1.705c-.239-.468-.336-.97-.381-1.526-.044-.537-.044-1.198-.044-2.006V14.262c0-.808 0-1.469.044-2.006.045-.556.142-1.058.381-1.527a3.9 3.9 0 011.704-1.704c.47-.239.971-.336 1.527-.381.253-.02.534-.032.844-.038V6.5zm9 0v2.1H8.4V6.5a3.6 3.6 0 117.2 0zm-9.697 3.938c-.445.036-.684.103-.856.19a2.1 2.1 0 00-.918.919c-.088.172-.155.411-.191.856-.037.455-.038 1.042-.038 1.897v2.4c0 .855 0 1.442.038 1.897.036.445.103.683.19.856a2.1 2.1 0 00.919.918c.172.088.411.155.856.191.455.037 1.042.038 1.897.038h8.4c.855 0 1.442 0 1.897-.038.445-.036.683-.103.856-.19a2.1 2.1 0 00.918-.919c.088-.172.155-.411.191-.856.037-.455.038-1.042.038-1.897v-2.4c0-.855 0-1.442-.038-1.897-.036-.445-.103-.684-.19-.856a2.1 2.1 0 00-.919-.918c-.172-.088-.411-.155-.856-.191-.455-.037-1.042-.038-1.897-.038H7.8c-.855 0-1.442 0-1.897.038zM13 16.232a2 2 0 00-1-3.732 2 2 0 00-1 3.732V18a1 1 0 102 0v-1.768z"
        fill="#262F56"
      />
    </Svg>
  );
}
