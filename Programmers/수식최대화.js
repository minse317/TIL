function solution(expression) {
    let operatorsList = [
        ['*', '+', '-'],
        ['*', '-', '+'],
        ['+', '*', '-'],
        ['+', '-', '*'],
        ['-', '*', '+'],
        ['-', '+', '*'],
    ]

    let maxResult = 0

    for (let operators of operatorsList) {
        const travel = (expression = '', operators = []) => {
            if (operators.length === 0) {
                return expression
            }

            const slicedOperators= operators.slice()
            const operator = slicedOperators.shift()
            const operands = expression.split(operator)

            if (operands.length === 0) {
                return expression
            }

            let result = null

            for (let operand of operands) {
                let child = operator === '*' ? 1 : 0

                if (operand !== '') {
                    child = travel(operand, slicedOperators.slice())    
                }                

                if (child === '') {
                    child = operator === '*' ? 1 : 0
                }

                child = parseInt(child, 10)

                if (result === null) {
                    result = child
                    continue
                }

                if (operator === '*') {
                    result *= child
                }
                else if (operator === '+') {
                    result += child
                }
                else if (operator === '-') {
                    result -= child
                }
            }
            return result
        }
        let result = Math.abs(travel(expression, operators))

        maxResult = Math.max(maxResult, result)
    }
    return maxResult
}
