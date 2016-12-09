"use strict";
// Start mowing -> Pending
// Complete mowing -> Resolve
// Did not complete mowing -> Reject
let performUpload = function (imgStatus) {
    return new Promise((resolve) => {
        console.log(`Status: ${imgStatus}`);
        setTimeout(() => {
            resolve({ imgStatus: imgStatus });
        }, 1000);
    });
};
var upload;
var compress;
var transfer;
performUpload('uploading...')
    .then((res) => {
    upload = res;
    return performUpload('compressing...');
})
    .then((res) => {
    upload = res;
    return performUpload('transfering...');
})
    .then((res) => {
    upload = res;
    return performUpload('Image upload completed.');
});
//# sourceMappingURL=029_promises.js.map