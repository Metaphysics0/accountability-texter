# accountability-texter

## Developing

Once you've created a project and installed dependencies with `npm install`

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

# How it works:

1. after a user signs up, we store a simple document of their transaction in a mongo collection
   The document will look like this:

```javascript
interface IUser {
  id: BSON::ObjectId(...),
  purchaseDate: new Date().now,
  purchaserLocation: { lat, lng ...}, // the location of the purchaser
  goal: string,
  goalTargetDate: Date(),
  messageFrequency: 1 | 2 | 3,
  phoneNumber: number
}
```

2. A cloudflare worker function runs every hour, grabs the collection of all users, and calls twilio to send the message to all the relevant recipients
   The worker function grabs the whole mongo collection, and checks if they fall into the relative time frame of the current worker's location.
   If so, we trigger a twilio message to the users's phone number

i.e.

```javascript
worker.ts;

async function sendMessageToAllUsers() {
	const relevantUsers = db.users.where({
		goalTargetDate: {
			lessThan: now
		}
	});

	relevantUsers.forEach(sendMessageToUser);
}

async function sendMessageToUser(user: IUser) {
	const phoneNumber = user.phoneNumber;
	twilioClient.sendSms({
		to: phoneNumber,
		from: TWILIO_FROM_PHONE_NUMBER,
		body: createMessageFromGoal(user.goal)
	});
}
```
