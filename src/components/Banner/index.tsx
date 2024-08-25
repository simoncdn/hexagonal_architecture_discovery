import { Separator } from '../ui/separator';

type BannerProps = {
  label: string;
};

export default function Banner({ label }: BannerProps) {
  return (
    <div className="flex h-36 items-center justify-center">
      <Separator className="w-60 bg-black" />
      <span className="px-4 text-2xl font-bold">{label}</span>
      <Separator className="w-60 bg-black" />
    </div>
  );
}
