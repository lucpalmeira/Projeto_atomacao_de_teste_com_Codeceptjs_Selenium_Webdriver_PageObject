/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type home_page = typeof import('./pages/home_page.js');
type new_user_signup_page = typeof import('./pages/new_user_signup_page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, home_page: home_page, new_user_signup_page: new_user_signup_page }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
