'use client';
import { FunctionComponent, useEffect } from 'react';

type PageWithErrorProps = {}

const PageWithError: FunctionComponent<PageWithErrorProps> = () => {

  useEffect(() => {
    throw new Error('фронты уебки');
  }, []);

  return (
    <div>
      Жопа
    </div>
  );
};

export default PageWithError;
