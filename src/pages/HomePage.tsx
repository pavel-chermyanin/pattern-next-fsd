import { FunctionComponent, useMemo } from 'react';
import Link from 'next/link';

type HomePageProps = {}

export const HomePage: FunctionComponent<HomePageProps> = () => {
  const getRandomUserId = useMemo(() => {
    return Math.round(Math.random() * 10);
  }, []);

  return (
    <div className="flex flex-col">
      Главная страница
      <Link href={`/server-response/?id=${getRandomUserId}`}>
        Перейти в случайного пользователя {getRandomUserId}
      </Link>
    </div>
  );
};


