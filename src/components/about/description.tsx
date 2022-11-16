import * as React from 'react';

import { Link } from '@/components/link';

export const Description = () => {
  return (
    <div className="flex flex-col space-y-4 py-4">
      <p>
        Hello, my name is <span className="font-medium text-cyan-400">Fahmi Idris</span>, but my friends call me{' '}
        <span className="font-medium text-cyan-400">Mi</span> or <span className="font-medium text-cyan-400">Fahmi</span>. I just graduated from{' '}
        <Link href="https://www.facebook.com/smk1triplejciteureup/" openNewTab={true} className="font-medium text-cyan-400">
          Vocational High School
        </Link>{' '}
        majoring in Software Engineering in 2021. I enjoy learning something new and getting feedback to make myself better and improve.
      </p>

      <p>
        I live in Bogor Regency, West Java Province, in a village. Now I concentrate on web programming especially on the{' '}
        <span className="font-medium text-cyan-400">Frontend Development</span>.
      </p>

      <p>
        I&apos;m always excited and happy to connect with someone, so if you want to connect with me, I&apos;m very open. You can visit my social
        media or you can email me.
      </p>

      <p>
        Honestly, I can&apos;t speak/write in English yet, I&apos;m still learning until now. everything I write is mostly using the help of google
        translate, so sorry if there are words that are a bit strange.
      </p>

      <p>
        FYI, I created this website not only as a learning tool but also as a place for me to blog and showcase my projects and as a place to see the
        history of my experiences.
      </p>
    </div>
  );
};
