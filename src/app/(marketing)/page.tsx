import * as React from 'react';

import Status from '@/app/(marketing)/_partials/status';
import Articles from '@/app/(marketing)/_partials/articles';
import Projects from '@/app/(marketing)/_partials/projects';
import Snippets from '@/app/(marketing)/_partials/snippets';
import Jumbotron from '@/app/(marketing)/_partials/jumbotron';
import Experiences from '@/app/(marketing)/_partials/experiences';

export default function HomePage() {
    return (
        <>
            <Jumbotron />
            <Status message=" Currently working at PT. Virtual Spirit Technology SDN BHD as Frontend Developer." />

            <div className="relative flex flex-col gap-y-32 py-20">
                <Articles />
                <Projects />
                <Experiences />
                <Snippets />
            </div>
        </>
    );
}
