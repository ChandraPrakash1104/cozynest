interface PrimaryButtonProps {
  label: string;
  size: 'small' | 'medium' | 'large';
  styles?: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  const { label, size, styles, handleClick } = props;

  let sizeStyle = '';

  switch (size) {
    case 'small':
      sizeStyle = 'text-sm px-2 py-1';
      break;
    case 'medium':
      sizeStyle = 'text-base px-4 py-2';
      break;
    case 'large':
      sizeStyle = 'text-md px-6 py-2 md:px-12 md:py-4 font-semibold ';
      break;
    default:
      break;
  }

  return (
    <button
      className={`bg-primary hover:bg-primary-dark transition-all text-white ${sizeStyle} ${styles}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
