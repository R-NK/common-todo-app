module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/common-todo-app/'
    : '/'
}