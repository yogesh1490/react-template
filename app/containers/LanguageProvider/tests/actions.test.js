import { changeLocale } from '../actions';

import { CHANGE_LOCALE } from '../constants';

describe('LanguageProvider action tests', () => {
  it('has a type of CHANGE_LOCALE', () => {
    const expected = {
      type: CHANGE_LOCALE,
      locale: 'de'
    };
    expect(changeLocale('de')).toEqual(expected);
  });
});
