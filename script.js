function resultsdiv() {
  let resultsdiv = document.getElementById('result');
  //   resultsdiv.style.height = '300px';
  //   resultsdiv.style.marginBottom = '20px';
  //   resultsdiv.style.transition = 'all 0.5s';
  //   document.getElementById('backimage').style.transform = 'translateY(0)';

  let idno = document.getElementById('deliveryid').value;

  if (deliveryAgents[idno]) {
    resultsdiv.style.height = '300px';
    resultsdiv.style.marginBottom = '20px';
    resultsdiv.style.transition = 'all 0.5s';
    document.getElementById('backimage').style.transform = 'translateY(0)';
    let agent = deliveryAgents[idno];
    resultsdiv.innerHTML = `<div class="row1" id="row1">
    <img src="assets/${agent.image}"  class="deliveryimage"></img>
    <div class="row1info">
      <div class="id">ID: ${idno}</div>
      <div class="name">${agent.name}</div>
    </div>
  </div>
  <div class="row2" id="row2">
    <div class="restaurant">From - ${agent.restaurant}</div>
    <div class="hostel">To - ${agent.hostel}</div>
    <div class="dob">DOB - ${agent.dob}</div>
  </div>`;
  } else {
    resultsdiv.style.height = '120px';
    resultsdiv.style.marginBottom = '20px';
    resultsdiv.style.transition = 'all 0.5s';
    document.getElementById('backimage').style.transform = 'translateY(0)';
    resultsdiv.innerHTML = `<p class='not'>This Driver is not associated with us </p>`;
  }
  let row2 = document.getElementById('row2');
  let row1 = document.getElementById('row1');
  row1.style.display = 'flex';
  row2.style.display = 'flex';
}

const deliveryAgents = {
  12345: {
    name: 'Abhishek Jain',
    image: 'john-doe.jpg',
    restaurant: 'Abhishek Restaurant',
    hostel: "Men's Hostel",
    dob: '2004-19-02',
  },
  12346: {
    name: 'Shaurya Gupta',
    image: 'john-doe.jpg',
    restaurant: 'Shaurya Restaurant',
    hostel: "Men's Hostel",
    dob: '2004-01-01',
  },
  12347: {
    name: 'Ronak jain',
    image: 'john-doe.jpg',
    restaurant: 'ABC Restaurant',
    hostel: "Men's Hostel",
    dob: '1990-01-01',
  },

  12348: {
    name: 'Souvik Mahanta',
    image: 'john-doe.jpg',
    restaurant: 'ABC Restaurant',
    hostel: "Men's Hostel",
    dob: '1990-01-01',
  },
  12349: {
    name: 'Rounak Taparia',
    image: 'john-doe.jpg',
    restaurant: 'ABC Restaurant',
    hostel: "Men's Hostel",
    dob: '1990-01-01',
  },
  12344: {
    name: 'Aryan Yadav',
    image: 'john-doe.jpg',
    restaurant: 'ABC Restaurant',
    hostel: "Men's Hostel",
    dob: '1990-01-01',
  },

  // Add more entries as needed
};
