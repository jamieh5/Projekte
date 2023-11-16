document.querySelector('.calculateTip').addEventListener('click', function () {
  const bill = document.querySelector('.moneyBeforeTip')
  const fivePercentTip = document.querySelector('.fivePercent')
  const tenPercentTip = document.querySelector('.tenPercent')
  const fifteenPercentTip = document.querySelector('.fifteenPercent')
  const twentyPercentTip = document.querySelector('.twentyPercent')

  const moneyAfterTip = document.querySelector('.moneyAfterTip')

  if (fivePercentTip.checked) {
    const tip =
      Math.round((Number(bill.value) * 0.05 + Number.EPSILON) * 100) / 100
    const totalBill = Number(bill.value) + tip
    const str = `Your total bill is $${totalBill} and your tip was $${tip}`
    moneyAfterTip.textContent = `${str}`
  } else if (tenPercentTip.checked) {
    const tip =
      Math.round((Number(bill.value) * 0.1 + Number.EPSILON) * 100) / 100
    const totalBill = Number(bill.value) + tip
    const str = `Your total bill is $${totalBill} and your tip was $${tip}`
    moneyAfterTip.textContent = `${str}`
  } else if (fifteenPercentTip.checked) {
    const tip =
      Math.round((Number(bill.value) * 0.15 + Number.EPSILON) * 100) / 100
    const totalBill = Number(bill.value) + tip
    const str = `Your total bill is $${totalBill} and your tip was $${tip}`
    moneyAfterTip.textContent = `${str}`
  } else if (twentyPercentTip.checked) {
    const tip =
      Math.round((Number(bill.value) * 0.2 + Number.EPSILON) * 100) / 100
    const totalBill = Number(bill.value) + tip
    const str = `Your total bill is $${totalBill} and your tip was $${tip}`
    moneyAfterTip.textContent = `${str}`
  }
})
