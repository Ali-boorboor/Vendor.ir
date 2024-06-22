type CustomButtonType = {
  text: string;
  bgColor: string;
  color: string;
  icon: JSX.Element;
  size: string;
  href: string;
  onClickHandler: any;
  AtomClass: string;
};

type CustomInputType = {
  AtomClass: string;
  setState: any;
  state: string;
  icon: JSX.Element;
  type: string;
  placeholder: string;
  size: string;
};

type MainLogoType = {
  width: string;
  height: string;
};

type SignupDropDownBoxType = {
  href: string;
  id: string;
  text: string;
};

export type { CustomButtonType, CustomInputType, MainLogoType, SignupDropDownBoxType };
