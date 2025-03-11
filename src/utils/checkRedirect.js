export default (router) => {
  const redirect = sessionStorage.getItem('redirect')
  // console.log('redirect: ', redirect)
  redirect && router.push(redirect) && sessionStorage.removeItem('redirect')
}
