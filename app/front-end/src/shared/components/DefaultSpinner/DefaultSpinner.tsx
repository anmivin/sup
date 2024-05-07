import { StyledSpinner } from './DefaultSpinner.styled';

const DefaultSpinner = ({ width = 100 }: { width?: number }) => {
  return (
    <StyledSpinner width={width} height={width * 2} viewBox="0 0 600 1200">
      <path className="path_01" d="M 300 0 L 146 460 L 50 500 L 300 0 Z" />
      <path className="path_02" d="M 146 460 L 100 600 L 0 600 L 50 500 L 145 460 Z" />
      <path className="path_03" d="M 300 0 L 228 430 L 146 460 L 300 0 Z" />
      <path className="path_04" d="M 228 430 L 200 600 L 100 600 L 146 460 L 228 430 Z" />
      <path className="path_05" d="M 300 0 L 300 400 L 228 430 L 300 0 Z" />
      <path className="path_06" d="M 300 400 L 300 600 L 200 600  L 228 430 L 300 400 Z" />

      <path className="path_07" d="M 300 0 L 300 600 L 320 600 L 389 530 L 300 0 Z" />
      <path className="path_08" d="M 320 600 L 400 600 L 389 530  L 320 600 Z" />

      <path className="path_09" d="M 300 0 L 362 370 L 412 340 L 300 0 Z" />
      <path className="path_10" d="M 389 530 L 453 460 L 412 340 L 362 370 L 389 530 Z" />
      <path className="path_11" d="M 400 600 L 389 530 L 453 460 L 500 600  L 400 600 Z" />
      <path className="path_12" d="M 300 0  L 455 310 L 412 340 L 300 0 Z" />
      <path className="path_13" d="M 453 460  L 505 410 L 455 310 L 412 340 L 453 460 Z" />
      <path className="path_14" d="M 500 600 L 600 600 L 505 410 L 453 460  L 500 600 Z" />

      <path className="path_15" d="M 0 600 L 100 600 L 167 800 L 116 830 L 0 600 Z" />
      <path className="path_16" d="M 167 800 L 116 830 L 216 1030 L 237 1010  L 167 800 Z" />
      <path className="path_17" d="M 300 1200 L 216 1030 L 237 1010  L 300 1200 Z" />

      <path className="path_18" d="M 100 600 L 200 600  L 228 768 L 167 800 L 100 600 Z" />
      <path className="path_19" d="M 200 600 L 228 768 L 300 730 L 300 600 L 200 600 Z" />
      <path className="path_20" d="M 167 800  L 300 730 L 300 945 L 237 1010 L 167 800 Z" />
      <path className="path_21" d="M 300 1200 L 237 1010 L 264 982 L 300 1200 Z" />
      <path className="path_22" d="M 300 1200 L 264 982 L 300 945 L 300 1200 Z" />

      <path className="path_23" d="M 300 600 L 400 600  L 385 686 L 300 730 L 300 600 Z" />
      <path className="path_24" d="M 300 730 L 300 945  L 352 890  L 385 686 L 300 730 Z" />
      <path className="path_25" d="M 300 1200 L 300 945 L 352 890 L 300 1200" />

      <path className="path_26" d="M 400 600 L 500 600 L 487 640 L 385 686 L 400 600 Z" />
      <path className="path_27" d="M 385 686 L 352 890 L 434 800 L 487 640 L 385 686 Z" />
      <path className="path_28" d="M 300 1200 L 352 890 L 434 800 L 300 1200 Z" />
      <path className="path_29" d="M 600 600 L 500 600 L 487 640  L 600 600 Z" />
      <path className="path_30" d="M 600 600  L 487 640 L 434 800 L 560 680 L 600 600 Z" />
      <path className="path_31" d="M 300 1200 L 434 800 L 560 680 L 300 1200 Z" />
    </StyledSpinner>
  );
};

export default DefaultSpinner;
