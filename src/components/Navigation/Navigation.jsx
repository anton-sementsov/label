import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/images/khvylia-wite.png';

export const Navigation = ({}) => {
  return (
    <div className="text-white text-4xl w-full text-center space-x-[57px] z-10">
      <Link className="cursor-pointer" href="/manifesto">
        <a className="text-white text-4xl ">MANIFESTO</a>
      </Link>
      <Link href="/releases">
        <a className="text-white text-4xl">RELEASES</a>
      </Link>
      <span>
        <Image
          alt=""
          layout="fixed"
          height="32"
          width="202"
          src={Logo}
          className="mx-[25px]"
        />
      </span>
      <Link href="/artists">
        <a className="text-white text-4xl">ARTISTS</a>
      </Link>

      <Link href="/events">
        <a className="text-white text-4xl">EVENTS</a>
      </Link>
      {/*<Link href="/merch">
        <a className="text-white text-4xl">MERCH</a>
      </Link>
      <Link href="/school">
        <a className="text-white text-4xl">SCHOOL</a>
      </Link>*/}
    </div>
  );
};
