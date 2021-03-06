const braces = require('./braces')

/* global test describe expect */

describe('braces()', () => {
  test("should return 'YES, NO'", () => {
    var values = ['{}[]()', '{[}]']
    var solution = ['YES', 'NO']
    expect(braces.braces(values)).toEqual(expect.arrayContaining(solution))
  })

  test("should return 'YES, NO'", () => {
    var values = ['{{([])}}', '{{)[](}}']
    var solution = ['YES', 'NO']
    expect(braces.braces(values)).toEqual(expect.arrayContaining(solution))
  })

  test("should return 'YES, NO, YES'", () => {
    var values = ['{(([])[])[]}', '{(([])[])[]]}', '{(([])[])[]}[]']
    var solution = ['YES', 'NO', 'YES']
    expect(braces.braces(values)).toEqual(solution)
  })

  test("HackerRank Test: no closing brackets", () => {
    var values = [
      '()[{}()]([[][]()[[]]]{()})([]()){[]{}}{{}}{}(){([[{}([]{})]])}',
      '{][({(}]][[[{}]][[[())}[)(]([[[)][[))[}[]][()}))](]){}}})}[{]{}{((}]}{{)[{[){{)[]]}))]()]})))[',
      '[)](][[([]))[)',
      ']}]){[{{){',
      '{[(}{)]]){(}}(][{{)]{[(((}{}{)}[({[}[}((}{()}[]})]}]]))((]][[{{}[(}})[){()}}{(}{{({{}[[]})]{((]{[){[',
      '()}}[(}])][{]{()([}[}{}[{[]{]](]][[))(()[}(}{[{}[[]([{](]{}{[){()[{[{}}{[{()(()({}([[}[}[{(]})',
      '){[])[](){[)}[)]}]]){](]()]({{)(]])(]{(}(}{)}])){[{}((){[({(()[[}](]})]}({)}{)]{{{',
      '[(})])}{}}]{({[]]]))]})]',
      '[{',
      '{}([{()[]{{}}}])({})',
      '{({}{[({({})([[]])}({}))({})]})}',
      '()[]',
      '{)[])}]){){]}[(({[)[{{[((]{()[]}][([(]}{](])()(}{(]}{})[)))[](){({)][}()((',
      '[][(([{}])){}]{}[()]{([[{[()]({}[])()()}[{}][]]])}',
      '(}]}',
      '(([{()}]))[({[{}{}[]]{}})]{((){}{()}){{}}}{}{{[{[][]([])}[()({}())()({[]}{{[[]]([])}})()]]}}',
      '[(([){[](}){){]]}{}([](([[)}[)})[(()[]){})}}]][({[}])}{(({}}{{{{])({]]}[[{{(}}][{)([)]}}',
      '()()[()([{[()][]{}(){()({[]}[(((){(())}))]()){}}}])]',
      '({)}]}[}]{({))}{)]()(](])})][(]{}{({{}[]{][)){}{}))]()}((][{]{]{][{}[)}}{)()][{[{{[[',
      ')}(()[])(}]{{{}[)([})]()}()]}(][}{){}}})}({](){([()({{(){{',
      '}([]]][[){}}[[)}[(}(}]{(}[{}][{}](}]}))]{][[}(({(]}[]{[{){{(}}[){[][{[]{[}}[)]}}]{}}(}'
    ]

    var solution = [
      'YES',
      'NO',
      'NO',
      'NO',
      'NO',
      'NO',
      'NO',
      'NO',
      'NO',
      'YES',
      'YES',
      'YES',
      'NO',
      'YES',
      'NO',
      'YES',
      'NO',
      'YES',
      'NO',
      'NO',
      'NO'
    ]
    expect(braces.braces(values)).toEqual(solution)
  })
})
