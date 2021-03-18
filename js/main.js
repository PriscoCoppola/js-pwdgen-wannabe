// Password Generator

// 1) Chiedi nome all'utente
// 2) Chiedi cognome all'utente
// 3) Chiedi colore preferito all'utente
// 4) Scrivi in HTML nomecognomecolorepreferito21

// 1)
var userName = prompt('Quale è il tuo nome?');
console.log(userName);

// 2)
var userSurname = prompt('Quale è il tuo cognome?');
console.log(userSurname);

// 3)
var userPreferedColor = prompt('Quale è il tuo colore preferito?')
console.log(userPreferedColor);

// 4)
document.getElementById('password').innerHTML = userName + userSurname + userPreferedColor + '21';