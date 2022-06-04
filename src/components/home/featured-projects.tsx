import * as React from 'react';
import { DesktopComputerIcon } from '@heroicons/react/outline';

import { FeaturedSection } from '@/components/home/featured-section';

export const FeaturedProjects = () => {
    return (
        <FeaturedSection id="featured-projects" title="Featured Projects" description="My project history, starting from personal projects, during internships or work, etc." icon={DesktopComputerIcon} href="/projects">
            <p className="text-sm font-semibold">Currently Under Development!</p>
        </FeaturedSection>
    );
};
