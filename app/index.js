
import _ from 'lodash';
import j from 'jquery';
function component () {
 // var element = document.createElement('div');
  var element = j('<div></div>');
  /* lodash is required for the next line to work */
  // element.innerHTML = _.join(['Hello','webpack'], ' ');
    element.html(_.join(['Hello','webpack'], ' '))
  return element.get(0);
}

document.body.appendChild(component());