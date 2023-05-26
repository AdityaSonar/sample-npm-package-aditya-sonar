import React from 'react';
import './customButton.scss';

interface Props {
  label: string
}

const CustomButton: React.FC<Props> = ({ label }: Props) => {
  const onClickHandler = () => {
    console.log('Custom Button from Design System package', label);
  };

  return (
    <>
      <div className='btn_wrapper'>
        <button className='custom-btn' onClick={onClickHandler}>
          {label}
        </button>
      </div>
    </>
  );
};
export default CustomButton;
