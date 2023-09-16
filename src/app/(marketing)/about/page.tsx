import * as React from 'react';

import NextImage from 'next/image';

import fahmiOne from '@/app/(marketing)/about/_images/fahmi-one.jpg';
import fahmiTwo from '@/app/(marketing)/about/_images/fahmi-two.jpg';
import fahmiThree from '@/app/(marketing)/about/_images/fahmi-three.jpg';
import fahmiFour from '@/app/(marketing)/about/_images/fahmi-four.jpg';

export default function AboutPage() {
    return (
        <div className="relative flex flex-col gap-y-32 overflow-hidden py-20">
            <div className="container lg:flex">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-8 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-xl lg:pb-8">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl">Hi, I&#39;m Fahmi Idris.</h2>

                        <p className="mt-6 text-base/7 text-slate-600">
                            I&#39;m a graduate of Vocational High School, majoring in Informatics Engineering, with expertise in Software Engineering.
                            Currently, I&#39;m working as a Frontend Developer.
                        </p>

                        <p className="mt-6 text-base/7 text-slate-600">
                            Ever since I entered Vocational High School, I&#39;ve been captivated by programming. However, I soon realized that the
                            knowledge I gained there was limited, prompting me to explore other sources such as YouTube, Udemy Courses, Dicoding, and
                            Blogs to expand my skills.
                        </p>

                        <p className="mt-6 text-base/7 text-slate-600">
                            The world of software development offers a vast array of things to learn and numerous technologies to explore, and I am
                            determined to absorb as much as possible. I have a strong passion for learning and value feedback to continuously improve
                            and grow.
                        </p>

                        <p className="mt-6 text-base/7 text-slate-600">
                            I reside in Bogor Regency, West Java Province. And I&#39;m always enthusiastic about connecting with new people. If
                            you&#39;d like to get in touch, please feel free to visit my social media or reach out to me via email.
                        </p>

                        <p className="mt-6 text-base/7 text-slate-600">Thank you, and I&#39;m looking forward to connecting with you!</p>
                    </div>

                    <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                            <NextImage
                                src={fahmiOne}
                                alt=""
                                className="aspect-[7/5] w-[37rem] max-w-none bg-slate-200 object-cover"
                                placeholder="blur"
                                priority
                            />
                        </div>

                        <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                            <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                <NextImage
                                    src={fahmiTwo}
                                    alt=""
                                    className="aspect-[4/3] w-[24rem] max-w-none flex-none bg-slate-200 object-cover"
                                    placeholder="blur"
                                    priority
                                />
                            </div>

                            <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                <NextImage
                                    src={fahmiThree}
                                    alt=""
                                    className="aspect-[7/5] w-[37rem] max-w-none flex-none bg-slate-200 object-cover"
                                    placeholder="blur"
                                    priority
                                />
                            </div>

                            <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                <NextImage
                                    src={fahmiFour}
                                    alt=""
                                    className="aspect-[4/3] w-[24rem] max-w-none bg-slate-200 object-cover"
                                    placeholder="blur"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
