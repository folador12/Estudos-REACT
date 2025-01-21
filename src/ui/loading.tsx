const Loading = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div
        className='h-16 w-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'
        role='status'
        aria-label='Loading'
      ></div>
    </div>
  );
};

export { Loading };
