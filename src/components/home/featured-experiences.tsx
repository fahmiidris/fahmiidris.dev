import * as React from 'react';
import { ClockIcon } from '@heroicons/react/outline';

import { FeaturedSection } from '@/components/home/featured-section';
import { ExperienceSteps } from '@/components/experiences/experience-steps';

import { getExperiencePreviews } from '@/services/experiences';

const experiences = getExperiencePreviews().slice(0, 2);

export const FeaturedExperiences = () => {
    return (
        <FeaturedSection id="featured-experiences" title="Featured Experiences" description="My historical experience, non-formal education, big event, internship, etc." icon={ClockIcon} href="/experiences">
            <ExperienceSteps steps={experiences} />
        </FeaturedSection>
    );
};
