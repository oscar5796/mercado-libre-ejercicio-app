import headerStyles from './header-styles.module.scss';

import Link from 'next/link'
import SearchBox from './SearchBox';

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.header__content}>
        <Link href="/">
          <a className={headerStyles.header__logo}></a>
        </Link>
        <SearchBox/>
      </div>
    </header>
  );
}