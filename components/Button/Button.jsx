import buttonStyles from './Button-styles.module.scss';

const Button = ({ children }) => {
  return (
    <button className={ buttonStyles.button }>{ children }</button>
  )
}

export default Button;