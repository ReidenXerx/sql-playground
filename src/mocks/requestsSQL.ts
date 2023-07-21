export const successSimpleSampleSQL = async () => ({
  json: async () => [
    ['username', 'email', 'age', 'sex'],
    ['bar', 'bar.haim@pvml.com', '37', 'male'],
    ['shlomi', 's@pvml.com', '43', 'male'],
  ],
  ok: true,
})

export const successLongSimpleSampleSQL = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        json: async () => [
          ['username', 'email', 'age', 'sex'],
          ['bar', 'bar.haim@pvml.com', '37', 'male'],
          ['shlomi', 's@pvml.com', '43', 'male'],
        ],
        ok: true,
      })
    }, 5000)
  })
