(function getLeetCode() {
  const title = document.querySelector('[data-cypress="QuestionTitle"]')?.innerText
  const href = window.location.href;
  const hrefTitle = href.split('/').filter(v => v).pop()
  const className = `-${hrefTitle}`.replace(/-(\w)/g, (all, letter) => letter.toUpperCase());

  const index = `000${title.split('.')[0]}`.slice(-4);
  console.log(`
/**
 * ${title}
 * ${href}
 */
export default function ${className}() {

}

${className}();

${document.querySelector('.lines-content').innerText}

${index}-${hrefTitle}.ts
  `)
})()