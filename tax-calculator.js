let ageFactors = [2.3, 1.5, 1.3, 1, 1.1];

let data = {
    "Sofia": {
        "Euro category": [1.4, 1.4, 1.4, 1.1, 1, 0.6, 0.4, 0.4],
        "Power factor": [0.34, 0.54, 1.21, 1.42, 1.84, 2.42]
    },
    "Blagoevgrad": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.9, 0.8, 0.6, 0.6],
        "Power factor": [0.34, 0.54, 1.1, 1.4, 1.8, 2.1]
    },
    "Burgas": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
        "Power factor": [0.34, 0.54, 1.65, 1.84, 2.4, 3.15]
    },
    "Varna": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
        "Power factor": [0.95, 1.28, 1.57, 1.76, 1.9, 2.1]
    },
    "Veliko Tarnovo": {},
    "Vidin": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
        "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
    },
    "Vraca": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
        "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
    },
    "Gabrobo": {},
    "Dobrich": {},
    "Kardzhali": {
        "Euro category": [1.2, 1.2, 1.2, 1.05, 0.95, 0.7, 0.6, 0.6],
        "Power factor": [0.65, 0.81, 1.38, 1.55, 2, 2.62]
    },
    "Kyustendil": {},
    "Lovech": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
        "Power factor": [0.34, 0.54, 1.65, 1.84, 2.4, 3.15]
    },
    "Montana": {},
    "Pazardzhik": {},
    "Pernik": {},
    "Pleven": {},
    "Plovdiv": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.9, 0.8, 0.6, 0.6],
        "Power factor": [0.55, 0.77, 1.62, 1.9, 1.9, 2.1]
    },
    "Razgrad": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
        "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
    },
    "Ruse": {},
    "Silistra": {},
    "Sliven": {
        "Euro category": [1.1, 1.1, 1.1, 1, 1, 0.8, 0.6, 0.6],
        "Power factor": [0.34, 0.54, 1.36, 1.53, 2, 2.6]
    },
    "Smolyan": {},
    "Stara Zagora": {},
    "Targovishte": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
        "Power factor": [0.4, 0.6, 1.2, 1.3, 1.7, 2.2]
    },
    "Haskovo": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
        "Power factor": [0.65, 0.65, 1.45, 1.8, 1.8, 2.1]
    },
    "Shumen": {},
    "Yambol": {},
};

function calculateTax(e) {
    let taxForm = document.getElementById("tax-form");
    let resultElement = document.querySelector("body > div > h1");

    if (e.target.value === "Направи друго изчисление") {
        e.target.value = "Изчисли";
        taxForm.style.display = "block";
        resultElement.style.display = "none";

    } else {
        let municipality = document.getElementById("municipality").value;
        let ageIndex = parseInt(document.getElementById("age").value);
        let euroCategoryIndex = parseInt(document.getElementById("euro-category").value);
        let powerInKW = parseInt(document.getElementById("power-in-kw").value);

        if (!powerInKW) {
            return alert("Моля, въведете мощността на превозното средство.");
        }

        let town = data[municipality];
        let ageFactor = ageFactors[ageIndex];
        let euroCategoryFactor = town["Euro category"][euroCategoryIndex];
        let powerFactor;

        if (powerInKW <= 55) {
            powerFactor = town["Power factor"][0];
        } else if (powerInKW > 55 && powerInKW <= 74) {
            powerFactor = town["Power factor"][1];
        } else if (powerInKW > 74 && powerInKW <= 110) {
            powerFactor = town["Power factor"][2];
        } else if (powerInKW > 110 && powerInKW <= 150) {
            powerFactor = town["Power factor"][3];
        } else if (powerInKW > 150 && powerInKW <= 245) {
            powerFactor = town["Power factor"][4];
        } else if (powerInKW > 245) {
            powerFactor = town["Power factor"][5];
        }

        taxForm.style.display = "none";
        let tax = powerInKW * powerFactor * ageFactor * euroCategoryFactor;

        resultElement.textContent = `Вашият данък е ${tax.toFixed(2)}лв.`;
        resultElement.style.display = "block";
        e.target.value = "Направи друго изчисление";
    }
}