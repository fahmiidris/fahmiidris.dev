import * as React from 'react';
import NextLink, { LinkProps } from 'next/link';
import { Menu, Transition } from '@headlessui/react';

type TDropdown = {
  align?: string;
  width?: number | string;
  contentClasses?: string;
  trigger: React.ReactElement<HTMLButtonElement>;
  children: React.ReactNode;
};

type TDropdownLink = {
  href?: string;
  isExternal?: boolean;
} & React.ComponentPropsWithoutRef<'a'> &
  LinkProps;

type TDropdownButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  processing?: boolean;
};

export const Dropdown = ({
  align = 'right',
  width = 48,
  contentClasses = 'py-1 bg-white',
  trigger,
  children,
}: TDropdown) => {
  let alignmentClasses: string;

  switch (width) {
    case '48':
      width = 'w-48';
      break;
  }

  switch (align) {
    case 'left':
      alignmentClasses = 'origin-top-left left-0';
      break;
    case 'top':
      alignmentClasses = 'origin-top';
      break;
    case 'right':
    default:
      alignmentClasses = 'origin-top-right right-0';
      break;
  }

  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button as={React.Fragment}>{trigger}</Menu.Button>

          <Transition
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div className={`absolute z-50 mt-2 ${width} rounded-md shadow-lg ${alignmentClasses}`}>
              <Menu.Items
                className={`rounded-md ring-1 ring-black/5 focus:outline-none ${contentClasses}`}
                static
              >
                {children}
              </Menu.Items>
            </div>
          </Transition>
        </>
      )}
    </Menu>
  );
};

const Link = ({ children, ...props }: TDropdownLink) => (
  <Menu.Item>
    {({ active }) => (
      <NextLink {...props}>
        <a
          className={`block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 ${
            active ? 'bg-gray-100' : ''
          } transition duration-150 ease-in-out focus:outline-none`}
        >
          {children}
        </a>
      </NextLink>
    )}
  </Menu.Item>
);

const Button = ({ children, ...props }: TDropdownButton) => (
  <Menu.Item>
    {({ active }) => (
      <button
        className={`block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 ${
          active ? 'bg-gray-100' : ''
        } transition duration-150 ease-in-out focus:outline-none`}
        {...props}
      >
        {children}
      </button>
    )}
  </Menu.Item>
);

Dropdown.Link = Link;
Dropdown.Button = Button;
