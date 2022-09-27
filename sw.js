let date = Date.now.toString()
const options={
    body: date
}
self.addEventListener('push',()=>{
    self.registration.sendNotification('test message',options);
});
