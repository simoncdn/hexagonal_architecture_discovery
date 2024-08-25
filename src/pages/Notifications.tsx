import { Separator } from '@/components/ui/separator';

export default function Notifications() {
  return (
    <div className={'flex-1 overflow-x-hidden overflow-y-scroll pr-4'}>
      <div className="flex h-36 items-center justify-center">
        <Separator className="w-60 bg-black" />
        <span className="px-4 text-2xl font-bold">NOTIFICATIONS</span>
        <Separator className="w-60 bg-black" />
      </div>

      <div className="flex justify-center">
        <p>Aucune notification</p>
      </div>
    </div>
  );
}
