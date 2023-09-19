import { useState } from 'react';
import type { ShrtLink } from '../util/getShortenLink';

export default function Link({
  code,
  original_link,
  full_share_link,
  full_short_link,
}: ShrtLink) {
  const [copy, setCopy] = useState(false);

  return (
    <li
      data-test='list-item'
      key={code}
      className='bg-white py-4 md:py-2 rounded-lg relative md:text-xl'
    >
      <hr className='border-[1.5px] absolute w-full top-12 md:hidden' />
      <div className='px-4 md:px-8 md:flex justify-between items-center'>
        <p className='overflow-ellipsis truncate md:w-3/5'>{original_link}</p>
        <div className='md:flex gap-8 md:items-center md:justify-end'>
          <p
            data-test='short-link'
            className='text-[--clr-primary-cyan] mt-6 mb-4 md:whitespace-nowrap'
          >
            {full_short_link}
          </p>

          <button
            data-test='link-item-btn'
            onClick={() => {
              navigator.clipboard.writeText(full_share_link);
              setCopy(true);
            }}
            className={`${
              copy &&
              'bg-[--clr-primary-violet] before:hover:opacity-0 before:h-0'
            } btn text-white rounded-lg before:rounded-lg md:flex-shrink-0 md:max-w-[8rem]`}
          >
            {copy ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </li>
  );
}
