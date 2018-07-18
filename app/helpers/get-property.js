import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';
import { get } from '@ember/object';

export function getProperty(params/*, hash*/) {
  let obj = params[0];
  let prop = params[1].trim();
  let val = null;

  if(obj) {
    val = get(obj, prop);
  }
  return val || htmlSafe("<em>Not Defined</em>");
}

export default helper(getProperty);
