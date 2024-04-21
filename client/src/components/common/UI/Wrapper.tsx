const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-[90%] md:w-[80%] xl:w-3/5 mx-auto flex justify-center flex-col items-center space-y-4 xl:flex-row xl:space-y-0 xl:space-x-8'>
      {children}
    </div>
  );
};

export default Wrapper;
