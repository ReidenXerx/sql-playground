export const successSimpleSamplePVML = async () => ({
  json: async () => [
    ['username', 'email', 'age', 'sex'],
    ['vadim', 'bar.vadim@pvml.com', '37', 'male'],
    ['shlomi.lysenko', 'lysenko@pvml.com', '43', 'male'],
  ],
  ok: true,
})

export const successLongSimpleSamplePVML = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        json: async () => [
          ['username', 'email', 'age', 'sex'],
          ['bar', 'bar.haim@pvml.com', '47', 'male'],
          ['shlomi', 's@pvml.com', '63', 'male'],
        ],
        ok: true,
      })
    }, 5000)
  })
