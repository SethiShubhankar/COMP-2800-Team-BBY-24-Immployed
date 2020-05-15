const storageRef = firebase.storage().ref();
let postID = location.hash.substring(1);
let jobPost = db.collection("job_posts").doc(postID);
let applicantIDs = [];
let applicantLocation = [];


window.onload = function () {

    jobPost.get().then(function (doc) {
    
        applicantIDs = doc.data().applicants;

        document.getElementById("postTitle").innerHTML = doc.data().title;
        document.getElementById("postDescription").innerHTML = doc.data().description;
        document.getElementById("postAddress").innerHTML = doc.data().address;
        document.getElementById("postCity").innerHTML = doc.data().city;
        document.getElementById("postProvince").innerHTML = doc.data().province;
        document.getElementById("postPostalCode").innerHTML = doc.data().inputPostalCode;
        document.getElementById("payAmount").innerHTML = doc.data().payAmount;
        document.getElementById("payNegotiable").innerHTML = doc.data().payNegotiable;
    });
}
