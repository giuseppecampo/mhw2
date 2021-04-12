const boxs = document.getElementById("box");
const boxs2 = document.getElementById("box1");
const preferito= document.getElementById("preferito");
preferito.style.display="";
const modalView1 = document.querySelector("#box1");


function createbox(elemento, inizio, fine){
    for(let i=inizio;i<fine;i++){ 
        const a =document.createElement("div");
        const h1= createTitle(contenuti[i].tipo);
        a.appendChild(h1);
        const img= createImg(contenuti[i].immagine, 400 ,400);
        a.appendChild(img);
        const button =createbutton(contenuti[i]);
        a.appendChild(button);
        const description= createDescription(contenuti[i].descrizione);
        a.appendChild(description);
        const tasto =creatprefer(i);
        a.appendChild(tasto);
        description.style.display="none";
        button.addEventListener("click", ()=>{
          button.style.display="none";
          description.style.display="block";
        });
        description.addEventListener("click", ()=>{
          description.style.display="none";  
          button.style.display="block";});
    elemento.appendChild(a);
  }
}
var o=0;

function creatprefer(i){
  const bottone=document.createElement("button");
  bottone.setAttribute("id","preferiti"+i);
  bottone.innerText= "Preferiti";
  console.log(i);
  bottone.addEventListener("click", event=>{
    const oggetto ={
      titolo: contenuti[i].tipo,
      immagine: contenuti[i].immagine,
       }
    o++;
    const divfiglio = document.createElement("div");
    divfiglio.setAttribute("id","divfiglio");
    const img= createImg(oggetto.immagine, 400,400);
    const titolo= document.createElement("h1");
    titolo.innerText=oggetto.titolo;
    const rimozione=document.createElement("button");
    rimozione.innerText= "Rimuovi";
    rimozione.addEventListener("click", event=>{    
      divfiglio.removeChild(img);     
      divfiglio.removeChild(titolo);   
      o--;   
      rimozione.style.display="none"; 
      bottone.style.display="";   
    });       
    divfiglio.appendChild(img);   
    divfiglio.appendChild(titolo); 
    divfiglio.appendChild(rimozione);
    preferito.appendChild(divfiglio);
    rimozione.style.display="";  
    bottone.style.display="none";
  });
  return bottone;
}


function createbutton(testo){
    const p = document.createElement("p");
    p.innerText = "Mostra dettagli";
    return p;
}
function createDescription(testo){
    const p = document.createElement("p");
    p.innerText = testo;
    return p;
}
function createTitle(testo){
    const h1 = document.createElement("h1");
    h1.innerText = testo;
    return h1;
}
function createImg(src, width, height){
    const img = document.createElement("img");
   img.setAttribute("src",src);
   img.setAttribute("width",width);
   img.setAttribute("height",height);
    return img;
}
function search()
{   var input; 
    var filtro;
    var lista;
    var voci;
    var x;
    var z;
    var i;
    var testo;
      input = document.getElementById("fattore");
      filtro = input.value.toUpperCase();
      lista = document.getElementById("box");
      voci = lista.getElementsByTagName("h1");
      img = lista.getElementsByTagName("img");
      paragraph = lista.getElementsByTagName("p");
      button = lista.getElementsByTagName("p");
      tasto = lista.getElementsByTagName("p");
      lista1 = document.getElementById("box1");
      voci1 = lista1.getElementsByTagName("h1");
      img1 = lista1.getElementsByTagName("img");
      paragraph1 = lista1.getElementsByTagName("p");
      tasto1 = lista1.getElementsByTagName("p");
      button1 = lista1.getElementsByTagName("p");
      for (i = 0; i < voci.length; i++) {
        x = lista.getElementsByTagName("h1")[i];
        testo = x.textContent || x.innerText;
        if (testo.toUpperCase().indexOf(filtro) > -1) {
            voci[i].style.display = "";
          console.log("trovato");          
        } else {   
          console.log("non trovato");
          voci[i].style.display = "none";  
          img[i].style.display = "none"; 
          paragraph[i].style.display = "none"; 
         
          button[i].style.display = "none"; 
          tasto[i].style.display = "none"; 
        }
    }
        for (i = 0; i < voci1.length; i++) {
            z = lista1.getElementsByTagName("h1")[i];
            testo = z.textContent || z.innerText;
            if (testo.toUpperCase().indexOf(filtro) > -1) {
              console.log("trovato");         
            } else {
              console.log("non trovato");
              voci1[i].style.display = "none";  
              img1[i].style.display = "none"; 
              paragraph1[i].style.display = "none"; 
              button1[i].style.display = "none"; 
              tasto1[i].style.display = "none"; 
            }
      }
    
}
createbox(boxs,0,2);
createbox(boxs2,2,4);
