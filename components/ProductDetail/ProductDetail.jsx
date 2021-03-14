import productDetailStyles from './ProductDetail-styles.module.scss';
import { formatNumber } from '../../utils/formatNumber';
import Button from '../../components/Button/Button';

const ProductDetail = ({ productDetail }) => {
  const formattedPrice = formatNumber(productDetail.price.amount);
  return (
    <div className={productDetailStyles.container}>
      <div className={ productDetailStyles.information }>
        <figure className={ productDetailStyles.image__container } >
          <img className={ productDetailStyles.image__item } src={ productDetail.picture }/>
        </figure>
        <h3>Descripción del producto</h3>
        <p className={ productDetailStyles.description }>{ productDetail.description.plain_text }</p>
      </div>
      <div className={productDetailStyles.purchase__information}>
        <span className={productDetailStyles.purchase__detail}>
          { `${productDetail.condition === "new" ? "Nuevo" : "Usado"} | ${productDetail.sold_quantity} vendidos`}
        </span>
        <h3>{ productDetail.title }</h3>
        <span className={ productDetailStyles.purchase__price }>
          <span>$ </span>
          <span>{formattedPrice}</span>
        </span>
        <Button>Comprar</Button>
      </div>
    </div>
  )

}

export default ProductDetail;