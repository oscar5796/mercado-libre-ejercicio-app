import sectionStyles from './Section-styles.module.scss';

const Section = ({ children }) => {
  return (
    <section className={sectionStyles.section}>
      { children }
    </section>
  )
}

export default Section;