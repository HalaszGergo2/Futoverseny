import { FUTOK } from "./adatok.js";

const befutottVersenyzok = [];

// 1. feladat
function letrehozTablazat() {
    let txt = "<table>";
    for (let index = 0; index < FUTOK.length; index++) {
        txt += `
            <tr>
                <td>${FUTOK[index].nev}</td>
                <td>${FUTOK[index].nemzetiseg}</td>
                <td>${FUTOK[index].versenySzam}</td>
            </tr>`;
    }
    txt += `</table>`;
    return txt;
}
const tablaELEM = document.getElementById("feladat_1");
tablaELEM.innerHTML += letrehozTablazat(FUTOK);

// 2. feladat
function osszesit() {
    let maraton = 0;
    let felmaraton = 0;
    let km = 0;
    let txt = "";
    for (let index = 0; index < FUTOK.length; index++) {
        if(FUTOK[index].versenySzam === "maraton"){
            maraton += 1;
        }
        if(FUTOK[index].versenySzam === "félmaraton"){
            felmaraton += 1;
        }
        if(FUTOK[index].versenySzam === "10 km"){
            km += 1;
        }
    }
    txt += `félmaraton: ${felmaraton} db<br>
    maraton: ${maraton} db<br>
    10 km: ${km} db`
    return txt
}
const osszELEM  = document.getElementById("feladat_2");
osszELEM.innerHTML += osszesit(FUTOK)

// 3. feladat
function befutott() {
    
    const katttablaELEM = document.querySelectorAll("#feladat_1 tr")
    console.log(katttablaELEM)
    for (let index = 0; index < katttablaELEM.length; index++) {
        katttablaELEM[index].addEventListener("click", function(){
            console.log(katttablaELEM[index])
            tablabeELEM.innerHTML += `<tr>
            <td>${FUTOK[index].nev}</td>
            <td>${FUTOK[index].versenyIdo}</td>
            <td>${FUTOK[index].nemzetiseg}</td>
            </tr>`
        })
    }
   
}
const tablabeELEM = document.querySelectorAll("#feladat_3")[0]
befutott()

// 4. feladat
function torolEsemeny() {

}

// 5. feladat
function ellenoriz(){
  
}