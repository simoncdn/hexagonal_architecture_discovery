import Banner from '@/components/Banner';

export default function Notifications() {
  return (
    <div className={'flex-1 overflow-x-hidden overflow-y-scroll pr-4'}>
      <Banner label="Notifications" />

      <div className="flex justify-center">
        <p>Aucune notification</p>
      </div>
    </div>
  );
}
