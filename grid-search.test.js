const gridSearch = require('./grid-search')

/* global test describe expect */

describe('gridSearch()', () => {
  test('1 should return true', () => {
    var grid = [
      '7283455864',
      '6731158619', // 1
      '8988242643',
      '3830589324', // 3
      '2229505813',
      '5633845374', // 5
      '6473530293',
      '7053106601', // 7
      '0834282956',
      '4607924137'  // 9
    ]
    var pattern = ['9505', '3845', '3530']

    expect(gridSearch.gridSearch(grid, pattern)).toEqual('YES')
  })

  test('2 should return true', () => {
    var grid = [
      '400453592126560', // 0
      '114213133098692', // 1
      '474386082879648', // 2
      '522356951189169', // 3
      '887109450487496', // 4
      '252802633388782', // 5
      '502771484966748', // 6
      '075975207693780', // 7
      '511799789562806', // 8
      '404007454272504', // 9
      '549043809916080', // 10
      '962410809534811', // 11
      '445893523733475', // 12
      '768705303214174', // 13
      '650629270887160' // 14
    ]
    var pattern = ['99', '99']

    expect(gridSearch.gridSearch(grid, pattern)).toEqual('NO')
  })

  test('3 should return true', () => {
    var grid = [
      '123412', 
      '561212', 
      '123612', 
      '781234']
    var pattern = ['12', '34']

    expect(gridSearch.gridSearch(grid, pattern)).toEqual('YES')
  })

  test('4 should return true', () => {
    var grid = [
      '123', 
      '456', 
      '789', 
      '781234']
    var pattern = ['45', '89']

    expect(gridSearch.gridSearch(grid, pattern)).toEqual('NO')
  })

  test('5 should return true', () => {
    var grid =['123412', '561212', '123634', '781288']
    var pattern = ['12', '34']

    expect(gridSearch.gridSearch(grid, pattern)).toEqual('YES')
  })

  test('6 should return true', () => {
    var grid = [
      '111111111111111', 
      '111111111111111', 
      '111111011111111', 
      '111111111111111', 
      '111111111111111']
    var pattern = ['11111', '11111', '11110']

    expect(gridSearch.gridSearch(grid, pattern)).toEqual('YES')
  })

  test('7 should return YES', () => {
    var grid = [
'456712',
'561245',
'123667',
'781288']
    var pattern = ['45', '67']

    expect(gridSearch.gridSearch(grid, pattern)).toEqual('YES')
  })

})

