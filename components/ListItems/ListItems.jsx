import listItemsStyles from './listItems-styles.module.scss';
import ItemCard from '../ItemCard/ItemCard';

const ListItems = ({items}) => {
  return (
    <ul className={listItemsStyles.list}>
      {items && items.map((item, index) => <li className={listItemsStyles.item} key={index} ><ItemCard item={item}/></li>)}
    </ul>
  )
}

export default ListItems;