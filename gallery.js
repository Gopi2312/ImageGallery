let arr = [
    {image:"images/abdhur.jpg" , alt:"Abdur-Image",desc:"ABDUR RAHMAN"},
    {image:"images/ANANTHULA RANJITH KUMAR- Id Photo.jpg" , alt:"Ranjith-Image",desc:"RANJITH"},
    {image:"images/Aravindhan K L-ID Photo.jpg" , alt:"Kl-Image",desc:"ARAVINDHAN"},
    {image:"images/Arun Prabu S-ID Photo.jpg" , alt:"Arun-Image",desc:"ARUN"},
    {image:"images/Arunachalam Muthuvel-ID photo.jpg" , alt:"Arunachalam-Image",desc:"ARUNACHALAM"},
    {image:"images/Bhaargavi N-ID Photo.jpg" , alt:"Bhaargavi-Image",desc:"BHAARGAVI"},
    {image:"images/Bhuvaneshwari K. -ID photo.jpg" , alt:"Bhuvaneshwari-Image",desc:"BHUVANESHWARI"},
    {image:"images/FASILA FIRTHOUS-Id Photo.png" , alt:"Fasila-Image",desc:"FASILA FIRTHOUS"},
    {image:"images/GANESH KUMAR S-ID Photo.jpg" , alt:"Ganesh-Image",desc:"GANESH"},
    {image:"images/GOPINATHAN G M-ID photo.jpg" , alt:"Gopi-Image",desc:"GOPI"},
    {image:"images/HARSHINI BASKER RAJA-ID Photo.JPG" , alt:"HARSHINI-Image",desc:"HARSHINI"},
    {image:"images/Janani S-ID photo.jpg" , alt:"Janani-Image",desc:"JANANI"},
    {image:"images/JeevaJothi - ID Photo.jpg" , alt:"JeevaJothi-Image",desc:"JEEVAJOTHI"},
    {image:"images/JEEVANANDAM KATHIRESAN-ID Photo.jpg" , alt:"JEEVANANDAM-Image",desc:"JEEVANANDAM"},
    {image:"images/JESINTH KUMAR SHANMUGAVELU- ID photo.jpg" , alt:"JESINTH-Image",desc:"JESINTH"},
    {image:"images/KAWIN KUMAR R-ID Photo.jpg" , alt:"KAWIN-Image",desc:"KAWIN"},
    {image:"images/KONDURU YASWANTH VARMA- ID photo.jpg" , alt:"YASWANTH-Image",desc:"YASWANTH"},
    {image:"images/MADASAMY P-ID photo.JPG" , alt:"MADASAMY-Image",desc:"MADASAMY"},
    {image:"images/MALLEBOINA VENKATA SUKUMAR-ID photo.jpg" , alt:"VENKATA-Image",desc:"VENKATA SUKUMAR"},
    {image:"images/Mariappan K-ID Photo.jpg" , alt:"Mariappan-Image",desc:"MARIAPPAN"},
    {image:"images/MOHANRAJ ANBUSELVAm-ID photo.jpg" , alt:"MOHANRAJ-Image",desc:"MOHANRAJ"},
    {image:"images/NITHISH KUMAR M-ID Photo.jpg" , alt:"NITHISH-Image",desc:"NITHISH"},
    {image:"images/NITIN SINGH R-ID Photo.JPG" , alt:"NITIN SINGH-Image",desc:"NITIN SINGH"},
    {image:"images/NIXON JOSHWA S-ID Photo.jpg" , alt:"NIXON-Image",desc:"NIXON"},
    {image:"images/PRASANNA KUMAR A-ID Photo.jpg" , alt:"PRASANNA-Image",desc:"PRASANNA"},
    {image:"images/RAGUL JEEVA RVS _ ID CARD Photo.jpg" , alt:"RAGUL-Image",desc:"RAGUL"},
    {image:"images/ROHITH R - iD card photo.jpg" , alt:"ROHITH-Image",desc:"ROHITH"},
    {image:"images/SARAN KUMAR-ID Photo.jpg" , alt:"SARAN KUMAR-Image",desc:"SARAN KUMAR"},
    {image:"images/SRINIVASAN K-ID Photo.jpg" , alt:"SRINIVASAN-Image",desc:"SRINIVASAN"},
    {image:"images/SUBHIKSHA B-ID Photo.jpg" , alt:"SUBHIKSHA-Image",desc:"SUBHIKSHA"},
    {image:"images/Thavasumoorthi-ID photo.jpg" , alt:"Thavasumoorthi-Image",desc:"THAVASU"},
    {image:"images/VIGNESH ARUMUGAM-Id Card Photo.png" , alt:"VIGNESH-Image",desc:"VIGNESH"},
    {image:"images/VINOTHKUMAR PUKALENTHI-ID Photo.jpeg" , alt:"VINOTHKUMAR-Image",desc:"VINOTHKUMAR"},
    
];
const render =()=>{
let show = "";
console.log("fop");
for(let i =0;i<arr.length;i++){
   show += "<div class='image'><img src='"+arr[i].image+"' alt="+arr[i].alt+" onclick='display("+i+")'><h3>"+arr[i].desc+"</h3></div>";
}
document.getElementById("container").innerHTML=show;
}

const display = (id)=>{
    let displayImage = "<div class = 'display-image'><img src='"+arr[id].image+"' alt="+arr[id].alt+"><p class ='cross' onclick='cancel()'>❌</p></div>";
    document.getElementById("image-container").style.display = "flex";
    document.getElementById("image-container").innerHTML = displayImage;
}

const cancel = ()=>{
    document.getElementById("image-container").style.display = "none";
}