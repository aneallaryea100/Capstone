const featureSpeaker = [
  {
    name: 'Thomas Jacks',
    intros: 'lLorem ipsum dolor sit amet consectetur adipisicing elit.',
    unders: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempore pariatur perspiciatis',
    images: 'asset/image/eddd.png',
    behindz: 'asset/image/behind.jpg',
  },
  {
    name: 'Mr.Bean',
    intros: 'lLorem ipsum dolor sit amet consectetur adipisicing elit.',
    unders: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempore pariatur perspiciatis',
    images: 'asset/image/bean.png',
    behindz: 'asset/image/behind.jpg',
  },
  {
    name: 'Samuel Aristotle',
    intros: 'lLorem ipsum dolor sit amet consectetur adipisicing elit.',
    unders: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempore pariatur perspiciatis',
    images: 'asset/image/bubble.jfif',
    behindz: 'asset/image/behind.jpg',
  },
  {
    name: 'Mr. Ed',
    intros: 'lLorem ipsum dolor sit amet consectetur adipisicing elit.',
    unders: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempore pariatur perspiciatis',
    images: 'asset/image/ed.jfif',
    behindz: 'asset/image/behind.jpg',
  },
  {
    name: 'Mr. Edd',
    intros: 'lLorem ipsum dolor sit amet consectetur adipisicing elit.',
    unders: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempore pariatur perspiciatis',
    images: 'asset/image/edd.jfif',
    behindz: 'asset/image/behind.jpg',
  },
  {
    name: 'Mr. Edd',
    intros: 'lLorem ipsum dolor sit amet consectetur adipisicing elit.',
    unders: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempore pariatur perspiciatis',
    images: 'asset/image/mse.jpg',
    behindz: 'asset/image/behind.jpg',
  },
];

const speaker = document.getElementById('speaker');

const createTemplate = (obj) => {
  const firstDiv = document.createElement('div');
  firstDiv.setAttribute('class', 'firstdiv');
  const imageDiv = document.createElement('div');
  firstDiv.appendChild(imageDiv);
  imageDiv.setAttribute('class', 'imagedivz');
  const behindimg = document.createElement('img');
  imageDiv.appendChild(behindimg);
  behindimg.setAttribute('class', 'behindimg');
  behindimg.setAttribute('src', obj.behindz);
  const imgsrc = document.createElement('img');
  imageDiv.appendChild(imgsrc);
  imgsrc.setAttribute('class', 'imgzz');
  imgsrc.setAttribute('src', obj.images);
  const stepdiv = document.createElement('div');
  firstDiv.appendChild(stepdiv);
  stepdiv.setAttribute('class', 'stepdiv');
  const nameSpeakers = document.createElement('h4');
  nameSpeakers.setAttribute('class', 'sspeakers');
  stepdiv.appendChild(nameSpeakers);
  nameSpeakers.innerHTML = obj.name;
  const txtDescribe = document.createElement('p');
  stepdiv.appendChild(txtDescribe);
  txtDescribe.setAttribute('class', 'txtdescribe');
  txtDescribe.innerHTML = obj.intros;
  const lasttxt = document.createElement('p');
  stepdiv.appendChild(lasttxt);
  lasttxt.setAttribute('class', 'lasttxt');
  lasttxt.innerHTML = obj.unders;

  return firstDiv;
};

featureSpeaker.forEach((k) => {
  speaker.appendChild(createTemplate(k));
});

const hambx = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const nav = document.querySelector('.navvme');
const navLink = document.querySelectorAll('.navlinksx');
// const allEsdd = document.querySelectorAll('.esdd');

/** **************hamburger actions****************** */
hambx.addEventListener('click', () => {
  nav.classList.add('show');
});

close.addEventListener('click', () => {
  nav.classList.remove('show');
});

navLink.forEach((element) => element.addEventListener('click', () => {
  nav.classList.remove('show');
}));