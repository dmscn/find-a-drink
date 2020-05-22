export default function promisifyActionDispatch(dispatch, action) {
  return new Promise((resolve, reject) => {
    dispatch({
      ...action,
      resolve,
      reject,
    })
  })
}
