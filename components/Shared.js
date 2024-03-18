const Description = ({ paragraphs }) => {
    const res = JSON.parse(paragraphs)
    .reduce((result, paragraph) => {
        result += /*html*/`<div class="mt-3">${paragraph}</div>`
        return result
    }, '')
    return res
}
const ShortRow = ({ key, value }) => {
    if (!key || !value) return '';
    return /*html*/`<div class="mt-3">${key}: ${value}</div>`;
}

const ShortRowSingle = (props) => {
    return /*html*/`<div class="mt-3">${props?.message}</div>`;
}

const LinkRow = ({ links }) => {
    if (!links.trim()) return '';
    const result = JSON.parse(links)
        .reduce((result, link) => {
            result.push(/*html*/`<a class="text-3 hover:text-0 mr-3 font-bold text-xs" href="${link.href}">${link.name}</a>`);
            return result;
        }, [])
        .join(' • ');

    return `<div>${result}</div>`;
}

const TitleRow = ({ title }) => {
    return /*html*/`<div class="font-black text-sm ">${title}</div>`
}
export {
    Description,
    ShortRow,
    LinkRow,
    TitleRow,
    ShortRowSingle
}
