import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { navigations, socialMedias } from './constants';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { IoLogOutOutline } from 'react-icons/io5';

export default function Layout() {
  const { pathname } = useLocation();

  const isMatch = (url: string) => {
    return pathname === url;
  };

  return (
    <div className={'relative flex h-screen w-screen gap-4'}>
      <div className={'w-80 px-4 py-2'}>
        <ul className={'ml-4 flex flex-col gap-4 py-6'}>
          {navigations.map((nav) => (
            <NavLink
              to={nav.href}
              key={nav.id}
              className="flex items-center gap-2"
            >
              <span className="text-2xl">
                {isMatch(nav.href) ? nav.selectedIcon : nav.unSelectedIcon}
              </span>
              <p>{nav.label}</p>
            </NavLink>
          ))}
        </ul>

        <h2 className="ml-2 text-xl">Social</h2>
        <ul className={'ml-4 flex flex-col gap-4 py-6'}>
          {socialMedias.map((socialMedia) => (
            <li key={socialMedia.id} className="flex items-center gap-2">
              <span className="text-2xl">{socialMedia.Icon}</span>
              <Link to={socialMedia.href}>{socialMedia.label}</Link>
            </li>
          ))}
        </ul>

        <Button variant="ghost" size="sm" className="ml-4">
          <IoLogOutOutline className="mr-2 text-2xl" />
          Sign Out
        </Button>

        <Separator className="my-4" />

        <div className={'flex items-center gap-2'}>
          <Avatar>
            <AvatarImage src="https://picsum.photos/200?random=user1" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          Simon Cardona
        </div>
      </div>

      <Outlet />
    </div>
  );
}
