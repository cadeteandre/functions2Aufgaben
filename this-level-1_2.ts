const person = {
    vorname: 'Anton',
    nachname: 'Fish',
    alter: 34,
    familienstand: 'ledig',
    groesse: 1.78,
    zeigeProfil: function () {
        return `
            <p>Name: ${person.vorname} ${person.nachname}</p>  
            <p>Alter: ${person.alter}</p> 
            <p>Köpergröße: ${person.groesse}</p> 
            <p>Familienstand: ${person.familienstand}</p> 
        `;
    }
};

const person2 = {
    vorname: 'Peter',
    nachname: 'Parker',
    alter: 18,
    familienstand: 'ledig',
    groesse: 1.78,
    zeigeProfil: () => {
        return `
            <p>Name: ${person2.vorname} ${person2.nachname}</p>  
            <p>Alter: ${person2.alter}</p> 
            <p>Köpergröße: ${person2.groesse}</p> 
            <p>Familienstand: ${person2.familienstand}</p> 
        `;
    }
};

const personElement = document.getElementById("person") as HTMLElement;
personElement.innerHTML = `
    ${person.zeigeProfil()}
    ${person2.zeigeProfil()}
`;