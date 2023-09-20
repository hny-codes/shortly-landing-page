import { useForm } from 'react-hook-form';
import { useState } from 'react';
import BgMobile from '../images/bg-shorten-mobile.svg';
import BgDesktop from '../images/bg-shorten-desktop.svg';
import getShortenLink from '../util/getShortenLink';
import type { ShrtLink } from '../util/getShortenLink';
import Link from './Link';

type Input = {
  link: string;
};

export default function LinkBox() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();
  const [links, setLinks] = useState<ShrtLink[]>([]);

  const urlPattern =
    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

  const onSubmit = async (data: Input) => {
    const response = await getShortenLink(data.link);
    setLinks((prevState) => [...prevState, response.result]);
  };

  return (
    <div className='mt-40 bg-gray-100 md:text-xl md:pb-10'>
      <div className='bg-link-mobile md:bg-link-desktop bg-no-repeat bg-right-top md:bg-left-top md:bg-cover bg-[--clr-primary-violet] w-4/5 md:w-full md:max-w-[--max-w] mx-auto py-8 md:py-12 rounded-lg relative -top-20'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col md:flex-row md:gap-4 w-4/5 md:w-[90%] mx-auto'
        >
          <input
            data-test='link-input'
            placeholder='Shorten a link here...'
            className={`input relative border-4 md:flex-grow placeholder:text-xl ${
              errors.link?.type === 'pattern' ||
              errors.link?.type === 'required'
                ? 'text-red-500 placeholder:text-[--clr-secondary-red] border-[--clr-secondary-red]'
                : 'border-[--clr-primary-cyan]'
            }`}
            {...register('link', { required: true, pattern: urlPattern })}
          />

          {/* Error messages */}
          {errors.link?.type === 'pattern' && (
            <p data-test='error' className='error'>
              Not a link!
            </p>
          )}
          {errors.link?.type === 'required' && (
            <p data-test='error' className='error'>
              Please add a link
            </p>
          )}

          <button
            data-test='shorten-btn'
            className='btn bg-[--clr-primary-cyan] text-white font-bold rounded-lg before:rounded-lg mt-4 md:mt-0 md:max-w-[12rem] md:text-xl'
            type='submit'
          >
            Shorten it!
          </button>
        </form>
      </div>

      {/* Links */}
      <ul
        data-test='link-list'
        className='w-4/5 md:w-full md:max-w-[--max-w] mx-auto relative -top-10 [&>*]:mb-16 md:[&>*]:mb-0 md:flex md:flex-col md:gap-6'
      >
        {links.map((link) => (
          <Link
            code={link.code}
            original_link={link.original_link}
            full_share_link={link.full_share_link}
            full_short_link={link.full_short_link}
          />
        ))}
      </ul>
    </div>
  );
}
