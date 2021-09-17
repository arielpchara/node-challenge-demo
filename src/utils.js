exports.camel = (name) => {
    return name.split(' ').map((part) => part.replace(/^(.).*/, (letter, trailing) => letter+trailing )).join('');
}

exports.hello = (name) => {
    return `Hello ${name}`
}

exports.force = (name) => {
    return `Hello ${name}`
}