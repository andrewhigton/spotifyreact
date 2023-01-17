module.exports = {
  ...jest.requireActual('./tokenActions'),
  __esModule: true,
  setToken: jest.fn().mockReturnValue(Promise.resolve('asdf')),
}