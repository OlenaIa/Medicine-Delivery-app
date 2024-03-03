export const makeUniquePharmacies = (allMedicineArr) => {
  const pharmacies = allMedicineArr?.map(item => item.pharmacy);
  const uniquePharmacies = pharmacies.filter((item, index, array) =>
    array.indexOf(item) === index);
  return uniquePharmacies;
};

// Список ліків
const medicines = [
  "Aspirin",
  "Paracetamol",
  "Ibuprofen",
  "Amoxicillin",
  "Omeprazole",
  "Lisinopril",
  "Metformin",
  "Atorvastatin",
  "Simvastatin",
  "Losartan",
  "Amlodipine",
  "Gabapentin",
  "Warfarin",
  "Prednisone",
  "Metoprolol",
  "Azithromycin",
  "Hydrochlorothiazide",
  "Levothyroxine",
  "Furosemide",
  "Pantoprazole",
  "Albuterol",
  "Fluticasone",
  "Tramadol",
  "Ciprofloxacin",
  "Clonazepam",
  "Sertraline",
  "Escitalopram",
  "Diazepam",
  "Venlafaxine",
  "Duloxetine",
  "Mirtazapine",
  "Trazodone",
  "Lorazepam",
  "Citalopram",
  "Fluoxetine",
  "Quetiapine",
  "Olanzapine",
  "Risperidone",
  "Aripiprazole",
  "Haloperidol",
  "Loratadine",
  "Montelukast",
  "Clopidogrel",
  "Rosuvastatin",
  "Carvedilol",
  "Digoxin",
  "Diltiazem",
  "Bisoprolol",
  "Nifedipine"
];

// Функція генерації випадкового ID
export function generateID() {
  return Math.floor(Math.random() * 900) + 100;
}

// Функція генерації бази даних
function generateDatabase() {
  const database = [];
  for (let i = 0; i < 5; i++) {
    const pharmacyName = "Pharmacy " + (i + 1);
    const numMedicines = Math.floor(Math.random() * 6) + 5; // Випадкова кількість від 5 до 10
    for (let j = 0; j < numMedicines; j++) {
      const medicineName = medicines[Math.floor(Math.random() * medicines.length)];
      const imgURL = "https://www.volynpost.com/img/modules/articles/9/42/16af356f7dbc97e28f0c0d2fe8fa8429/top-photo.jpg"; // URL-заглушка
      const description = "Description of " + medicineName;
      const price = parseFloat((Math.random() * (50 - 5) + 5).toFixed(2));
      const id = generateID().toString();
      const entry = {
        pharmacy: pharmacyName,
        medicine: medicineName,
        img: imgURL,
        description: description,
        price: price,
        id: id
      };
      database.push(entry);
    }
  }
  return database;
}

// Генерація бази даних
const myDatabase = generateDatabase();

// Виведення результату у форматі JSON
// console.log(JSON.stringify(myDatabase, null, 2));
