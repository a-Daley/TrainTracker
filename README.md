## Train Tracker
Keep up with the latest updates from NYC's MTA without having to check Twitter.

## Tech/framework used
Includes Node.js, Express.js, React Native, Redux.js, Expo, Twitter API, Twilio Api

## Screenshots
### Home Screen
![Home Screen](https://user-images.githubusercontent.com/22922907/63554564-e04d8680-c50b-11e9-8395-0bb2740873a1.jpeg)
### Texts
![Texts](https://user-images.githubusercontent.com/22922907/63554576-f22f2980-c50b-11e9-9cf3-fdc0c0341ba6.jpeg)
### Trains
![Trains](https://user-images.githubusercontent.com/22922907/63554595-05da9000-c50c-11e9-9bf9-e6b737db00fc.jpeg)

## Installation
To run this project locally:

- Open two terminal windows
- In the first window, run the expo server:
  - `npm install`
  - `npm start`
- In the second window, run the local Express server:
  - `npm run local`
  
(Note: Don't forget to create your own secrets file with your own Twitter API information (`key`, `secretKey`, `accessToken`, `accessSecret`) as well as your own Twilio API informationm (`twilioSID`, `twilionToken`, `twilioNum`) and your own IP address as the `serverURL`.

## How to use?
To start, pick the train line you want to get the latest updates on or navigate to the text tab to send yourself an update.


## License
MIT © April Daley
