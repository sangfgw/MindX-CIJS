/* eslint-disable react/prop-types */
const Wallet = ({ fill }) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="wallet"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill={fill}
        d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
      ></path>
    </svg>
  );
};

export default Wallet;
