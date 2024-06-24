type NationalCodeSignupFormType = {
  title: string;
  inputLabel: string;
  href: string;
  className: string;
};

type SignupFormWrappertype = {
  title: string;
  children: JSX.Element;
};

type SignupFormRowWrapperType = {
  label: string | JSX.Element;
  children: JSX.Element;
};

type UserDashboardOptionBoxType = {
  icon: JSX.Element;
  label: string;
  href: string;
};

export type {
  NationalCodeSignupFormType,
  SignupFormWrappertype,
  SignupFormRowWrapperType,
  UserDashboardOptionBoxType,
};
