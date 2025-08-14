//İsmi kullanıcıdan istemek.
myName = prompt("Lütfen isminizi giriniz.");
//Doom Elemanları olarak seçmek
document.getElementById("myName").textContent = myName;

function updateTime() {
    //Saat Eklene
    const now = new Date();
    //Local timeline yansıtma
    const time = now.toLocaleTimeString('tr-TR');
    //Doom ile elemana yansıtma
    document.getElementById("myClock").innerHTML = time;
    
    //Günleri sıralama 
    const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    // Gün isimlerini getDate ile Saatten çekme.
    const dayName = days[now.getDay()];
    // Doom ile elemanı yansıtma
    document.getElementById("myDay").innerHTML = dayName;
}
// funct. çağırma
updateTime();
//Gücelleme
setInterval(updateTime,1000);



