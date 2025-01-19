import React from 'react';
interface IconProps {
  width?: string;
  height?: string;
  fill?: string;
  onClick?: () => void;
}
const MoreIcon: React.FC<IconProps> = ({
  width = '50',
  height = '30',
  fill = 'rgba(102, 102, 102, 1)',
  onClick,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 75 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M13.625 6.85938H8.70312V13.6875C9.95312 13.6823 11.013 13.6484 11.8828 13.5859C12.7526 13.5234 13.625 13.4062 14.5 13.2344L14.6719 14.4531C13.6979 14.6354 12.7396 14.7604 11.7969 14.8281C10.8542 14.8906 9.69271 14.9219 8.3125 14.9219H7.20312V5.625H13.625V6.85938ZM18.2031 18.3594H16.7188V10.5625H12.8281V9.32812H16.7188V4.32812H18.2031V18.3594ZM33.1562 16.5938H20.3438V15.3594H25.9844V12.4844H21.8125V5.28125H23.2969V7.6875H30.1719V5.28125H31.6406V12.4844H27.4531V15.3594H33.1562V16.5938ZM30.1719 11.2812V8.89062H23.2969V11.2812H30.1719ZM45.8125 18.3281H44.3125V4.32812H45.8125V18.3281ZM41.6406 5.82812C41.6406 7.99479 41.1224 9.92188 40.0859 11.6094C39.0547 13.2917 37.3906 14.6823 35.0938 15.7812L34.3125 14.5781C36.151 13.7031 37.5443 12.638 38.4922 11.3828C39.4453 10.1276 39.9948 8.67188 40.1406 7.01562H34.9844V5.82812H41.6406Z"
      fill={fill}
    />
    <path
      d="M61.4998 17.4666C65.0713 17.4666 67.9665 14.5714 67.9665 11C67.9665 7.42853 65.0713 4.53333 61.4998 4.53333C57.9284 4.53333 55.0332 7.42853 55.0332 11C55.0332 14.5714 57.9284 17.4666 61.4998 17.4666Z"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M61.5 13.2583L65.2583 9.49998"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M61.5 13.2583L57.7417 9.49998"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MoreIcon;
