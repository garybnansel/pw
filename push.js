var push = require('web-push')

let vapidKeys ={
    publicKey: 'BAS3MNAfMk5wljcZUZaSO3Z-sjii9pmMLlUWUFzJm1SDG19E13VP8bRK4BBQj_9ASMP8qt3xs4AGFFl2SX_0pGE',
    privateKey: 's50MM7ooXUhRv-BA3iRMH9YD9TvjQ9BZ0ruqNu9Obwo'
  }

  push.setVapidDetails('mailto:gary.b.nansel@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey)

  let sub ={endpoint:"https://fcm.googleapis.com/fcm/send/cq_jkvbJum8:APA91bEqVLl3fyesp7j6xYF_D85cUNpLv2au5H7mPBWENZn4RUHRmT2_T2zbda6XJLFKQ_0ij1ZRDInlCi4kSxs9R5fmuRwN_ELJPF0exFp3oS3b8nzJtVea_IoIzMY4NNZYX1oNi5wN",
  expirationTime:null,
  keys:{"p256dh":"BKvo5AsLg4qA3gdCb2czUhQQqlzg2S7kKY08rUN6Id2dUtcO0ZcQnJF5EpjOpbJPWdmV73cbLTColZnVmqeOV5U","auth":"B-R4GNjArEvDdHAp5uyuFA"}}
  push.sendNotification(sub, 'test mesage')