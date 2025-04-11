import Image from 'next/image';

export const RightSection = () => {
  return (
    <div className="flex gap-6 items-center">
      <a
        href="#"
        className="font-semibold text-sm">
        Airbnb your home
      </a>

      <Image
        src="/icons/globe.svg"
        alt="Icon"
        width={16}
        height={16}
      />
      <div
        className="
      py-2 pl-3.5 pr-2 rounded-full border-gray-300 flex border
      ">
        <Image
          src="/icons/hamburger.svg"
          alt="Icon"
          width={14}
          height={10}
          className="mr-4"
        />
        <Image
          src="/icons/profile.svg"
          alt="Icon"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};
