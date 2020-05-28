const mockKeyChain = {
  SECURITY_LEVEL_ANY: 'MOCK_SECURITY_LEVEL_ANY',
  SECURITY_LEVEL_SECURE_SOFTWARE: 'MOCK_SECURITY_LEVEL_SECURE_SOFTWARE',
  SECURITY_LEVEL_SECURE_HARDWARE: 'MOCK_SECURITY_LEVEL_SECURE_HARDWARE',
  setGenericPassword: jest.fn().mockResolvedValue(),
  getGenericPassword: jest.fn().mockResolvedValue(),
  resetGenericPassword: jest.fn().mockResolvedValue(),
}
jest.mock('react-native-keychain', () => mockKeyChain)
jest.mock('react-native-reanimated', () => {
  const mock = require('react-native-reanimated/mock')
  const getValue = (node) => {
    if (typeof node === "number") {
      return node
    }
    return node && node["__value"]
  }
  mock.default.cond = (a, b, c) => getValue(a) ? b : c
  mock.default.call = (a, b) => {}
  return mock
})
