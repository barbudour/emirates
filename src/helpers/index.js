if ('NodeList' in window && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

function qs(query, root = document) {
  return root.querySelector(query);
}

function qsAll(query, root = document) {
  return root.querySelectorAll(query);
}

function scrollTo(destination, duration = 1500, callback) {
  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight,
  );
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop - 20;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timingFunction = time * (2 - time);
    window.scroll(0, Math.ceil((timingFunction * (destinationOffsetToScroll - start)) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

function visChecker(el) {
  const rect = el.getBoundingClientRect();
  const wHeight = window.innerHeight || document.documentElement.clientHeight;
  return (
    rect.top <= wHeight * 0.85
  );
}

function elemVisCheck() {
  window.addEventListener('scroll', () => {
    qsAll('.h-anim').forEach((elem) => {
      if (visChecker(elem)) elem.setAttribute('visible', true);
    });
  });
}

function eventsDispatcher() {
  let eventScroll;
  try {
    eventScroll = new Event('scroll');
  } catch (e) {
    eventScroll = document.createEvent('Event');
    eventScroll.initEvent('scroll', false, false);
  }
  window.dispatchEvent(eventScroll);

  let resizeScroll;
  try {
    resizeScroll = new Event('resize');
  } catch (e) {
    resizeScroll = document.createEvent('Event');
    resizeScroll.initEvent('resize', false, false);
  }
  window.dispatchEvent(resizeScroll);
}

/* get info of elems */
const getStyle = elem => getComputedStyle(elem);
const rect = elem => elem.getBoundingClientRect();

/* work with class */
const addClass = (elem, classes) => {
  if (typeof(classes) === 'object') {
    classes.forEach(cl => cl.classList.add(cl));
  } else {
    elem.classList.add(classes);
  }
}
const removeClass = (elem, classes) => {
  if (typeof(classes) === 'object') {
    classes.forEach(cl => cl.classList.remove(cl));
  } else {
    elem.classList.remove(classes);
  }
}
const toggleClass = (elem, cl) => elem.classList.toggle(cl);
const containsClass = (elem, cl) => elem.classList.contains(cl);

/* event initialize */
const on = (elem, event, func) => elem.addEventListener(event, func);

export {
  scrollTo,
  visChecker,
  elemVisCheck,
  qs,
  qsAll,
  eventsDispatcher,
  getStyle,
  rect,
  addClass,
  removeClass,
  toggleClass,
  containsClass,
  on,
};