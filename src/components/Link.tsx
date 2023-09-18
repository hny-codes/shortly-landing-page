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
    <li data-test='list-item' key={code} className='bg-white py-4 rounded-lg relative'>
      <hr className='border-[1.5px] absolute w-full top-12' />
      <div className='px-4'>
        <p className='overflow-ellipsis truncate'>{original_link}</p>
        <p data-test='short-link' className='text-[--clr-primary-cyan] mt-6 mb-4'>{full_short_link}</p>

        <button
          data-test='link-item-btn'
          onClick={() => {
            navigator.clipboard.writeText(full_share_link);
            setCopy(true);
          }}
          className={`${
            copy &&
            'bg-[--clr-primary-violet] before:hover:opacity-0 before:h-0'
          } btn text-white rounded-lg before:rounded-lg `}
        >
          {copy ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </li>
  );
}
