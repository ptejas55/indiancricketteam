const food = [
  {
    id: 1,
    name: "Rohit Sharma",
    img: "batsman/rohit-sharma.jpg",
    Jersey_No: 45,
    cateogary: "BATSMAN",
    link: "https://www.cricbuzz.com/profiles/576/rohit-sharma",
  },
  {
    id: 2,
    name: "Suryakumar Yadav",
    img: "batsman/suryakumar-yadav.jpg",
    Jersey_No: 63,
    cateogary: "BATSMAN",
    link: "https://www.cricbuzz.com/profiles/7915/suryakumar-yadav",
  },
  {
    id: 3,
    name: "Shreyas Iyer",
    img: "batsman/shreyas-iyer.jpg",
    Jersey_No: 41,
    cateogary: "BATSMAN",
    link: "https://www.cricbuzz.com/profiles/9428/shreyas-iyer",
  },
  {
    id: 4,
    name: "Jasprit Bumrah",
    img: "Bowlers/jasprit-bumrah.jpg",
    Jersey_No: 93,
    cateogary: "BOWLERS",
    link: "https://www.cricbuzz.com/profiles/9311/jasprit-bumrah",
  },
  {
    id: 5,
    name: "Mohammed Shami",
    img: "Bowlers/mohammed-shami.jpg",
    Jersey_No: 11,
    cateogary: "BOWLERS",
    link: "https://www.cricbuzz.com/profiles/7909/mohammed-shami",
  },
  {
    id: 6,
    name: "Mohammed Siraj",
    img: "Bowlers/mohammed-siraj.jpg",
    Jersey_No: 13,
    cateogary: "BOWLERS",
    link: "https://www.cricbuzz.com/profiles/10808/mohammed-siraj",
  },
  {
    id: 7,
    name: "Ravindra Jadeja",
    img: "allrounders/ravindra-jadeja.jpg",
    Jersey_No: 8,
    cateogary: "ALL-Rounder",
    link: "https://www.cricbuzz.com/profiles/587/ravindra-jadeja",
  },
  {
    id: 8,
    name: "Yuzvendra Chahal",
    img: "Bowlers/yuzvendra-chahal.jpg",
    Jersey_No: 3,
    cateogary: "BOWLERS",
    link: "https://www.cricbuzz.com/profiles/7910/yuzvendra-chahal",
  },
  {
    id: 9,
    name: "Umesh Yadav",
    img: "Bowlers/umesh-yadav.jpg",
    Jersey_No: 19,
    cateogary: "BOWLERS",
    link: "https://www.cricbuzz.com/profiles/1858/umesh-yadav",
  },
  {
    id: 9,
    name: "Ishant Sharma",
    img: "Bowlers/ishant-sharma.jpg",
    Jersey_No: 97,
    cateogary: "BOWLERS",
    link: "https://www.cricbuzz.com/profiles/702/ishant-sharma",
  },
  {
    id: 10,
    name: "Deepak Chahar",
    img: "Bowlers/deepak-chahar.jpg",
    Jersey_No: 90,
    cateogary: "BOWLERS",
    link: "https://www.cricbuzz.com/profiles/7836/deepak-chahar",
  },
  {
    id: 11,
    name: "Bhuvneshwar Kumar",
    img: "Bowlers/bhuvneshwar-kumar.jpg",
    Jersey_No: 15,
    cateogary: "BOWLERS",
    link: "https://www.cricbuzz.com/profiles/1726/bhuvneshwar-kumar",
  },
  {
    id: 12,
    name: "Kuldeep Yadav",
    img: "Bowlers/kuldeep-yadav.jpg",
    Jersey_No: "23",
    cateogary: "BOWLERS",
    link: "https://www.cricbuzz.com/profiles/8292/kuldeep-yadav",
  },
  {
    id: 13,
    name: "Khaleel Ahmed",
    img: "Bowlers/khaleel-ahmed.jpg",
    Jersey_No: 27,
    cateogary: "BOWLERS",
    link: "https://www.cricbuzz.com/profiles/10952/k-khaleel-ahmed",
  },
  {
    id: 14,
    name: "Rahul Chahar",
    img: "Bowlers/rahul-chahar.jpg",
    Jersey_No: 28,
    cateogary: "BOWLERS",
    link: "https://www.cricbuzz.com/profiles/12087/rahul-chahar",
  },
  {
    id: 15,
    name: "Harshal Patel",
    img: "Bowlers/harshal-patel.jpg",
    Jersey_No: 73,
    cateogary: "BOWLERS",
    link: "https://www.cricbuzz.com/profiles/8175/harshal-patel",
  },
  {
    id: 16,
    name: "Arshdeep Singh",
    img: "Bowlers/arshdeep-singh.jpg",
    Jersey_No: 71,
    cateogary: "BOWLERS",
    link: "https://www.cricbuzz.com/profiles/13217/arshdeep-singh",
  },
  {
    id: 17,
    name: "Mayank Agarwal",
    img: "batsman/mayank-agarwal.jpg",
    Jersey_No: 16,
    cateogary: "BATSMAN",
    link: "https://www.cricbuzz.com/profiles/2195/mayank-agarwal",
  },
  {
    id: 18,
    name: "Virat Kohli",
    img: "batsman/virat-kohli.jpg",
    Jersey_No: 18,
    cateogary: "BATSMAN",
    link: "https://www.cricbuzz.com/profiles/1413/virat-kohli",
  },
  {
    id: 19,
    name: "Prithvi Shaw",
    img: "batsman/prithvi-shaw.jpg",
    Jersey_No: 100,
    cateogary: "BATSMAN",
    link: "https://www.cricbuzz.com/profiles/12094/prithvi-shaw",
  },
  {
    id: 20,
    name: "Ajinkya Rahane",
    img: "batsman/ajinkya-rahane.jpg",
    Jersey_No: 27,
    cateogary: "BATSMAN",
    link: "https://www.cricbuzz.com/profiles/1447/ajinkya-rahane",
  },
  {
    id: 21,
    name: "Shikhar Dhawan",
    img: "batsman/shikhar-dhawan.jpg",
    Jersey_No: 42,
    cateogary: "BATSMAN",
    link: "https://www.cricbuzz.com/profiles/1446/shikhar-dhawan",
  },
  {
    id: 22,
    name: "Shubman Gill",
    img: "batsman/shubman-gill.jpg",
    Jersey_No: 77,
    cateogary: "BATSMAN",
    link: "https://www.cricbuzz.com/profiles/11808/shubman-gill",
  },
  {
    id: 23,
    name: "Ruturaj Gaikwad",
    img: "batsman/ruturaj-gaikwad.jpg",
    Jersey_No: 5,
    cateogary: "BATSMAN",
    link: "https://www.cricbuzz.com/profiles/11813/ruturaj-gaikwad",
  },
  {
    id: 24,
    name: "Hardik Pandya",
    img: "allrounders/hardik-pandya.jpg",
    Jersey_No: 33,
    cateogary: "ALL-Rounder",
    link: "https://www.cricbuzz.com/profiles/9647/hardik-pandya",
  },
  {
    id: 25,
    name: "Axar Patel",
    img: "allrounders/axar-patel.jpg",
    Jersey_No: 20,
    cateogary: "ALL-Rounder",
    link: "https://www.cricbuzz.com/profiles/8808/axar-patel",
  },
  {
    id: 26,
    name: "Shardul Thakur",
    img: "allrounders/shardul-thakur.jpg",
    Jersey_No: 54,
    cateogary: "ALL-Rounder",
    link: "https://www.cricbuzz.com/profiles/8683/shardul-thakur",
  },
  {
    id: 27,
    name: "Krunal Pandya",
    img: "allrounders/krunal-pandya.jpg",
    Jersey_No: 24,
    cateogary: "ALL-Rounder",
    link: "https://www.cricbuzz.com/profiles/11311/krunal-pandya",
  },
  {
    id: 28,
    name: "Shivam Dube",
    img: "allrounders/shivam-dube.jpg",
    Jersey_No: 70,
    cateogary: "ALL-Rounder",
    link: "https://www.cricbuzz.com/profiles/11195/shivam-dube",
  },
  {
    id: 29,
    name: "Washington Sundar",
    img: "allrounders/washington-sundar.jpg",
    Jersey_No: 55,
    cateogary: "ALL-Rounder",
    link: "https://www.cricbuzz.com/profiles/10945/washington-sundar",
  },

  {
    id: 30,
    name: "Ravichandran Ashwin",
    img: "allrounders/ravichandran-ashwin.jpg",
    Jersey_No: 99,
    cateogary: "ALL-Rounder",
    link: "https://www.cricbuzz.com/profiles/1593/ravichandran-ashwin",
  },
  {
    id: 31,
    name: "Deepak Hooda",
    img: "allrounders/deepak-hooda.jpg",
    Jersey_No: 5,
    cateogary: "ALL-Rounder",
    link: "https://www.cricbuzz.com/profiles/9427/deepak-hooda",
  },
  {
    id: 32,
    name: "MS Dhoni",
    img: "wicketkeeper/dhoni.jpg",
    Jersey_No: 07,
    cateogary: "Wicket-Keeper",
    link: "https://www.cricbuzz.com/profiles/265/ms-dhoni",
  },
  {
    id: 33,
    name: "Rishabh Pant",
    img: "wicketkeeper/pant.jpg",
    Jersey_No: 17,
    cateogary: "Wicket-Keeper",
    link: "https://www.cricbuzz.com/profiles/10744/rishabh-pant",
  },
  {
    id: 34,
    name: "KL Rahul",
    img: "wicketkeeper/rahul.jpg",
    Jersey_No: 01,
    cateogary: "Wicket-Keeper",
    link:"https://www.cricbuzz.com/profiles/8733/lokesh-rahul",
  },
  {
    id: 35,
    name: "Ishan Kishan",
    img: "wicketkeeper/ishan-kishan.jpg",
    Jersey_No: 32,
    cateogary: "Wicket-Keeper",
    link: "https://www.cricbuzz.com/profiles/10276/ishan-kishan",
  },
  {
    id: 36,
    name: "Sanju Samson",
    img: "wicketkeeper/sanju-samson.jpg",
    Jersey_No: 14,
    cateogary: "Wicket-Keeper",
    link: "https://www.cricbuzz.com/profiles/8271/sanju-samson",
  },
  {
    id: 37,
    name: "Wriddhiman Saha",
    img: "wicketkeeper/wriddhiman-saha.jpg",
    Jersey_No: 6,
    cateogary: "Wicket-Keeper",
    link: "https://www.cricbuzz.com/profiles/1465/wriddhiman-saha",
  },
];

cateogaries = document.querySelector(".cateogaries");
container = document.querySelector(".container");

window.addEventListener("DOMContentLoaded", function () {
  filterMenu("ALL");

  var cat = food.reduce(
    function (values, items) {
      if (!values.includes(items.cateogary)) {
        values.push(items.cateogary);
      }
      return values;
    },
    ["ALL"]
  );
  var catBtn = cat.map(function (item) {
    return `<a href="#" class="ctitle ${item}">${item}</a>`;
  });
  var catBtns = catBtn.join("");
  cateogaries.innerHTML = catBtns;

  var button = document.getElementsByClassName("ctitle");
  for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", (e) => {
      var val = e.target.className.split(" ");
      filterMenu(val[1]);
    });
  }
});

function displayMenu(food) {
  var displayMenu = food.map(function (item) {
    return `<div class="items">
           <div class="img-conatiner"><a href=${item.link} target="_blank"><img src=./images/${item.img}
            alt="${item.title}" class="img"></a></div> 
             <div class="details">
                 <div class="title"><a href=${item.link} target="_blank">${item.name}</a></div>
                 <div class="Jersey_No">${item.Jersey_No}</div>
                </div>
            <div class="cateogary">${item.cateogary}</div>
        </div>`;
  });
  displayMenu = displayMenu.join("");
  container.innerHTML = displayMenu;
}

var lists = food.reduce(
  function (values, items) {
    if (!values.includes(items.cateogary)) {
      values.push(items.cateogary);
    }
    return values;
  },
  ["ALL"]
);

function filterMenu(cateogary) {
  var filter1 = food.filter(function (item) {
    if (item.cateogary === cateogary) {
      return item;
    }
  });
  if (cateogary === "ALL") {
    displayMenu(food);
  } else {
    displayMenu(filter1);
  }
}

// https://www.sportskeeda.com/cricket/indian-cricket-team-jersey-number
