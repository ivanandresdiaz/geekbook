const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

const container=document.querySelector('#container');
const firstItemElement=document.createElement('li');
firstItemElement.textContent=firstDogName;
const firstPictureElement=document.createElement('img');
firstPictureElement.src=firstDogImage;
container.append(firstItemElement);
container.append(firstPictureElement);

const secondItemElement=document.createElement('li');
secondItemElement.textContent=secondDogName;
const secondPictureElement=document.createElement('img');
secondPictureElement.src=secondDogImage;
container.append(secondItemElement);
container.append(secondPictureElement);

const thirdItemElement=document.createElement('li');
thirdItemElement.textContent=thirdDogName;
const thirdPictureElement=document.createElement('img');
thirdPictureElement.src=thirdDogImage;
container.append(thirdItemElement);
container.append(thirdPictureElement);