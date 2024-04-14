import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface InputWithLabelProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  setTouched: Dispatch<SetStateAction<boolean>>;
  warning?: string;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  type,
  placeholder,
  value,
  setValue,
  warning = '',
  setTouched,
}: InputWithLabelProps) => {
  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    setTouched(true);
  };
  return (
    <div className='flex flex-col space-y-1 w-full'>
      <label htmlFor={label} className='font-medium'>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={label}
        className={`p-3 w-full border text-sm ${
          warning?.length > 0
            ? 'border-warning-500 placeholder-warning-500 outline-warning-500'
            : 'border-slate-300 outline-black'
        } rounded `}
        value={value}
        onChange={handleValueChange}
        onBlur={handleBlur}
      />
      {warning?.length > 0 && (
        <div className='text-xs text-warning-500'>{warning}</div>
      )}
    </div>
  );
};

export default InputWithLabel;
