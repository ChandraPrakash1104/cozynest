import closeIcon from '../../../assets/logos/xIcon.svg';

const CloseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className=' w-5 h-5 flex justify-center items-center absolute top-2 left-2'
      onClick={onClick}
    >
      <img src={closeIcon} alt='' />
    </button>
  );
};

export default CloseButton;
