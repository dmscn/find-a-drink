export default function createCancelablePromise() {
  let cancel = () => {}
  const cancelablePromise = new Promise(
    (_, rej) => (cancel = () => rej('Promise canceled'))
  )

  const race = promise => Promise.race([cancelablePromise, promise])
  race.cancel = cancel

  return race
}
