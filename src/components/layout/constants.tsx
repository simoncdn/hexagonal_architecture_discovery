import { FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { IoMdNotifications, IoMdNotificationsOutline } from 'react-icons/io';
import { IoHomeOutline, IoHomeSharp } from 'react-icons/io5';

type Navigation = {
  id: string;
  label: string;
  href: string;
  unSelectedIcon: JSX.Element;
  selectedIcon: JSX.Element;
};

export const navigations: Navigation[] = [
  {
    id: crypto.randomUUID(),
    label: 'Home',
    href: '/home',
    unSelectedIcon: <IoHomeOutline />,
    selectedIcon: <IoHomeSharp />,
  },
  {
    id: crypto.randomUUID(),
    label: 'Notifications',
    href: '/notifications',
    unSelectedIcon: <IoMdNotificationsOutline />,
    selectedIcon: <IoMdNotifications />,
  },
];

type SocialMedia = {
  id: string;
  label: string;
  href: string;
  Icon: JSX.Element;
};

export const socialMedias: SocialMedia[] = [
  {
    id: crypto.randomUUID(),
    label: 'Twitter',
    href: '/home',
    Icon: <FaXTwitter />,
  },
  {
    id: crypto.randomUUID(),
    label: 'Instagram',
    href: '/home',
    Icon: <FaInstagram />,
  },
  {
    id: crypto.randomUUID(),
    label: 'LinkedIn',
    href: '/home',
    Icon: <FaLinkedin />,
  },
];
