// let name = [
//     {
//         f_name: 'Mohammad Amir',
//         profession: 'Best bowler of Pakistan Cricket Team',
//         img: './images.jpg',
//         para: "this m",
//     },
//     {
//         name: 'Babar Azam',
//         profession: 'Captain of Pakistan Cricket Team',
//         img: './image.jpg',
//         para:'Babar Azam was born on 15 October 1994 into a Punjabi Muslim family. He was born in the Walled City and recalls the memories of "playing cricket and roaming around like a free bird in those streets." His older cousins Kamran and Umar Akmal were the reason he was attracted to cricket, and their stories inspired him to take up cricket as his profession. He had been a ball boy at Gaddafi Stadium[11] before joining a cricket academy.'
//     },
//     {
//         name: "Imad Wasim",
//         profession: 'Best All-rounder of Pakistan cricket team',
//         img: './imad.jpg',
//         para: 'He made his Twenty20 International debut for Pakistan against Zimbabwe in Lahore on 24 May 2015.[11] He made his One Day International debut for Pakistan against Sri Lanka on 19 July 2015.[12] He was selected in the Pakistan squad for the 2016 ICC World Twenty20. Later in 2016, he became the 1st Pakistani spinner to take a 5-fer in T20Is as he recorded figures of 5/14 against the Windies.'

//     },
// ]
// // let l = name.length;
// console.log(name.length -1)



let name_first = document.querySelector('.name');
let profesion_first = document.querySelector('.profesion');
let para_first = document.querySelector('.para');
let main_img = document.querySelector('.main_img');
let first_btn = document.querySelector('.first_btn');
let second_btn = document.querySelector('.second_btn');
// console.log(main_img);
// console.log(first_btn);
// console.log(second_btn);
// console.log(name);
// console.log(profesion);
// console.log(para);
let overseas = [
    {
        img :"pic5.jpg",
        name: "Talha",
        profesion: "civil engineer",
        para: 'A good civil engineer is knowledgeable in the principles and practices of designing and constructing infrastructure and buildings that meet safety, environmental, and aesthetic standards. They possess excellent analytical, problem-solving, and communication skills, and are able to work collaboratively with a team of professionals to complete projects on time and within budget. Finally, they must uphold ethical and professional standards to ensure the safety and well-being of the public.'
    },
    {
        img: "pic2.jpg",
        name: " Ahemd Raza",
        profesion: "full-stack developer",
        para: 'A good full-stack developer beginner should have a strong foundation in web development fundamentals such as HTML, CSS, and JavaScript, as well as knowledge of server-side programming languages like Node.js and databases like MySQL or MongoDB. They should also possess good problem-solving skills, attention to detail, and a willingness to continuously learn and adapt to new technologies. Finally, they should be able to collaborate effectively with other developers and stakeholders to build robust and scalable web applications.',
    },
    {
        img : "pic1.jpg",
        name: "Muhammad Mutahir",
        profesion: "full-stack developer",
        para: 'A good full-stack developer beginner should have a strong foundation in web development fundamentals such as HTML, CSS, and JavaScript, as well as knowledge of server-side programming languages like Node.js and databases like MySQL or MongoDB. They should also possess good problem-solving skills, attention to detail, and a willingness to continuously learn and adapt to new technologies. Finally, they should be able to collaborate effectively with other developers and stakeholders to build robust and scalable web applications.',
    },

];

console.log(overseas);
let changingNumber = 0;
function retrun_overseas(add) {
let content = overseas[add];
main_img.src = content.img ;
name_first.textContent = content.name;
profesion_first.textContent = content.profesion;
para_first.textContent = content.para; 
    
    
}
first_btn.addEventListener('click',()=>{
changingNumber = ++changingNumber;
// console.log('Hi')
// console.log(changingNumber);
if (changingNumber < 0 || changingNumber > overseas.length - 1) {
changingNumber = 0;
}
retrun_overseas(changingNumber)
})
second_btn.addEventListener('click',()=>{
if (changingNumber<0) {
    changingNumber = overseas.length -1
    
}
retrun_overseas(changingNumber);
})































// function add(a,b,c) {
//     console.log('Mutahir' + a)
//     console.log('Mr' + b);
//     console.log(c)
    
// }
// add(" taha ",' talha'," Eshareeb");
