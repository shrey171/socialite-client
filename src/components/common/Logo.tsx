import Icon from "assets/icons/logo.svg?react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 text-xl md:text-3xl">
      <Icon fill="white" className="h-8 w-auto md:h-[2em]"/>
      <h1 className="font-play font-normal ">Socialite</h1>
    </div>
  );
};
