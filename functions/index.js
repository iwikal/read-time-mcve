const functions = require('firebase-functions')

exports.readReadTime = functions.firestore
  .document('test/{docId}')
  .onWrite(change => {
    change.after.readTime
  })
