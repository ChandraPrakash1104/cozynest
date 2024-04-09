import { Link } from 'react-router-dom';

const BrowseCard = ({ imgUrl, label }: { imgUrl: string; label: string }) => {
  return (
    <Link
      to={`/shop?category=${encodeURIComponent(label.toLowerCase())}`}
      className='relative cursor-pointer'
    >
      <div className='card-hover-effect'></div>
      <div className='space-y-2'>
        <img src={imgUrl} alt='#' />
      </div>
      <div className='font-bold text-font-color1 text-lg text-center py-2'>
        {label}
      </div>
    </Link>
  );
};

export default BrowseCard;
