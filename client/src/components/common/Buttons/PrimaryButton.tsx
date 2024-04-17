interface PrimaryButtonProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  styles?: string;
  handleClick: () => void;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  const { label, size, styles, handleClick, loading = false } = props;

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
      className={`bg-primary hover:bg-primary-dark transition-all text-font-inverted rounded-full ${sizeStyle} ${styles} flex justify-center`}
      onClick={handleClick}
    >
      {label}
      {loading ? (
        <div className='h-5 w-5 ml-3 animate-spin rounded-xl border-b-2 border-white'></div>
      ) : (
        ''
      )}
    </button>
  );
};

export default PrimaryButton;
