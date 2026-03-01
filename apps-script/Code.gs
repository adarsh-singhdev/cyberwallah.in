const SHEET_NAME = 'Sheet1';

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: 'Apps Script is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      return jsonResponse({ ok: false, error: 'Sheet not found: ' + SHEET_NAME });
    }

    const payload = parsePayload(e);

    const timestamp = payload.timestamp || new Date().toISOString();
    const name = payload.name || '';
    const email = payload.email || '';
    const age = payload.age || '';
    const phone = payload.phone || '';
    const location = payload.location || '';
    const score = payload.score || '';
    const totalQuestion = payload.totalQuestion || payload['total question'] || '';

    sheet.appendRow([
      timestamp,
      name,
      email,
      age,
      phone,
      location,
      score,
      totalQuestion,
    ]);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error) });
  }
}

function parsePayload(e) {
  if (!e) return {};

  // Body payload from fetch POST
  if (e.postData && e.postData.contents) {
    const raw = e.postData.contents;
    try {
      return JSON.parse(raw);
    } catch (_) {
      // If not JSON, continue and try parameters
    }
  }

  // Fallback to URL/form parameters
  return e.parameter || {};
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
