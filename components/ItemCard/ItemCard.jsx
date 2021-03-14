import itemCardStyles from './ItemCard-styles.module.scss';
import Link from 'next/link';
import { formatNumber } from '../../utils/formatNumber';

const ItemCard = ({item}) => {
  return (
    <div className={itemCardStyles.item__container}>
      <div className={itemCardStyles.item__image}>
        <Link href="/items/[itemId]" as={`/items/${item.id}`}>
          <a>
            <img
              src={item.picture}
              alt={item.title}
            />
          </a>
        </Link>
      </div>
      <div className={itemCardStyles.item__info}>
        <div className={itemCardStyles.item__price}>
          <span>
            <span>$</span>
            <span>{formatNumber(item.price.amount)}</span>
            {
              item.free_shipping ? <span className={ itemCardStyles.item__shipping }><i className="material-icons md-16">local_shipping</i></span> : null
            }
          </span>
        </div>
        <Link href="/items/[itemId]" as={`/items/${item.id}`}>
          <a><h4>{item.title}</h4></a>
        </Link>
      </div>
      <div className={itemCardStyles.item__city}>
        <p>{item.city_name}</p>
      </div>
    </div>
  );
}

export default ItemCard;