
function nextHoliday() {
  const now = new Date();

  const today = now.toDateString();

  const holidayName = "New Year";
  const holidayDate = new Date("2026-01-01T00:00:00");

  const diff = holidayDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return `
📅 Today is: ${today}
🎉 Next holiday: ${holidayName}
⏳ Time left: ${days} days, ${hours}:${minutes}:${seconds}
`;
}

module.exports = nextHoliday;
