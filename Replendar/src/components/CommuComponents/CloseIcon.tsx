import React from 'react';
interface IconProps {
  width?: string;
  height?: string;
  fill?: string;
  onClick?: () => void;
}
const CloseIcon: React.FC<IconProps> = ({
  width = '40',
  height = '30',
  fill = '#666666',
  onClick,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 61 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M17.5156 7.5625H19.5469V8.78125H17.5156V12.1875H16.0312V4.32812H17.5156V7.5625ZM13.3594 6.4375H8.60938V10.2344C10.0365 10.2292 11.1849 10.1953 12.0547 10.1328C12.9245 10.0703 13.7812 9.94792 14.625 9.76562L14.7969 10.9844C13.8802 11.1719 12.9479 11.2995 12 11.3672C11.0521 11.4349 9.80208 11.4688 8.25 11.4688H7.14062V5.21875H13.3594V6.4375ZM17.6406 14.1406H10.0938V16.9531H17.8906V18.1562H8.60938V12.9375H17.6406V14.1406ZM31.9844 18.3281H30.4844V4.32812H31.9844V18.3281ZM27.8125 5.82812C27.8125 7.99479 27.2943 9.92188 26.2578 11.6094C25.2266 13.2917 23.5625 14.6823 21.2656 15.7812L20.4844 14.5781C22.3229 13.7031 23.7161 12.638 24.6641 11.3828C25.6172 10.1276 26.1667 8.67188 26.3125 7.01562H21.1562V5.82812H27.8125Z"
      fill={fill}
    />
    <path
      d="M47.4998 4.53354C51.0713 4.53354 53.9665 7.4287 53.9665 11.0002C53.9665 14.5716 51.0713 17.4668 47.4998 17.4668C43.9284 17.4668 41.0332 14.5716 41.0332 11.0002C41.0332 7.4287 43.9284 4.53354 47.4998 4.53354Z"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M47.5 8.74219L51.2583 12.5005"
      stroke={fill}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M47.5 8.74219L43.7417 12.5005"
      stroke={fill}
      stroke-linecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloseIcon;
