var push = require('web-push')

let vapidKeys ={
    publicKey: 'BAS3MNAfMk5wljcZUZaSO3Z-sjii9pmMLlUWUFzJm1SDG19E13VP8bRK4BBQj_9ASMP8qt3xs4AGFFl2SX_0pGE',
    privateKey: 's50MM7ooXUhRv-BA3iRMH9YD9TvjQ9BZ0ruqNu9Obwo'
  }

  push.setVapidDetails('mailto:gary.b.nansel@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey)

  let sub ={};
  push.sendNotification(sub, 'test mesage')