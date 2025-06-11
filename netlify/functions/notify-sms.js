const twilio = require('twilio');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { lat, lng, type, description, user, timestamp } = JSON.parse(event.body);

    // Twilio credentials must be set as Netlify environment variables
    const accountSid = process.env.TWILIO_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const from = process.env.TWILIO_PHONE_NUMBER;
    const to = process.env.YOUR_PHONE_NUMBER;

    if (!accountSid || !authToken || !from || !to) {
      return {
        statusCode: 500,
        body: 'Missing Twilio environment variables.'
      };
    }

    const client = twilio(accountSid, authToken);

    const typeText = type === 'danger' ? '⚠️ Danger' : '🚗 Crash';

    let msg = `New ${typeText} mark at (${lat.toFixed(5)}, ${lng.toFixed(5)})`;
    if (description) msg += `\n"${description}"`;
    if (user) msg += `\nBy: ${user}`;
    if (timestamp) msg += `\nTime: ${new Date(timestamp).toLocaleString()}`;

    await client.messages.create({
      body: msg,
      from,
      to
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: 'Error sending SMS: ' + err.message
    };
  }
};