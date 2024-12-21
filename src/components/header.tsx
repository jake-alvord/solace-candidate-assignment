import Image from "next/image";

export function Header() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex p-6 lg:w-8/12">
        <Image src="/logo.svg" width={128} height={35.6} alt="Solace logo" />
      </div>
    </div>
  );
}
