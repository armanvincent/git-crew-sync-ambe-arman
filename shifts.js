function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  if (hours <= 8) {
    return Math.round(hours * rate);
  }

  const regularPay = 8 * rate;
  const overtimeHours = hours - 8;
  const overtimeRate = rate * 1.5;
  const overtimePay = overtimeHours * overtimeRate;

  return Math.round(regularPay + overtimePay);
}

module.exports = { isValidShift, calculatePay };
