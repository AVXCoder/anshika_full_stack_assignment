/*
  FairPlay Impact — app.js
  Shared utility functions.
  Core page logic is scoped within each page's own <script> block.
*/

// Shared: format a date string to locale
function formatDate(dateStr, locale = 'en-IN') {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString(locale, {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
  });
}

// Shared: get next 1st of next month
function getNextDrawDate() {
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return next.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}