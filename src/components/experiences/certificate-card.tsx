import * as React from 'react';

import { Link } from "@/components/link";

import { formatDate } from '@/utils/helpers';

import type { CertificateType } from '@/types/certificate.type';

type CertificateCardType = CertificateType & {
    isNew?: boolean;
};

export const CertificateCard = ({ title, description, platform, date, href, credential, isNew = false }: CertificateCardType) => {
    return (
        <li className="text-sm leading-6">
            <figure className="relative flex flex-col-reverse border border-slate-400/20 rounded-lg p-6 dark:bg-slate-800 dark:border-transparent">
                <blockquote className="mt-6 text-[10px] leading-4 text-slate-800 dark:text-slate-300">
                    <div className="flex flex-col">
                        <h3>Credential ID :</h3>
                        <p className="font-semibold">{credential.id}</p>
                    </div>

                    <div className="flex flex-col mt-2">
                        <h3>Platform :</h3>
                        <Link href={platform.href} openNewTab={true} className="font-semibold">
                            {platform.name}
                        </Link>
                    </div>

                    <div className="flex items-center space-x-2 mt-6">
                        {credential.href && (
                            <Link href={credential.href} openNewTab={true} className="w-full flex items-center justify-center border border-slate-400/20 dark:border-transparent bg-slate-100 dark:bg-slate-700 py-2 text-xs rounded-md hover:text-slate-900 dark:hover:text-white font-semibold">
                                Show Credential
                            </Link>
                        )}
                        <Link href={href} openNewTab={true} className="w-full flex items-center justify-center border border-slate-400/20 dark:border-transparent bg-slate-100 dark:bg-slate-700 py-2 text-xs rounded-md hover:text-slate-900 dark:hover:text-white font-semibold">
                            Show Certificate
                        </Link>
                    </div>
                </blockquote>

                <figcaption className="flex items-start space-x-4">
                    <div className="flex-auto">
                        <h2 className="text-sm text-slate-800 font-semibold dark:text-white">
                            {title}
                        </h2>
                        <p className="mt-0.5 text-[10px] leading-4">
                            Issued {formatDate(date.start, "{MM}, {YYYY}")} - {date.end ? "Expires " + formatDate(date.end, "{MM}, {YYYY}") : 'No Expiration Date'}
                        </p>
                    </div>
                </figcaption>

                {isNew && (
                    <span className="absolute -top-2 -right-2 z-10 text-xs rounded-[4px] px-2 py-1 bg-cyan-400 dark:bg-cyan-500 text-slate-800 font-bold">
                        New!
                    </span>
                )}
            </figure>
        </li>
    );
};
