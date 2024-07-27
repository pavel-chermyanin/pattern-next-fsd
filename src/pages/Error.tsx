export const Error = (
  {
    error,
    reset
  }: {
    error: Error & {
      digest?: string
    }
    reset: () => void
  }
) => {

  return (
    <div>
      <h2>Что-то пошло не так</h2>
      <h3>{error.message}</h3>
      {/*<h3>{error?.digest}</h3> - хэш ошибки*/}
      <button className={'bg-amber-200 p-2 border-2 my-2'} onClick={() => reset()}>Попробовать снова</button>
    </div>
  );
};


