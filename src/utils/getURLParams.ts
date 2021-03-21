export default (url: string) => {
  const paramString = url.includes("?") ? url.split("?")[1].split("&") : []
  const params: Record<string, string> = {}

  paramString.forEach((param) => {
    const paramSplit = param.split("=")
    params[paramSplit[0]] = paramSplit[1]
  })

  return params
}
