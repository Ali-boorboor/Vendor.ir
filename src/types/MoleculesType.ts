type SignupNationalCodeType = {
  title: string;
  inputLabel: string;
  href: string;
};

type SignupFormtype = {
  title: string;
  children: JSX.Element;
};

type SignupFormRowType = {
  label: string | JSX.Element;
  children: JSX.Element;
};

export type { SignupNationalCodeType, SignupFormtype, SignupFormRowType };
