const banderas = document.getElementById('banderas');
const query = new URLSearchParams(window.location.search);
const params = query.get('name');
console.log(params);

document.addEventListener('DOMContentLoaded', E =>{
    fetchData()
})

const fetchData = async () =>{
    try {
        const res = await fetch('data.json')
        const data = await res.json()
       
        const filtrodata = data.filter(item => item.name === params)

        banderillas(filtrodata)
        
    } catch (error) {
        console.log(error)
    }
}

const banderillas = data =>{
    let elementos =''
    data.forEach(item => {
        elementos +=`
        <article class="" style= "display: flex; width: 1000px; height: 370px" >
        <img src="${item.flag}" alt="" class="" style="width: 50%;">
        <div class="card-content" style="margin-left: 4rem;">
         <div style="display: grid;
         grid-template-columns: repeat(2, 1fr);
         gap: 20px;">
             <div>
                <h2>${item.name}</h3>
                <p>
                    <b>Native Name:</b>
                    ${item.nativeName}
                </p>
                <p>
                    <b>Population:</b>
                    ${item.population}
                </p>
                <p>
                    <b>Capital:</b>
                    ${item.capital}
                </p>
                <p>
                    <b>Region</b>
                    ${item.region}
                </p>
                <p>
                    <b>Sub Region</b>
                    ${item.subregion}
                </p>
            </div>
            <div>
                <p>
                    <b>Top level Domain:</b>
                    ${item.topLevelDomain}
                </p>
                <p>
                    <b>Currencies:</b>
                    ${item.currencies[0].name}
                </p>
                <p>
                    <b>Languages:</b>
                    ${item.languages[0].name}
                    
                </p>
                </div>

                <p>
                <b>Border countries:</b>
                <input type="text" value="${item.borders}">
                </p>
                
            </div>
        </div>
    </article>`
    });
    banderas.innerHTML = elementos;
    
}