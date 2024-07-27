import Link from 'next/link';
import { FunctionComponent } from 'react';

type HeaderProps = {}

const Header: FunctionComponent<HeaderProps> = () => {

  return (
    <header>
      <nav className="flex gap-3">
        <Link className="underline" href="/">Главная</Link>
        <Link className="underline" href="/without-auth">Страница без авторизации</Link>
        <Link className="underline" href="/with-auth">Страница с авторизацией</Link>
        <Link className="underline" href="/error-page">Страница с ошибкой</Link>
      </nav>
    </header>
  );
};

export default Header;
