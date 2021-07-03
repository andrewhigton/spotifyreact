module.exports = {
  ...jest.requireActual('./browseActions'),
  __esModule: true,
  // TODO: update return value for Redux / context implementation
  fetchFeatured: jest.fn().mockReturnValue(Promise.resolve(songs)),
}