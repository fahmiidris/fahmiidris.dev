import * as React from 'react';

import { Link } from '@/components/link';

import { formatDate } from '@/utils/helpers';

import type { CertificateType } from '@/types/certificate';

type CertificateCardProps = CertificateType & {};

export const CertificateCard = ({ title, description, platform, date, href, credential }: CertificateCardProps) => {
  return (
    <li className="text-sm leading-6">
      <figure className="relative flex flex-col-reverse rounded-lg border border-slate-200 p-6">
        <blockquote className="mt-6 text-xs leading-4 text-slate-800">
          <div className="flex flex-col">
            <h3 className="font-medium">Credential ID :</h3>

            <p className="text-sm font-semibold">{credential.id}</p>
          </div>

          <div className="mt-2 flex flex-col">
            <h3 className="font-medium">Platform :</h3>

            <Link href={platform.href} openNewTab={true} className="text-sm font-semibold">
              {platform.name}
            </Link>
          </div>

          <div className="mt-6 flex items-center space-x-2">
            {credential.href && (
              <Link
                href={credential.href}
                openNewTab={true}
                className="flex w-full items-center justify-center rounded-md border border-slate-200 bg-transparent py-2 text-sm font-semibold hover:bg-slate-100 hover:text-slate-900"
              >
                Show Credential
              </Link>
            )}
            <Link
              href={href}
              openNewTab={true}
              className="flex w-full items-center justify-center rounded-md border border-slate-200 bg-transparent py-2 text-sm font-semibold hover:bg-slate-100 hover:text-slate-900"
            >
              Show Certificate
            </Link>
          </div>
        </blockquote>

        <figcaption className="flex items-start space-x-4">
          <div className="flex-auto">
            <h2 className="text-base font-semibold text-slate-800 line-clamp-2">{title}</h2>

            <p className="mt-1 text-xs leading-4">
              Issued {formatDate(date.start, '{MM}, {YYYY}')} -{' '}
              {date.end ? 'Expires ' + formatDate(date.end, '{MM}, {YYYY}') : 'No Expiration Date'}
            </p>
          </div>
        </figcaption>
      </figure>
    </li>
  );
};
