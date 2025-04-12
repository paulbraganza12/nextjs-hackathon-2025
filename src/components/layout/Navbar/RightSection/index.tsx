import Image from "next/image";

export const RightSection = () => {
  return (
    <div className="flex items-center gap-6">
      <a
        href="#"
        className="text-sm font-semibold"
      >
        Airbnb your home
      </a>

      <Image
        src="/icons/globe.svg"
        alt="Icon"
        width={16}
        height={16}
      />
      <div className="flex rounded-full border border-gray-300 py-2 pr-2 pl-3.5">
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
