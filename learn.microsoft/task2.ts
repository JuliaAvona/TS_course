interface Loan {
  principal: number; //Основная сумма кредита.
  interestRate: number; //Годовая процентная ставка по кредиту. Например, 5 % указывается как 5.
}

interface ConventionalLoan extends Loan {
  months: number;
}
