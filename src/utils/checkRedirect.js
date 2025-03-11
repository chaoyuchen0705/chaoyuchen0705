export default (router) => {
  const redirect = sessionStorage.getItem('redirect')
  console.log('redirect: ', redirect)
  redirect && router.push(redirect) && sessionStorage.removeItem('redirect')
  // console.log('🎯🎯🎯 router: ', JSON.parse(JSON.stringify(router)))
  console.log('router: ', router)
}
