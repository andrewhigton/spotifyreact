module.exports = {
  ...jest.requireActual('./userinterfaceActions'),
  __esModule: true,
  // TODO: update return value for Redux / context implementation
  // fetchFeatured: jest.fn().mockReturnValue(Promise.resolve(songs)),
  updateHeaderTitle: jest.fn().mockReturnValue(Promise.resolve('Browse')),
}

