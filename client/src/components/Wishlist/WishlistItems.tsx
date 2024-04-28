import { useRecoilValue } from 'recoil';
import { wishlistStore } from '../../store/wishlist';
import WishlistItem from './WishlistItem';
import { useWishlist } from '../../hooks/useWishlist';
import WishlistIsEmpty from './WishlistIsEmpty';
import Wrapper from '../common/UI/Wrapper';
import { Link } from 'react-router-dom';

const WishlistItems = () => {
  const { deleteWishlistItem } = useWishlist();
  const wishlist = useRecoilValue(wishlistStore);
  console.log(wishlist);
  if (wishlist === undefined) {
    return <WishlistIsEmpty />;
  }
  return (
    <Wrapper>
      {wishlist.map((item) => (
        <Link to={`/product/${item.product.id}`} key={item.id}>
          <WishlistItem
            productName={item.product.productName}
            imageUrl={item.product.imageUrl}
            price={item.product.price}
            description={item.product.description}
            wishlistItemId={item.id}
            itemIsInStock={item.product.stockQuantity > 0 ? true : false}
            deleteWishlistItem={deleteWishlistItem}
          />
        </Link>
      ))}
    </Wrapper>
  );
};

export default WishlistItems;
