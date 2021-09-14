

const WebAPI = "https://api.github.com/users/dayinta84";
const promiseFecth = () => {
    fetch(WebAPI)
    .then((responsive) => {
        if (responsive.ok) {
            return responsive.json();
        } else {
            throw new Error(responsive.status);
        }
    })

    .then((result) => {
        console.log('*****Mengambil data API menggunakan fetch() dengan Promise*****');
        console.log('Seluruh data dari github user : ');
        console.log(result);
        console.log('Beberapa dari github user : ');
        console.log('1. Nama = ' + result.nama);
        console.log('2. Alamat = ' + result.location);
        console.log('3. Repositori Publik = ' + result.publik_repos);
        console.log('-------------------------------------------------------');
    })

    .catch((error) => {
        console.error(error);
    })
}


async function ambilData(){
    let a = await fetch(WebAPI)
    a = await a.json()

    console.log("mengambil data API menggunakan fatch() dengan asynch / await");
    console.log("seluruh data dari github users : ");
    console.log(a);
    console.log("beberapa data dari github users :");
    console.log("1. nama = "  + a.name);
    console.log('2. alamat = ' + a.location);
    console.log('3. repositori publik = ' + a.public_repos);
    console.log("--------------------------------------------------------------------------");
}

ambilData()
promiseFecth()