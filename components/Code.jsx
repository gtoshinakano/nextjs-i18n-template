import React from 'react';

const Code = ({children}) => {
  return (
    <span className='font-mono p-1.5 bg-zinc-200 rounded-lg'>
      {children}
    </span>
  );
}

export default Code;
