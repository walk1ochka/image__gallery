const url1 = 'https://api.unsplash.com/search/photos?query=';
const url2 = '&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
let codeWord = 'winter';
let imgNumber = 30;
let url = '';
const container = document.querySelector('.img__container');
const form = document.getElementById('inputForm');
const btnContainer = document.querySelector('.radio__container');

form.addEventListener('submit', e => {
  e.preventDefault();
  const target = e.target;
  const input = target.querySelector('#search');
  codeWord = input.value;
  input.value = "";
  getData(urlBuild(codeWord));
})

btnContainer.addEventListener('click', e => {
  e.stopPropagation();
  const target=e.target;
  const btnWhite = document.getElementById('white');
  const btnBlack = document.getElementById('black');
  if (target.classList.contains('btn__switch') && !target.classList.contains("btn__switch-active"))
  {
    btnWhite.classList.toggle('btn__switch-active');
    btnBlack.classList.toggle('btn__switch-active');
    changeTheme();
  }
})



async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    const results = data.results;
    container.innerHTML='';

    for (let i=0;i<imgNumber;i++) {
      if (results[i] === undefined)
        break
      showData(results[i]);
    };
  }

  getData(url = urlBuild(codeWord));


function changeTheme(){
  const items = document.querySelectorAll('.white, .black');
    items.forEach(element =>
      {
        element.classList.toggle('white');
        element.classList.toggle('black');
      })
}


function showData(el){
    const img=document.createElement('img');
    img.classList.add('img__item');
    img.src = `${el.urls.regular}`;
    container.append(img);
}

function urlBuild(word){ return url1+word+`&per_page=${imgNumber}`+url2;};



