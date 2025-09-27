const { addDays, format } = require("date-fns");

function showDateOperations() {

    const now = new Date();
  console.log("🕒 Current date:", now);

  const futureDate = addDays(now, 5);

  const formatted = format(futureDate, "yyyy-MM-dd HH:mm:ss");

  console.log("📅 Date after 5 days:", formatted);
}

module.exports = showDateOperations;
