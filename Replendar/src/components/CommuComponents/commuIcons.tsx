import React from 'react';
interface IconProps {
  width?: string;
  height?: string;
  fill?: string;
  onClick?: () => void;
}
export const CloseIcon: React.FC<IconProps> = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M47.5 8.74219L43.7417 12.5005"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const MoreIcon: React.FC<IconProps> = ({
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

export const NineDots: React.FC<IconProps> = ({
  width = '30',
  height = '30',
  fill = 'black',
  onClick,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M7.5 8.9996C8.32843 8.9996 9 8.32811 9 7.4998C9 6.67148 8.32843 6 7.5 6C6.67157 6 6 6.67148 6 7.4998C6 8.32811 6.67157 8.9996 7.5 8.9996Z"
      fill={fill}
    />
    <path
      d="M14.5 9C15.3284 9 16 8.32843 16 7.5C16 6.67157 15.3284 6 14.5 6C13.6716 6 13 6.67157 13 7.5C13 8.32843 13.6716 9 14.5 9Z"
      fill={fill}
    />
    <path
      d="M21.5 9C22.3284 9 23 8.32843 23 7.5C23 6.67157 22.3284 6 21.5 6C20.6716 6 20 6.67157 20 7.5C20 8.32843 20.6716 9 21.5 9Z"
      fill={fill}
    />
    <path
      d="M7.5 16C8.32844 16 9 15.3284 9 14.5C9 13.6716 8.32844 13 7.5 13C6.67157 13 6 13.6716 6 14.5C6 15.3284 6.67157 16 7.5 16Z"
      fill={fill}
    />
    <path
      d="M14.5 16C15.3284 16 16 15.3284 16 14.5C16 13.6716 15.3284 13 14.5 13C13.6716 13 13 13.6716 13 14.5C13 15.3284 13.6716 16 14.5 16Z"
      fill={fill}
    />
    <path
      d="M21.5 16C22.3284 16 23 15.3284 23 14.5C23 13.6716 22.3284 13 21.5 13C20.6716 13 20 13.6716 20 14.5C20 15.3284 20.6716 16 21.5 16Z"
      fill={fill}
    />
    <path
      d="M7.5 23C8.32843 23 9 22.3284 9 21.5C9 20.6716 8.32843 20 7.5 20C6.67157 20 6 20.6716 6 21.5C6 22.3284 6.67157 23 7.5 23Z"
      fill={fill}
    />
    <path
      d="M14.5 23C15.3284 23 16 22.3284 16 21.5C16 20.6716 15.3284 20 14.5 20C13.6716 20 13 20.6716 13 21.5C13 22.3284 13.6716 23 14.5 23Z"
      fill={fill}
    />
    <path
      d="M21.5 23C22.3284 23 23 22.3284 23 21.5C23 20.6716 22.3284 20 21.5 20C20.6716 20 20 20.6716 20 21.5C20 22.3284 20.6716 23 21.5 23Z"
      fill={fill}
    />
  </svg>
);

export const PlusIcon: React.FC<IconProps> = ({
  width = '15',
  height = '16',
  fill = 'black',
  onClick,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M7.5 1.53339V14.4666"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.0332 7.96021H13.9665"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ProfileImage: React.FC<IconProps> = ({
  width = '92',
  height = '93',

  onClick,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 92 93"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <circle cx="46" cy="46.5" r="46" fill="#EAEDFB" />
    <path
      d="M23.8625 42.9121C23.8625 30.6065 33.8382 20.6309 46.1438 20.6309C58.4494 20.6309 68.425 30.6065 68.425 42.9121V86.6707C68.425 86.6707 61.8125 92.5002 46.575 92.5002C31.3375 92.5002 23.8625 86.7502 23.8625 86.7502V42.9121Z"
      fill="#7CD7EB"
    />
    <circle cx="37.6626" cy="36.7256" r="1.4375" fill="#666666" />
    <circle cx="54.9126" cy="36.7256" r="1.4375" fill="#666666" />
    <path
      d="M38.2375 43.0508C42.4063 47.7945 50.025 47.6508 54.3375 43.0508"
      stroke="#37AAC3"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);
