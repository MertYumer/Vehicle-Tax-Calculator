let ageFactors = [2.3, 1.5, 1.3, 1, 1.1];

let data = {
    "Blagoevgrad": {
        "Bansko": {
            "Cyrillic name": "Банско",
            "Euro category": [1.21, 1.21, 1.21, 1.07, 0.84, 0.62, 0.4, 0.4],
            "Power factor": [0.45, 0.6, 1.21, 1.35, 1.8, 2.3]
        },
        "Belitsa": {
            "Cyrillic name": "Белица",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.4, 0.6, 1.16, 1.29, 1.66, 2.16]
        },
        "Blagoevgrad": {
            "Cyrillic name": "Благоевград",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.9, 0.8, 0.6, 0.6],
            "Power factor": [0.34, 0.54, 1.1, 1.4, 1.8, 2.1]
        },
        "Gotse Delchev": {
            "Cyrillic name": "Гоце Делчев",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Kresna": {
            "Cyrillic name": "Кресна",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Petrich": {
            "Cyrillic name": "Петрич",
            "Euro category": [1.1, 1.1, 1.1, 1.1, 0.9, 0.65, 0.4, 0.4],
            "Power factor": [0.45, 0.55, 1.3, 1.4, 1.7, 2.4]
        },
        "Razlog": {
            "Cyrillic name": "Разлог",
            "Euro category": [1.2, 1.2, 1.2, 1.05, 0.9, 0.7, 0.6, 0.6],
            "Power factor": [0.45, 0.7, 1.4, 1.6, 1.95, 3]
        },
        "Sandanski": {
            "Cyrillic name": "Сандански",
            "Euro category": [1.4, 1.4, 1.4, 1.1, 1, 0.8, 0.6, 0.6],
            "Power factor": [0.45, 0.6, 1.21, 1.41, 1.7, 2.2]
        },
        "Satovcha": {
            "Cyrillic name": "Сатовча",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Simitli": {
            "Cyrillic name": "Симитли",
            "Euro category": [1.202, 1.202, 1.202, 1.053, 0.904, 0.705, 0.5, 0.5],
            "Power factor": [0.68, 1.08, 1.43, 1.41, 1.8, 2.3]
        },
        "Strumyani": {
            "Cyrillic name": "Струмяни",
            "Euro category": [1.1, 1.1, 1.1, 1, 1, 0.8, 0.6, 0.6],
            "Power factor": [0.45, 0.6, 1.17, 1.3, 1.6, 2.1]
        },
        "Yakoruda": {
            "Cyrillic name": "Якоруда",
            "Euro category": [1.25, 1.25, 1.25, 1.05, 0.9, 0.7, 0.5, 0.5],
            "Power factor": [0.5, 0.68, 1.38, 1.54, 1.6, 2.1]
        }
    },
    "Burgas": {
        "Aytos": {
            "Cyrillic name": "Айтос",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.4, 0.55, 1.1, 1.4, 1.8, 2.8]
        },
        "Burgas": {
            "Cyrillic name": "Бургас",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.65, 1.84, 2.4, 3.15]
        },
        "Sredets": {
            "Cyrillic name": "Средец",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.7, 0.8, 1.3, 1.5, 3, 3.5]
        },
        "Kameno": {
            "Cyrillic name": "Камено",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.44, 0.59, 1.21, 1.35, 1.6, 2.1]
        },
        "Karnobat": {
            "Cyrillic name": "Карнобат",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.48, 0.65, 1.32, 1.48, 2, 3]
        },
        "Malko Tarnovo": {
            "Cyrillic name": "Малко Търново",
            "Euro category": [1.1, 1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.6],
            "Power factor": [0.6, 0.8, 1.3, 1.5, 1.7, 2.1]
        },
        "Tsarevo": {
            "Cyrillic name": "Царево",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.7, 0.81, 1.65, 2.2, 3, 3.6]
        },
        "Nesebar": {
            "Cyrillic name": "Несебър",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.7, 0.4, 0.4],
            "Power factor": [0.52, 0.7, 1.43, 1.6, 1.8, 2.2]
        },
        "Pomorie": {
            "Cyrillic name": "Поморие",
            "Euro category": [1.2, 1.2, 1.2, 1.1, 0.9, 0.7, 0.5, 0.5],
            "Power factor": [0.6, 0.8, 1.6, 1.8, 2.4, 3.15]
        },
        "Ruen": {
            "Cyrillic name": "Руен",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.6, 0.8, 1.5, 1.6, 2, 3]
        },
        "Sozopol": {
            "Cyrillic name": "Созопол",
            "Euro category": [1.25, 1.25, 1.25, 1.05, 0.9, 0.7, 0.5, 0.5],
            "Power factor": [0.6, 0.8, 1.65, 1.8, 2.4, 3.1]
        },
        "Sungurlare": {
            "Cyrillic name": "Сунгурларе",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.55, 0.55, 1.65, 1.9, 2, 3]
        },
        "Primorsko": {
            "Cyrillic name": "Приморско",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.6, 0.8, 1.6, 1.8, 2.4, 3.1]
        }
    },
    "Varna": {
        "Avren": {
            "Cyrillic name": "Аврен",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Aksakovo": {
            "Cyrillic name": "Аксаково",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.4, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Beloslav": {
            "Cyrillic name": "Белослав",
            "Euro category": [1.25, 1.25, 1.25, 1.1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.5, 0.8, 1.4, 1.4, 1.6, 2.1]
        },
        "Byala": {
            "Cyrillic name": "Бяла",
            "Euro category": [1.1, 1.1, 1.1, 1, 1, 0.8, 0.6, 0.6],
            "Power factor": [0.6, 0.81, 1.5, 1.7, 2, 2.2]
        },
        "Varna": {
            "Cyrillic name": "Варна",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.95, 1.28, 1.57, 1.76, 1.9, 2.1]
        },
        "Vetrino": {
            "Cyrillic name": "Ветрино",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.7, 0.5, 0.5],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Valchi dol": {
            "Cyrillic name": "Вълчи дол",
            "Euro category": [1.2, 1.2, 1.2, 1.05, 0.85, 0.7, 0.5, 0.5],
            "Power factor": [0.5, 0.6, 1.15, 1.3, 1.65, 2.15]
        },
        "Devnya": {
            "Cyrillic name": "Девня",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Dolni chiflik": {
            "Cyrillic name": "Долни чифлик",
            "Euro category": [1.1, 1.1, 1.1, 1, 1, 0.8, 0.6, 0.6],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Dalgopol": {
            "Cyrillic name": "Дългопол",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.52, 0.7, 1.43, 1.6, 2.1, 4]
        },
        "Provadia": {
            "Cyrillic name": "Провадия",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.4, 0.8, 1.65, 1.8, 1.85, 2.15]
        },
        "Suvorovo": {
            "Cyrillic name": "Суворово",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        }
    },
    "Veliko Tarnovo": {
        "Veliko Tarnovo": {
            "Cyrillic name": "Велико Търново",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.9, 0.8, 0.6, 0.6],
            "Power factor": [0.34, 0.54, 1.5, 1.9, 2, 2.1]
        },
        "Gorna Oryahovitsa": {
            "Cyrillic name": "Горна Оряховица",
            "Euro category": [1.15, 1.15, 1.15, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.6, 0.79, 1.6, 1.8, 1.9, 2.1]
        },
        "Elena": {
            "Cyrillic name": "Елена",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.4, 0.54, 1.2, 1.4, 1.6, 2.1]
        },
        "Zlataritsa": {
            "Cyrillic name": "Златарица",
            "Euro category": [1.1, 1.1, 1.1, 1.05, 0.9, 0.7, 0.5, 0.5],
            "Power factor": [0.6, 0.81, 1.65, 1.85, 2.4, 3.15]
        },
        "Lyaskovets": {
            "Cyrillic name": "Лясковец",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.54, 0.73, 1.49, 1.66, 1.75, 2.1]
        },
        "Pavlikeni": {
            "Cyrillic name": "Павликени",
            "Euro category": [1.2, 1.2, 1.2, 1.05, 0.9, 0.8, 0.6, 0.6],
            "Power factor": [0.7, 0.85, 1.25, 1.35, 2.2, 2.5]
        },
        "Polski Trambesh": {
            "Cyrillic name": "Полски Тръмбеш",
            "Euro category": [1.2, 1.2, 1.2, 1, 0.9, 0.8, 0.6, 0.6],
            "Power factor": [0.7, 0.85, 1.3, 1.45, 1.9, 2.4]
        },
        "Svishtov": {
            "Cyrillic name": "Свищов",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.44, 0.7, 1.43, 1.6, 2.08, 2.73]
        },
        "Strazhica": {
            "Cyrillic name": "Стражица",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.5, 0.7, 1.4, 1.55, 1.7, 2.17]
        },
        "Suhindol": {
            "Cyrillic name": "Сухиндол",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        }
    },
    "Vidin": {
        "Belogradchik": {
            "Cyrillic name": "Белоградчик",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Boynitsa": {
            "Cyrillic name": "Бойница",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Bregovo": {
            "Cyrillic name": "Брегово",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Vidin": {
            "Cyrillic name": "Видин",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Gramada": {
            "Cyrillic name": "Грамада",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Dimovo": {
            "Cyrillic name": "Димово",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Kula": {
            "Cyrillic name": "Кула",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Makresh": {
            "Cyrillic name": "Макреш",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Novo selo": {
            "Cyrillic name": "Ново село",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Ruzhintsi": {
            "Cyrillic name": "Ружинци",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Chuprene": {
            "Cyrillic name": "Чупрене",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        }
    },
    "Vratsa": {
        "Borovan": {
            "Cyrillic name": "Борован",
            "Euro category": [1.2, 1.2, 1.2, 1, 0.9, 0.7, 0.5, 0.5],
            "Power factor": [0.6, 0.81, 1.25, 1.85, 1.85, 2.1]
        },
        "Byala Slatina": {
            "Cyrillic name": "Бяла Слатина",
            "Euro category": [1.2, 1.2, 1.2, 1, 0.9, 0.7, 0.5, 0.5],
            "Power factor": [0.6, 0.81, 1.25, 1.85, 1.85, 2.1]
        },
        "Vratsa": {
            "Cyrillic name": "Враца",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Kozloduy": {
            "Cyrillic name": "Козлодуй",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.9, 0.7, 0.5, 0.5],
            "Power factor": [0.46, 0.62, 1.27, 1.41, 1.84, 2.42]
        },
        "Krivodol": {
            "Cyrillic name": "Криводол",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Mezdra": {
            "Cyrillic name": "Мездра",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Mizia": {
            "Cyrillic name": "Мизия",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.9, 0.7, 0.5, 0.5],
            "Power factor": [0.44, 0.66, 1.43, 1.59, 1.8, 2.3]
        },
        "Oryahovo": {
            "Cyrillic name": "Оряхово",
            "Euro category": [1.15, 1.15, 1.15, 1, 0.9, 0.7, 0.5, 0.5],
            "Power factor": [0.6, 0.8, 1.65, 1.85, 2.4, 3.15]
        },
        "Roman": {
            "Cyrillic name": "Роман",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Hayredin": {
            "Cyrillic name": "Хайредин",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        }
    },
    "Gabrovo": {
        "Gabrovo": {
            "Cyrillic name": "Габрово",
            "Euro category": [1.3, 1.3, 1.3, 1.1, 0.9, 0.6, 0.4, 0.4],
            "Power factor": [0.54, 0.74, 1.3, 1.43, 1.8, 2.3]
        },
        "Sevlievo": {
            "Cyrillic name": "Севлиево",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.6, 0.8, 1.3, 1.8, 2.3, 2.8]
        },
        "Tryavna": {
            "Cyrillic name": "Трявна",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        }
    },
    "Dobrich": {
        "Dobrich": {
            "Cyrillic name": "Добрич",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.56, 0.76, 1.54, 1.72, 1.8, 2.1]
        },
        "Balchik": {
            "Cyrillic name": "Балчик",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Kavarna": {
            "Cyrillic name": "Каварна",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.4, 0.6, 1.24, 1.38, 1.8, 2.35]
        },
        "Krushari": {
            "Cyrillic name": "Крушари",
            "Euro category": [1.1, 1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.6],
            "Power factor": [0.6, 0.8, 1.6, 1.8, 2.3, 3.1]
        },
        "Tervel": {
            "Cyrillic name": "Тервел",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.38, 0.6, 1.2, 1.3, 1.7, 2.2]
        },
        "Shabla": {
            "Cyrillic name": "Шабла",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        }
    },
    "Kardzhali": {
        "Ardino": {
            "Cyrillic name": "Ардино",
            "Euro category": [1.2, 1.2, 1.2, 1.05, 0.9, 0.7, 0.5, 0.5],
            "Power factor": [0.6, 0.8, 1.4, 1.5, 1.9, 2.4]
        },
        "Kirkovo": {
            "Cyrillic name": "Кирково",
            "Euro category": [1.1, 1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.6],
            "Power factor": [0.48, 0.65, 1.32, 1.48, 1.6, 2.1]
        },
        "Krumovgrad": {
            "Cyrillic name": "Крумовград",
            "Euro category": [1.1, 1.1, 1.1, 1.05, 0.9, 0.7, 0.5, 0.5],
            "Power factor": [0.5, 0.7, 1.4, 1.5, 1.6, 2.1]
        },
        "Kardzhali": {
            "Cyrillic name": "Кърджали",
            "Euro category": [1.2, 1.2, 1.2, 1.05, 0.95, 0.7, 0.6, 0.6],
            "Power factor": [0.65, 0.81, 1.38, 1.55, 2, 2.62]
        },
        "Momchilgrad": {
            "Cyrillic name": "Момчилград",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.7, 0.9, 1.45, 1.5, 1.6, 2.1]
        }
    },
    "Kyustendil": {
        "Kocherinovo": {
            "Cyrillic name": "Кочериново",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.9, 0.7, 0.5, 0.5],
            "Power factor": [0.6, 0.81, 1.6, 1.65, 2, 3]
        },
        "Kyustendil": {
            "Cyrillic name": "Кюстендил",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.44, 0.6, 1.21, 1.35, 1.6, 2.1]
        },
        "Nevestino": {
            "Cyrillic name": "Невестино",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.4, 0.6, 1.15, 1.3, 1.6, 2.1]
        },
        "Rila": {
            "Cyrillic name": "Рила",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.7, 0.9, 1.3, 1.7, 1.9, 2.2]
        },
        "Dupnitsa": {
            "Cyrillic name": "Дупница",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.9, 0.7, 0.5, 0.5],
            "Power factor": [0.4, 0.54, 1.1, 1.23, 1.6, 2.1]
        }
    },
    "Lovech": {
        "Apriltsi": {
            "Cyrillic name": "Априлци",
            "Euro category": [1.25, 1.25, 1.25, 1.05, 0.9, 0.7, 0.5, 0.5],
            "Power factor": [0.48, 0.76, 1.54, 1.72, 2.24, 2.94]
        },
        "Letnitsa": {
            "Cyrillic name": "Летница",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Lovech": {
            "Cyrillic name": "Ловеч",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.65, 1.84, 2.4, 3.15]
        },
        "Lukovit": {
            "Cyrillic name": "Луковит",
            "Euro category": [1.3, 1.3, 1.3, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.5, 0.7, 1.1, 1.23, 1.6, 2.1]
        },
        "Teteven": {
            "Cyrillic name": "Тетевен",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.5, 0.55, 1.15, 1.3, 1.6, 2.1]
        },
        "Troyan": {
            "Cyrillic name": "Троян",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.7, 0.6, 0.6],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Ugarchin": {
            "Cyrillic name": "Угърчин",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.41, 0.65, 1.32, 1.48, 1.92, 2.52]
        },
        "Yablanitsa": {
            "Cyrillic name": "Ябланица",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.45, 0.59, 1.15, 1.28, 1.6, 2.1]
        }
    },
    "Montana": {
        "Berkovitsa": {
            "Cyrillic name": "Берковица",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.9, 0.8, 0.6, 0.6],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Boychinovtsi": {
            "Cyrillic name": "Бойчиновци",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Brusartsi": {
            "Cyrillic name": "Брусарци",
            "Euro category": [1.2, 1.2, 1.2, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.6, 0.7, 1.1, 1.3, 1.6, 2.1]
        },
        "Valchedram": {
            "Cyrillic name": "Вълчедръм",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Varshets": {
            "Cyrillic name": "Вършец",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Georgi Damyanovo": {
            "Cyrillic name": "Георги Дамяново",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Lom": {
            "Cyrillic name": "Лом",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.4, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Medkovets": {
            "Cyrillic name": "Медковец",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Chiprovtsi": {
            "Cyrillic name": "Чипровци",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Yakimovo": {
            "Cyrillic name": "Якимово",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        }
    },
    "Pazardzhik": {
        "Belovo": {
            "Cyrillic name": "Белово",
            "Euro category": [1.3, 1.15, 1.15, 1.05, 0.9, 0.8, 0.6, 0.6],
            "Power factor": [0.34, 0.7, 1.43, 1.59, 1.8, 2.1]
        },
		"Pazardzhik": {
            "Cyrillic name": "Пазарджик",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.9, 0.8, 0.6, 0.6],
            "Power factor": [0.4, 0.54, 1.1, 2, 2, 2.1]
        },
		"Bratsigovo": {
            "Cyrillic name": "Брацигово",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.52, 0.7, 1.3, 1.5, 2, 2.5]
        },
		"Velingrad": {
            "Cyrillic name": "Велинград",
            "Euro category": [1.1, 1.1, 1.1, 1.05, 0.9, 0.7, 0.5, 0.5],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
		"Lesichovo": {
            "Cyrillic name": "Лесичово",
            "Euro category": [1.2, 1.2, 1.2, 1, 0.9, 0.7, 0.5, 0.5],
            "Power factor": [0.5, 0.6, 1.3, 1.4, 1.6, 2.1]
        },
		"Panagyurishte": {
            "Cyrillic name": "Панагюрище",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
		"Peshtera": {
            "Cyrillic name": "Пещера",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
		"Septemvri": {
            "Cyrillic name": "Септември",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.45, 0.56, 1.1, 1.23, 1.6, 2.1]
        },
		"Sarnitsa": {
            "Cyrillic name": "Сърница",
            "Euro category": [1.1, 1.1, 1.1, 1, 1, 0.8, 0.6, 0.6],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
		"Batak": {
            "Cyrillic name": "Батак",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        }
    },
    "Pernik": {
        "Breznik": {
            "Cyrillic name": "Брезник",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Kovachevtsi": {
            "Cyrillic name": "Ковачевци",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.6, 0.7, 1.4, 1.6, 2, 3]
        },
        "Pernik": {
            "Cyrillic name": "Перник",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.3, 1.54, 1.6, 2.1]
        },
        "Tran": {
            "Cyrillic name": "Трън",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        }
    },
    "Pleven": {
        "Pleven": {
            "Cyrillic name": "Плевен",
            "Euro category": [1.3, 1.2, 1.1, 1, 0.9, 0.7, 0.5, 0.5],
            "Power factor": [0.5, 0.65, 1.1, 1.4, 1.75, 2.25]
        },
        "Belene": {
            "Cyrillic name": "Белене",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Gulyantsi": {
            "Cyrillic name": "Гулянци",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.5, 0.6, 1.1, 1.5, 1.6, 2.1]
        },
        "Dolna Mitropoliya": {
            "Cyrillic name": "Долна Митрополия",
            "Euro category": [1.2, 1.2, 1.2, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.4, 1.6, 2.1]
        },
        "Dolni Dabnik": {
            "Cyrillic name": "Долни Дъбник",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Levski": {
            "Cyrillic name": "Левски",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Nikopol": {
            "Cyrillic name": "Никопол",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Iskar": {
            "Cyrillic name": "Искър",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.44, 0.64, 1.2, 1.33, 1.7, 2.2]
        },
        "Pordim": {
            "Cyrillic name": "Пордим",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        },
        "Cherven bryag": {
            "Cyrillic name": "Червен бряг",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.44, 0.59, 1.21, 1.35, 1.6, 2.1]
        },
        "Knezha": {
            "Cyrillic name": "Кнежа",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.46, 0.62, 1.26, 1.4, 2.2, 3.2]
        }
    },
    "Plovdiv": {
        "Plovdiv": {
            "Cyrillic name": "Пловдив",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.9, 0.8, 0.6, 0.6],
            "Power factor": [0.55, 0.77, 1.62, 1.9, 1.9, 2.1]
        }
    },
    "Razgrad": {
        "Razgrad": {
            "Cyrillic name": "Разград",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        }
    },
    "Ruse": {

    },
    "Silistra": {
        "Silistra": {
            "Cyrillic name": "Силистра",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.4, 0.62, 1.27, 1.41, 1.84, 2.42]
        }
    },
    "Sliven": {
        "Sliven": {
            "Cyrillic name": "Сливен",
            "Euro category": [1.1, 1.1, 1.1, 1, 1, 0.8, 0.6, 0.6],
            "Power factor": [0.34, 0.54, 1.36, 1.53, 2, 2.6]
        }
    },
    "Smolyan": {
        "Smolyan": {
            "Cyrillic name": "Смолян",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.1, 1.23, 1.6, 2.1]
        }
    },
    "Sofia": {
        "Stolichna": {
            "Cyrillic name": "Столична",
            "Euro category": [1.4, 1.4, 1.4, 1.1, 1, 0.6, 0.4, 0.4],
            "Power factor": [0.34, 0.54, 1.21, 1.42, 1.84, 2.42]
        }
    },
    "Sofia Region": {

    },
    "Stara Zagora": {
        "Stara Zagora": {
            "Cyrillic name": "Стара Загора",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.9, 0.7, 0.5, 0.5],
            "Power factor": [0.5, 0.7, 1.5, 1.7, 1.8, 2.2]
        }
    },
    "Targovishte": {
        "Targovishte": {
            "Cyrillic name": "Търговище",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.4, 0.6, 1.2, 1.3, 1.7, 2.2]
        }
    },
    "Haskovo": {
        "Haskovo": {
            "Cyrillic name": "Хасково",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.65, 0.65, 1.45, 1.8, 1.8, 2.1]
        }
    },
    "Shumen": {
        "Shumen": {
            "Cyrillic name": "Шумен",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.5, 0.65, 1.35, 1.5, 2, 2.5]
        }
    },
    "Yambol": {
        "Yambol": {
            "Cyrillic name": "Ямбол",
            "Euro category": [1.1, 1.1, 1.1, 1, 0.8, 0.6, 0.4, 0.4],
            "Power factor": [0.56, 0.75, 1.54, 1.72, 2, 3]
        }
    }
};

function calculateTax() {
    let taxForm = document.getElementById("taxForm");

    let region = document.getElementById("region").value;
    let municipality = document.getElementById("municipality").value;
    let ageIndex = parseInt(document.getElementById("age").value);
    let euroCategoryIndex = parseInt(document.getElementById("euroCategory").value);
    let power = parseInt(document.getElementById("power").value);
    let hpRadioButton = document.getElementById("hp");

    if (!power) {
        return alert("Моля, въведете мощността на превозното средство.");
    }

    if (power <= 0) {
        return alert("Моля, въведете число за мощност, което е положително.");
    }

    if (hpRadioButton.checked) {
        power = Math.round(power * 0.73549875);
    }

    let town = data[region][municipality];
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

    let tax = power * powerFactor * ageFactor * euroCategoryFactor;

    let resultTextElement = document.getElementById("resultText");
    resultTextElement.textContent = `Вашият данък е ${tax.toFixed(2)}лв.`;

    taxForm.style.display = "none";
    resultTextElement.parentNode.style.display = "block";
}

function displayForm(e) {
    let resultTextElement = document.getElementById("resultText");
    resultTextElement.textContent = "";
    e.target.parentNode.style.display = "none";

    let taxForm = document.getElementById("taxForm");
    taxForm.style.display = "block";
}

function changeInputFieldDefaultValue(e) {
    let input = document.getElementById("power");

    if (e.target.value === "kW") {
        input.defaultValue = 74;
    } else {
        input.defaultValue = 100;
    }
}

function changeSelectOptions(e) {
    let region = e.target.value;
    let selectElement = document.getElementById("municipality");
    selectElement.innerHTML = "";

    for (let municipality in data[region]) {
        let option = document.createElement("option");
        option.value = municipality;
        option.textContent = data[region][municipality]["Cyrillic name"];
        selectElement.appendChild(option);
    }
}