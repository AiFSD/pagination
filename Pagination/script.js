const table = document.querySelector('.table.table-bordered');
console.log(table); 

const paginationButtons = document.querySelectorAll('.buttons span');
const data = [
     {
      "id": "1",
      "name": "Lura Senger",
      "email": "Xander_Collier@yahoo.com"
    },
    {
      "id": "1",
      "name": "Lura Senger",
      "email": "Xander_Collier@yahoo.com"
    },
    {
      "id": "2",
      "name": "Wilburn Weber",
      "email": "Bennett_Kreiger11@yahoo.com"
    },
    {
      "id": "3",
      "name": "Tyrique Hahn",
      "email": "Juston.Altenwerth@yahoo.com"
    },
    {
      "id": "4",
      "name": "Lenny Bailey",
      "email": "Guiseppe_Hegmann@yahoo.com"
    },
    {
      "id": "5",
      "name": "Vladimir Keeling",
      "email": "Louisa_Walsh18@hotmail.com"
    },
    {
      "id": "6",
      "name": "Kellie Crona",
      "email": "Chandler_Abernathy@yahoo.com"
    },
    {
      "id": "7",
      "name": "Carolina White",
      "email": "Royal50@hotmail.com"
    },
    {
      "id": "8",
      "name": "Alfredo Conn",
      "email": "Clarabelle34@hotmail.com"
    },
    {
      "id": "9",
      "name": "Stan Shanahan",
      "email": "Lamar.McClure@hotmail.com"
    },
    {
      "id": "10",
      "name": "Marvin Fay",
      "email": "Osbaldo58@hotmail.com"
    },
    {
      "id": "11",
      "name": "Torrance Rau",
      "email": "Orin45@gmail.com"
    },
    {
      "id": "12",
      "name": "Harold Gutmann MD",
      "email": "Alyce.Stracke37@yahoo.com"
    },
    {
      "id": "13",
      "name": "Taryn Torphy",
      "email": "Dean_Breitenberg71@hotmail.com"
    },
    {
      "id": "14",
      "name": "Bryana Lang",
      "email": "Tatum.Ullrich@yahoo.com"
    },
    {
      "id": "15",
      "name": "Nyasia Green DDS",
      "email": "Dino83@gmail.com"
    },
    {
      "id": "16",
      "name": "Nasir Gerhold",
      "email": "Lilian_Bashirian8@hotmail.com"
    },
    {
      "id": "17",
      "name": "Raymundo Ritchie PhD",
      "email": "Antwan.Schoen15@yahoo.com"
    },
    {
      "id": "18",
      "name": "Delmer Marvin",
      "email": "Kiera62@yahoo.com"
    },
    {
      "id": "19",
      "name": "Rachel Wilkinson",
      "email": "Foster_Conroy@gmail.com"
    },
    {
      "id": "20",
      "name": "Gladys Howell",
      "email": "Constance.Labadie10@yahoo.com"
    },
    {
      "id": "21",
      "name": "Ciara Klocko",
      "email": "Harvey76@yahoo.com"
    },
    {
      "id": "22",
      "name": "Quentin O'Kon",
      "email": "Amely_Cummings2@yahoo.com"
    },
    {
      "id": "23",
      "name": "Ms. Gabriella Kunde",
      "email": "Lorenza_Cummerata@hotmail.com"
    },
    {
      "id": "24",
      "name": "Gerald Reilly",
      "email": "Lia_Konopelski@gmail.com"
    }
];


function generateTableRows(data) {
  return data.map(item => `
    <tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.email}</td>
    </tr>
  `).join('');
}


function renderTable(data) {
  const tableRows = generateTableRows(data);
  table.innerHTML = `
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      ${tableRows}
    </tbody>
  `;
}


function handlePagination(event) {
  const button = event.target;
  const pageNumber = parseInt(button.textContent);
  const startIndex = (pageNumber - 1) * 5;
  const endIndex = startIndex + 5;
  const currentPageData = data.slice(startIndex, endIndex);
  renderTable(currentPageData);

  
  paginationButtons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}

paginationButtons.forEach(button => {
  button.addEventListener('click', handlePagination);
});


handlePagination({ target: paginationButtons[0] });


const firstButton = document.querySelector('#buttons span:first-child');
const lastButton = document.querySelector('#buttons span:last-child');
const nextButton = document.querySelector('#buttons span:nth-child(3)');
const previousButton = document.querySelector('#buttons span:nth-child(2)');

function handleFirstButton() {
  handlePagination({ target: paginationButtons[0] });
}
function handleLastButton() {
  const lastPageIndex = Math.ceil(data.length / 5);
  handlePagination({ target: paginationButtons[lastPageIndex - 1] });
}

function handleNextButton() {
  const currentPageIndex = Array.from(paginationButtons).indexOf(document.querySelector('.buttons span.active'));
  if (currentPageIndex < paginationButtons.length - 1) {
    handlePagination({ target: paginationButtons[currentPageIndex + 1] });
  }
}

function handlePreviousButton() {
  const currentPageIndex = Array.from(paginationButtons).indexOf(document.querySelector('.buttons span.active'));
  if (currentPageIndex > 0) {
    handlePagination({ target: paginationButtons[currentPageIndex - 1] });
  }
}
firstButton.addEventListener('click', handleFirstButton);
lastButton.addEventListener('click', handleLastButton);
nextButton.addEventListener('click', handleNextButton);
previousButton.addEventListener('click', handlePreviousButton);
