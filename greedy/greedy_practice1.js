// 잔돈 문제.(가장 적은)

function calcaulateChange(itemPrice, amountPaid) {
  let change = amountPaid - itemPrice;

  if (change < 0) {
    console.log("지불 금액이 부족");
    return;
  }

  const denominations = [50000, 10000, 5000, 1000, 500, 100, 50, 10];
  const changeResult = {};

  for (const denomination of denominations) {
    const count = Math.floor(change / denomination);

    if (count > 0) {
      changeResult[denomination] = count;
      change -= denomination * count;
    }
  }

  console.log("잔돈: ", changeResult);
}

calcaulateChange(2800, 5000);
