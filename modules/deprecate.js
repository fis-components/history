import warning from 'warning'

function deprecate(fn, message) {
  return function () {
    warning(false, message)
    return fn.apply(this, arguments)
  }
}

export default deprecate
