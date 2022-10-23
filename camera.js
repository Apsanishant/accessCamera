function accessCamera(id, error) {
    let webcam = document.getElementById(id);
   if(id != null){
    if(navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({video:true})
        .then(function(s){
            webcam.srcObject = s;
        })
    }else{
        console.log(error)
    }
   }

}