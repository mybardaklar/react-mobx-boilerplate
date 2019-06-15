import React from 'react';
import Link from 'next/link';

export default () => {
  return(
    <div>
      <Link href='/'>
        <a activeClassName='page-layout__nav-item--active'>Home</a>
      </Link>
      {' · '}
      <Link href='/counter'>
        <a activeClassName='page-layout__nav-item--active'>Counter</a>
      </Link>
    </div>
  );
};
