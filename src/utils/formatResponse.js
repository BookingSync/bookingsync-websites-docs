function formatPreciseDate(date) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const day = days[date.getUTCDay()];
  const dayOfMonth = String(date.getUTCDate()).padStart(2, '0');
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  
  return `${day}, ${dayOfMonth} ${month} ${year} ${hours}:${minutes}:${seconds}`;
}

function formatShortDate(date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
}

function updateTimestamps(obj) {
  const now = new Date();
  const created = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000); // 7 days ago
  const start = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000); // 14 days in future
  const end = new Date(start.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days after start
  const contract_updated = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000); // 2 days ago
  const balance_due = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days in future
  
  const traverse = (data) => {
    if (!data || typeof data !== 'object') return data;
    
    if (Array.isArray(data)) {
      return data.map(item => traverse(item));
    }
    
    const result = {};
    for (const [key, value] of Object.entries(data)) {
      if (key === 'created_at' && value === 'CREATED_AT') {
        result[key] = created.toISOString();
      } else if (key === 'paid_at' && value === 'CREATED_AT') {
        result[key] = created.toISOString();
      } else if (key === 'submitted_at' && value === 'SUBMITTED_AT') {
        result[key] = created.toISOString();
      } else if (key === 'expires_at' && value === 'EXPIRES_AT') {
        result[key] = now.toISOString();
      } else if (key === 'replied_at' && value === 'CREATED_AT') {
        result[key] = created.toISOString();
      } else if (key === 'published_at' && value === 'PUBLISHED_AT') {
        result[key] = created.toISOString();
      } else if (key === 'updated_at' && value === 'UPDATED_AT') {
        result[key] = now.toISOString();
      } else if ((key === 'start_at' || key === 'start_date') && (value === 'START_AT' || value === 'START_DATE')) {
        result[key] = start.toISOString().split('T')[0];
      } else if ((key === 'end_at' || key === 'end_date') && (value === 'END_AT' || value === 'END_DATE')) {
        result[key] = end.toISOString().split('T')[0];
      } else if ((key === 'start_at' || key === 'start_date'  ) && value === 'START_TIMESTAMP') {
        result[key] = `${formatPreciseDate(start)}.392265926 UTC +00:00`;
      } else if ((key === 'end_at' || key === 'end_date') && value === 'END_TIMESTAMP') {
        result[key] = `${formatPreciseDate(end)}.669825452 UTC +00:00`;
      } else if ((key === 'start_at' || key === 'start_date'  ) && value === 'START_SHORT_TIMESTAMP') {
        result[key] = formatShortDate(start);
      } else if ((key === 'end_at' || key === 'end_date') && value === 'END_SHORT_TIMESTAMP') {
        result[key] = formatShortDate(end);
      } else if (key === 'contract_updated_at' && value === 'CONTRACT_UPDATED_AT') {
        result[key] = formatShortDate(contract_updated);
      } else if (key === 'balance_due_at' && value === 'BALANCE_DUE_AT') {
        result[key] = formatShortDate(balance_due);
      } else if (value === 'BEGINNING_OF_MONTH') {
        // Get the 1st day of the month from created_at
        const firstDayOfMonth = new Date(created);
        firstDayOfMonth.setUTCDate(1);
        const year = firstDayOfMonth.getUTCFullYear();
        const month = String(firstDayOfMonth.getUTCMonth() + 1).padStart(2, '0');
        const day = '01';
        result[key] = `${year}-${month}-${day}`;
      } else if (typeof value === 'object') {
        result[key] = traverse(value);
      } else {
        result[key] = value;
      }
    }
    return result;
  };
  
  return traverse(obj);
}

export function formatResponse(response) {
  const updatedResponse = updateTimestamps(response);
  return JSON.stringify(updatedResponse, null, 2);
}
