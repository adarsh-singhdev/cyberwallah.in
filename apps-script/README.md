# Google Sheets Integration Setup

Use this with your React feedback form that already sends data to your Apps Script URL.

## 1) Add script code
- Open Apps Script from the same spreadsheet.
- Replace your `Code.gs` content with the code in `apps-script/Code.gs` from this project.

## 2) Deploy as Web App
- Click **Deploy** → **New deployment**.
- Type: **Web app**.
- Execute as: **Me**.
- Who has access: **Anyone**.
- Deploy and copy the `/exec` URL.

## 3) Ensure sheet headers in row 1
Headers should be:
1. timestamp
2. name
3. email
4. age
5. phone
6. location
7. score
8. total question

## 4) Test from your website
- Open your site.
- Complete the quiz.
- Fill feedback form and submit.
- Check Sheet1: a new row should appear.

## 5) Optional direct test (without website)
Run this in terminal:

curl -X POST "YOUR_EXEC_URL" \
  -H "Content-Type: application/json" \
  -d '{"name":"Adarsh","email":"adarsh@example.com","age":"24","phone":"","location":"Kolkata","score":8,"totalQuestion":10}'

Then refresh the sheet and verify one new row.

## Troubleshooting
- If no row appears, re-deploy after script changes.
- Confirm deployment access is **Anyone**.
- Confirm the tab name is exactly **Sheet1**.
- Confirm your React app URL points to the latest deployed `/exec` URL.
