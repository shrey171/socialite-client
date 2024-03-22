import Icon from "assets/icons/logo.svg?react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Icon fill="white" className="h-[2em] w-auto"/>
      <h1 className="text-3xl font-play font-normal">Socialite</h1>
    </div>
  );
};
