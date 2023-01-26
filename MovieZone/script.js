//linking Api and Creating needed Links

const API_KEY='api_key=6d26349e05b72a13fcf014f9a674daf7';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const Img_url='https://image.tmdb.org/t/p/w500';
const search_url=BASE_URL+'/search/movie?'+API_KEY;

const main=document.getElementById("main");
const form=document.getElementById("form");
const search=document.getElementById("search");

getMovies(API_URL);

function getMovies(url){
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data){
    main.innerHTML=''
    data.forEach(movie => {
        const {title,poster_path,vote_average,overview}=movie;
        const movieEl=document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML= ` <img src="${Img_url+poster_path}" alt="${title}">

        <div class="movieinfo">
            <h3>${title}</h3>
            <span class="${getcolor(vote_average)}">${vote_average}</span>
        </div>

        <div class="overview">
            <h3>Overview</h3>
             ${overview}
        </div>
   `  
   main.appendChild(movieEl);
    });

}
function getcolor(vote_average){
    if(vote_average>=8){
        return 'green'
    }else if(vote_average>=5){
        return 'orange'
    }else
       return 'red'

}


form.addEventListener("submit",(e)=>{
    e.preventDefault(); 
    const searchName=search.value;

    if(searchName){
     getMovies(search_url+'&query='+searchName);
    }
})

