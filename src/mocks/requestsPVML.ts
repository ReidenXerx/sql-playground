export const successSimpleSamplePVML = async () => ({
  json: async () => [
    ['username', 'email', 'age', 'sex'],
    ['vadim', 'bar.vadim@pvml.com', '37', 'male'],
    ['shlomi.lysenko', 'lysenko@pvml.com', '43', 'male'],
  ],
  ok: true,
})
