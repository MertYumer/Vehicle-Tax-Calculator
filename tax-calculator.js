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
    "Veliko Tarnovo": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.9, 0.8, 0.6, 0.6],
        "Power factor": [0.34, 0.54, 1.5, 1.9, 2, 2.1]
    },
    "Vidin": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
        "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
    },
    "Vraca": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
        "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
    },
    "Gabrobo": {
        "Euro category": [1.3, 1.3, 1.3, 1.1, 0.9, 0.6, 0.4, 0.4],
        "Power factor": [0.54, 0.74, 1.3, 1.43, 1.8, 2.3]
    },
    "Dobrich": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
        "Power factor": [0.56, 0.76, 1.54, 1.72, 1.8, 2.1]
    },
    "Kardzhali": {
        "Euro category": [1.2, 1.2, 1.2, 1.05, 0.95, 0.7, 0.6, 0.6],
        "Power factor": [0.65, 0.81, 1.38, 1.55, 2, 2.62]
    },
    "Kyustendil": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
        "Power factor": [0.44, 0.6, 1.21, 1.35, 1.6, 2.1]
    },
    "Lovech": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
        "Power factor": [0.34, 0.54, 1.65, 1.84, 2.4, 3.15]
    },
    "Montana": {},
    "Pazardzhik": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.9, 0.8, 0.6, 0.6],
        "Power factor": [0.4, 0.54, 1.1, 2, 2, 2.1]
    },
    "Pernik": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
        "Power factor": [0.34, 0.54, 1.3, 1.54, 1.6, 2.1]
    },
    "Pleven": {
        "Euro category": [1.3, 1.2, 1.1, 1, 0.9, 0.7, 0.5, 0.5],
        "Power factor": [0.5, 0.65, 1.1, 1.4, 1.75, 2.25]
    },
    "Plovdiv": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.9, 0.8, 0.6, 0.6],
        "Power factor": [0.55, 0.77, 1.62, 1.9, 1.9, 2.1]
    },
    "Razgrad": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
        "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
    },
    "Ruse": {},
    "Silistra": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
        "Power factor": [0.4, 0.62, 1.27, 1.41, 1.84, 2.42]
    },
    "Sliven": {
        "Euro category": [1.1, 1.1, 1.1, 1, 1, 0.8, 0.6, 0.6],
        "Power factor": [0.34, 0.54, 1.36, 1.53, 2, 2.6]
    },
    "Smolyan": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
        "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
    },
    "Stara Zagora": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.9, 0.7, 0.5, 0.5],
        "Power factor": [0.5, 0.7, 1.5, 1.7, 1.8, 2.2]
    },
    "Targovishte": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
        "Power factor": [0.4, 0.6, 1.2, 1.3, 1.7, 2.2]
    },
    "Haskovo": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
        "Power factor": [0.65, 0.65, 1.45, 1.8, 1.8, 2.1]
    },
    "Shumen": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
        "Power factor": [0.5, 0.65, 1.35, 1.5, 2, 2.5]
    },
    "Yambol": {
        "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
        "Power factor": [0.56, 0.75, 1.54, 1.72, 2, 3]
    },
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
        let power = parseInt(document.getElementById("power").value);
        let hpRadioButton = document.getElementById("hp");

        if (!power) {
            return alert("Моля, въведете мощността на превозното средство.");
        }

        if (hpRadioButton.checked) {
            power = Math.round(power * 0.73549875);
        }

        let town = data[municipality];
        let ageFactor = ageFactors[ageIndex];
        let euroCategoryFactor = town["Euro category"][euroCategoryIndex];
        let powerFactor;

        if (power <= 55) {
            powerFactor = town["Power factor"][0];
        } else if (power > 55 && power <= 74) {
            powerFactor = town["Power factor"][1];
        } else if (power > 74 && power <= 110) {
            powerFactor = town["Power factor"][2];
        } else if (power > 110 && power <= 150) {
            powerFactor = town["Power factor"][3];
        } else if (power > 150 && power <= 245) {
            powerFactor = town["Power factor"][4];
        } else if (power > 245) {
            powerFactor = town["Power factor"][5];
        }

        taxForm.style.display = "none";
        let tax = power * powerFactor * ageFactor * euroCategoryFactor;

        resultElement.textContent = `Вашият данък е ${tax.toFixed(2)}лв.`;
        resultElement.style.display = "block";
        e.target.value = "Направи друго изчисление";
    }
}

function changeInputFieldDefaultValue(e) {
    let input = document.getElementById("power");

    if (e.target.value === "kW") {
        input.defaultValue = 66;
    } else {
        input.defaultValue = 90;
    }
}