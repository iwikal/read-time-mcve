# How to reproduce

 - deploy functions
 - create a document in the `/test` collection
 - look in the functions logs.

You should get an error looking something like:
```
Error: Called 'readTime' on a local document
    at QueryDocumentSnapshot.get readTime [as readTime] (/srv/functions/node_modules/@google-cloud/firestore/build/src/document.js:277:19)
    at exports.readReadTime.functions.firestore.document.onWrite.change (/srv/functions/index.js:6:18)
    at cloudFunction (/srv/functions/node_modules/firebase-functions/lib/cloud-functions.js:131:23)
    at Promise.resolve.then (/srv/node_modules/@google-cloud/functions-framework/build/src/invoker.js:330:28)
    at process._tickCallback (internal/process/next_tick.js:68:7)
```
