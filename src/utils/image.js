/**
 * 获取资源的 URL
 * @param {string} path - 相对于 assets 目录的路径
 * @returns {string} 资源的完整 URL
 */
export const getAssetUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href
}
