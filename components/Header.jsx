import headerStyles from './header-styles.module.scss';

import Link from 'next/link'
import SearchBox from './SearchBox';

export default function Header({searchTerm}) {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.header__content}>
        <Link href="/">
          <a className={headerStyles.header__logo}></a>
        </Link>
        <SearchBox searchTerm={searchTerm}/>
      </div>
    </header>
  );
}