export default (content, options) => {
  this.cacheable && this.cacheable()
  this.value = content

  const escapedContent = content.replace(/[`\\]/g, function(match) {
    return '\\' + match
  })
  const type = options.type === 'global' || options.type === 'resolve' ? `.${options.type}` : ''

  return 'import css from \'styled-jsx/css\';\n\nexport default css'+type+'`' + escapedContent + '`;'
}
