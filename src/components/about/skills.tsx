import * as React from 'react';

import { Link } from '@/components/link';

import { ReactComponent as PHPIcon } from '@/images/icons/php.svg';
import { ReactComponent as VueJsIcon } from '@/images/icons/vuejs.svg';
import { ReactComponent as NextJsIcon } from '@/images/icons/nextjs.svg';
import { ReactComponent as ReactJsIcon } from '@/images/icons/reactjs.svg';
import { ReactComponent as JavaScriptIcon } from '@/images/icons/javascript.svg';
import { ReactComponent as TypeScriptIcon } from '@/images/icons/typescript.svg';
import { ReactComponent as TailwindCSSIcon } from '@/images/icons/tailwindcss.svg';
import { ReactComponent as LaravelIcon } from '@/images/icons/laravel.svg';
import { ReactComponent as BootstrapIcon } from '@/images/icons/bootstrap.svg';
import { ReactComponent as VSCodeIcon } from '@/images/icons/vscode.svg';
import { ReactComponent as FigmaIcon } from '@/images/icons/figma.svg';
import { ReactComponent as PostmanIcon } from '@/images/icons/postman.svg';

type TSkill = {
  href: string;
  title: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
};

type TSkillSection = {
  title: string;
  skills: TSkill[];
};

const SkillSection = ({ title, skills }: TSkillSection) => {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-700 dark:text-white">{title}</h3>
      <div className="flex items-center space-x-1">
        {skills.map((item) => (
          <div key={item.title} className="py-2">
            <Link
              href={item.href}
              className="inline-flex items-center space-x-2 border border-slate-400/20 py-1.5 pl-2 pr-2.5 text-xs font-semibold"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Skills = (): JSX.Element => {
  return (
    <section id="skills" className="relative pt-4">
      <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200">Skills</h2>
      <div className="flex flex-col space-y-2 pt-2">
        <SkillSection
          title="Programming Language"
          skills={[
            { title: 'JavaScript', href: '', icon: JavaScriptIcon },
            { title: 'TypeScript', href: '', icon: TypeScriptIcon },
            { title: 'PHP', href: '', icon: PHPIcon },
          ]}
        />
        <SkillSection
          title="Framework"
          skills={[
            { title: 'React.js', href: '', icon: ReactJsIcon },
            { title: 'Vue.js', href: '', icon: VueJsIcon },
            { title: 'Next.js', href: '', icon: NextJsIcon },
            { title: 'Laravel', href: '', icon: LaravelIcon },
            { title: 'Tailwind CSS', href: '', icon: TailwindCSSIcon },
            { title: 'Bootstrap', href: '', icon: BootstrapIcon },
          ]}
        />
        <SkillSection
          title="Tools"
          skills={[
            { title: 'VS Code', href: '', icon: VSCodeIcon },
            { title: 'Figma', href: '', icon: FigmaIcon },
            { title: 'Postman', href: '', icon: PostmanIcon },
          ]}
        />
      </div>
    </section>
  );
};
