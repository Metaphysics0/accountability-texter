import { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } from '$env/static/private';
import { Twilio } from 'twilio';

export default new Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
