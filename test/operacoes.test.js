const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes para 50 Operações Aritméticas (Melhorada)', () => {
// === Testes para o Bloco 1 (1-10) ===
test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); expect(soma(-2, 3)).toBe(1); expect(soma(-2, -3)).toBe(-5); expect(soma(0, 0)).toBe(0); });
test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); expect(subtracao(2, 5)).toBe(-3); expect(subtracao(0, 5)).toBe(-5); expect(subtracao(10, 10)).toBe(0); });
test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); expect(multiplicacao(-3, 4)).toBe(-12); expect(multiplicacao(0, 100)).toBe(0); expect(multiplicacao(5, 1)).toBe(5); });
test('4. deve dividir e lançar erro para divisão por zero', () => { expect(divisao(10, 2)).toBe(5); expect(divisao(9, 3)).toBe(3); expect(divisao(7, 2)).toBe(3.5); });
test('4.1. tratamento de divisão por zero', () => { expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.'); expect(() => divisao(0, 0)).toThrow('Divisão por zero não é permitida.'); });
test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); expect(potencia(5, 0)).toBe(1); expect(potencia(2, -1)).toBe(0.5); expect(potencia(10, 2)).toBe(100); });
test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); expect(raizQuadrada(0)).toBe(0); expect(raizQuadrada(9)).toBe(3); expect(raizQuadrada(25)).toBe(5); });
test('6.1. Erro quando números negativos para raízes', () => { expect(() => raizQuadrada(-4)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.'); expect(() => raizQuadrada(-1)).toThrow(); });
test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); expect(restoDivisao(15, 4)).toBe(3); expect(restoDivisao(20, 5)).toBe(0); });
test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(0)).toBe(1); });
test('8.1. quando fatorial(1)', () => { expect(fatorial(1)).toBe(1); });
test('8.2. quando fatorial(2)', () => { const result = fatorial(2); expect(result).toBe(2); expect(result).not.toBe(1); });
test('8.3. tratamento de valores grandes', () => { expect(fatorial(3)).toBe(6); expect(fatorial(4)).toBe(24); expect(fatorial(5)).toBe(120); expect(fatorial(6)).toBe(720); });
test('8.4. fatorial recursivo', () => { for (let n = 2; n <= 10; n++) { expect(fatorial(n)).toBe(n * fatorial(n - 1)); } });
test('8.5. fatorial com bases iguais', () => { const fat0 = fatorial(0); const fat1 = fatorial(1); const fat2 = fatorial(2); expect(fat0).toBe(1); expect(fat1).toBe(1); expect(fat0).toBe(fat1); expect(fat2).toBe(2); expect(fat2).not.toBe(fat1); expect(fat2).toBeGreaterThan(fat1); });
test('8.6. erro de fatorial com números negativos', () => { expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.'); expect(() => fatorial(-5)).toThrow(); });
test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); expect(mediaArray([5, 5, 5])).toBe(5); expect(mediaArray([1, 2, 3, 4, 5])).toBe(3); });
test('9.1.tratamento de arrays vazios', () => { expect(mediaArray([])).toBe(0); });
test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); expect(somaArray([10, 20, 30, 40])).toBe(100); expect(somaArray([])).toBe(0); expect(somaArray([5])).toBe(5); });

// === Testes para o Bloco 2 (11-20) ===
test('11. deve encontrar o valor máximo em um arra', () => { expect(maximoArray([1, 50, 10])).toBe(50); expect(maximoArray([100, 2, 50])).toBe(100); expect(maximoArray([-5, -1, -10])).toBe(-1); });
test('11.1. caso array vazio', () => { expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.'); });
test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); expect(minimoArray([50, 1, 25])).toBe(1); expect(minimoArray([-5, -1, -10])).toBe(-10); });
test('12.1. caso array vazio', () => { expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.'); });
test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); expect(valorAbsoluto(5)).toBe(5); expect(valorAbsoluto(0)).toBe(0); });
test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); expect(arredondar(9.4)).toBe(9); expect(arredondar(9.5)).toBe(10); });
test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); expect(isPar(4)).toBe(true); expect(isPar(0)).toBe(true); expect(isPar(-2)).toBe(true); });
test('15.1. trata números ímpares', () => { expect(isPar(7)).toBe(false); expect(isPar(3)).toBe(false); expect(isPar(-3)).toBe(false); expect(isPar(1)).toBe(false); });
test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); expect(isImpar(3)).toBe(true); expect(isImpar(-5)).toBe(true); expect(isImpar(1)).toBe(true); });
test('16.1. tratar números pares', () => { expect(isImpar(4)).toBe(false); expect(isImpar(100)).toBe(false); expect(isImpar(0)).toBe(false); expect(isImpar(-2)).toBe(false); });
test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); expect(calcularPorcentagem(25, 100)).toBe(25); expect(calcularPorcentagem(10, 50)).toBe(5); });
test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); expect(aumentarPorcentagem(50, 20)).toBeCloseTo(60); expect(aumentarPorcentagem(200, 50)).toBeCloseTo(300); });
test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); expect(diminuirPorcentagem(50, 20)).toBeCloseTo(40); expect(diminuirPorcentagem(200, 50)).toBeCloseTo(100); });
test('20. deve inverter o sinal de um número positivol', () => { expect(inverterSinal(42)).toBe(-42); expect(inverterSinal(-42)).toBe(42); expect(inverterSinal(0)).toBe(-0); });

// === Testes para o Bloco 3 (21-30) ===
test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); expect(seno(Math.PI / 2)).toBeCloseTo(1); });
test('deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); expect(cosseno(Math.PI)).toBeCloseTo(-1); });
test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); expect(tangente(Math.PI / 4)).toBeCloseTo(1); });
test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); expect(logaritmoNatural(1)).toBe(0); });
test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); expect(logaritmoBase10(1000)).toBe(3); expect(logaritmoBase10(10)).toBe(1); });
test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); expect(arredondarParaBaixo(5.1)).toBe(5); expect(arredondarParaBaixo(-5.1)).toBe(-6); });
test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); expect(arredondarParaCima(5.9)).toBe(6); expect(arredondarParaCima(-5.9)).toBe(-5); });
test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); expect(hipotenusa(5, 12)).toBe(13); expect(hipotenusa(6, 8)).toBe(10); });
test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); expect(grausParaRadianos(90)).toBeCloseTo(Math.PI / 2); expect(grausParaRadianos(360)).toBeCloseTo(2 * Math.PI); });
test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); expect(radianosParaGraus(Math.PI / 2)).toBeCloseTo(90); expect(radianosParaGraus(2 * Math.PI)).toBeCloseTo(360); });

// === Testes para o Bloco 4 (31-40) ===
test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); expect(mdc(12, 8)).toBe(4); expect(mdc(21, 14)).toBe(7); });
test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); expect(mmc(4, 6)).toBe(12); expect(mmc(3, 5)).toBe(15); });
test('33. deve verificar que um número é primo', () => { expect(isPrimo(2)).toBe(true); expect(isPrimo(3)).toBe(true); expect(isPrimo(5)).toBe(true); expect(isPrimo(7)).toBe(true); expect(isPrimo(11)).toBe(true); expect(isPrimo(13)).toBe(true); });
test('33.1. trata não-primos', () => { expect(isPrimo(0)).toBe(false); expect(isPrimo(1)).toBe(false); expect(isPrimo(4)).toBe(false); expect(isPrimo(6)).toBe(false); expect(isPrimo(8)).toBe(false); expect(isPrimo(9)).toBe(false); expect(isPrimo(10)).toBe(false); expect(isPrimo(15)).toBe(false); expect(isPrimo(-5)).toBe(false); });
test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(0)).toBe(0); expect(fibonacci(1)).toBe(1); expect(fibonacci(5)).toBe(5); expect(fibonacci(10)).toBe(55); });
test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); expect(produtoArray([5, 2])).toBe(10); expect(produtoArray([1, 2, 3, 4])).toBe(24); });
test('35.1. produtoArray - deve retornar 1 para array vazio', () => { expect(produtoArray([])).toBe(1); });
test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); expect(clamp(7, 0, 10)).toBe(7); expect(clamp(3, 0, 10)).toBe(3); });
test('36.1. limitar min', () => { expect(clamp(-5, 0, 10)).toBe(0); expect(clamp(-100, 0, 10)).toBe(0); expect(clamp(-1, 0, 10)).toBe(0); });
test('36.2. limitar max', () => { expect(clamp(15, 0, 10)).toBe(10); expect(clamp(100, 0, 10)).toBe(10); expect(clamp(11, 0, 10)).toBe(10); });
test('36.3. trata limites', () => { expect(clamp(0, 0, 10)).toBe(0); expect(clamp(10, 0, 10)).toBe(10); });
test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); expect(isDivisivel(15, 5)).toBe(true); expect(isDivisivel(100, 10)).toBe(true); expect(isDivisivel(7, 1)).toBe(true); });
test('37.1. trata não-divisíveis', () => { expect(isDivisivel(10, 3)).toBe(false); expect(isDivisivel(7, 2)).toBe(false); expect(isDivisivel(13, 5)).toBe(false); expect(isDivisivel(100, 7)).toBe(false); });
test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); expect(celsiusParaFahrenheit(100)).toBe(212); expect(celsiusParaFahrenheit(-40)).toBe(-40); expect(celsiusParaFahrenheit(37)).toBeCloseTo(98.6); });
test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); expect(fahrenheitParaCelsius(212)).toBe(100); expect(fahrenheitParaCelsius(-40)).toBe(-40); expect(fahrenheitParaCelsius(98.6)).toBeCloseTo(37); });
test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); expect(inverso(2)).toBe(0.5); expect(inverso(10)).toBe(0.1); });
test('40.1. tratra zeross', () => { expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.'); });

// === Testes para o Bloco 5 (41-50) ===
test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159, 3); expect(areaCirculo(0)).toBe(0); expect(areaCirculo(1)).toBeCloseTo(3.14159, 4); });
test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(10, 5)).toBe(50); expect(areaRetangulo(0, 10)).toBe(0); expect(areaRetangulo(7, 3)).toBe(21); });
test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(10, 5)).toBe(30); expect(perimetroRetangulo(0, 10)).toBe(20); expect(perimetroRetangulo(7, 3)).toBe(20); });
test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(5, 3)).toBe(true); expect(isMaiorQue(3, 5)).toBe(false); expect(isMaiorQue(5, 5)).toBe(false); });
test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 3)).toBe(false); expect(isMenorQue(3, 5)).toBe(true); expect(isMenorQue(5, 5)).toBe(false); });
test('46. deve verificar se dois números são iguais', () => { expect(isEqual(5, 5)).toBe(true); expect(isEqual(3, 5)).toBe(false); expect(isEqual(5, 3)).toBe(false); });
test('47. deve calcular a mediana de um array', () => { expect(medianaArray([1, 3, 3, 6, 7, 8, 9])).toBe(6); expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); expect(medianaArray([7, 8, 3, 1, 2])).toBe(3); });
test('48. deve dobrar um número', () => { expect(dobro(2)).toBe(4); expect(dobro(-5)).toBe(-10); expect(dobro(0)).toBe(0); });
test('49. deve triplicar um número', () => { expect(triplo(2)).toBe(6); expect(triplo(-5)).toBe(-15); expect(triplo(0)).toBe(0); });
test('50. deve retornar a metade de um número', () => { expect(metade(2)).toBe(1); expect(metade(-4)).toBe(-2); expect(metade(0)).toBe(0); });
});