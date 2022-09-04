import * as React from 'react';
import Image from 'next/future/image';

import { profile } from '@/me';

export const Summary = () => {
  return (
    <section id="summary" aria-labelledby="summary-title">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="reviews-title" className="text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl">
            Start by imitating the existing one, then create a better one.
          </h2>

          <figure>
            <blockquote>
              <p className="mt-8 text-sm text-gray-600 sm:text-lg">
                Honestly, I really have a hard time making something new, this hinders the development of my abilities.
                So to overcome this, I always copy some things that I think are good, then modify some things.
                Indonesians call this Amati, Tiru, Modifikasi (Observe, Imitate, and Modify). But that doesn&#39;t mean
                I give up trying to make new things, I will keep trying!
              </p>
            </blockquote>

            <figcaption className="mt-8 flex items-center justify-center space-x-4 text-left">
              <Image src={profile.image} alt="" className="h-14 w-14 rounded-full ring-2 ring-cyan-400" />

              <div>
                <div className="font-semibold text-slate-800">{profile.name}</div>
                <div className="mt-0.5 text-sm leading-6">{profile.role}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
