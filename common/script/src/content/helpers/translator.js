require('coffee-script');
import i18n from '../../../../script/i18n.coffee';

var t = function(string, vars) {
  var func = function(lang) {
    if (vars == null) {
      vars = {
        a: 'a'
      };
    }
    return i18n.t(string, vars, lang);
  };

  func.i18nLangFunc = true; // Trick to recognize this type of function

  return func;
};

export default t;
