import { Link } from 'react-router-dom';

const BrowseCard = ({ imgUrl, label }: { imgUrl: string; label: string }) => {
  return (
    <Link
      to={`/shop?category=${encodeURIComponent(label.toLowerCase())}`}
      className='cursor-pointer group flex flex-col items-center gap-2'
    >
      <div className='space-y-2'>
        <img src={imgUrl} alt='#' />
      </div>
      <div className='font-bold text-font-primary text-lg inline-flex text-center group-hover:border-b group-hover:border-font-primary'>
        {label}
      </div>
    </Link>
  );
};

export default BrowseCard;
