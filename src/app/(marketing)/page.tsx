import * as React from 'react';

import Status from '@/app/(marketing)/_partials/status';
import Jumbotron from '@/app/(marketing)/_partials/jumbotron';
import Experiences from '@/app/(marketing)/_partials/experiences';
import Projects from '@/app/(marketing)/_partials/projects';

export default function HomePage() {
    return (
        <>
            <Jumbotron />
            <Status message="Insanity is doing the same thing over and over again and expecting different results. - Albert Einstein" />

            <div className="relative flex flex-col gap-y-32 py-20">
                <Experiences />
                <Projects />
            </div>
        </>
    );
}
