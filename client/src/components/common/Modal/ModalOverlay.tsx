const ModalOverlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='fixed z-30 min-w-[300px] w-full'>
      <div>{children}</div>
    </div>
  );
};

export default ModalOverlay;
