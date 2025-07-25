const testimonials = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry." , "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." , "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." ,"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."];
const authors = ["Roland Weedon" , "Kelsi Gorden" , "Seth Gewirtz" , "Tasha Zuzalek"];
const imgUrl = "https://picsum.photos/200/300";

const author = document.querySelector('#author');
const testimonial = document.querySelector('#testimonials');
const image = document.querySelector('.image-container');
const imgArray = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/301",
    "https://picsum.photos/200/302",
    "https://picsum.photos/200/303"
]

let count = 0;


function changeTest() {
    author.textContent = authors[count];
    testimonial.textContent = testimonials[count];
    image.innerHTML = `<img src="${imgArray[count]}" alt="Person Image" id="image">`;
    count++;
    console.log(count);
    if (count > author.length) {
        count = 0;
    }
}
setInterval(changeTest , 4000);