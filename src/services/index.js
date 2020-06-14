import axios from 'axios'

let Service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000
})

var auth = {}

const isAuth = () =>{
    auth = {'Authorization' : 'Bearer ' + localStorage.getItem('token')}
}

let Posts = {
    async getAll(){
        return new Promise (async (resolve, reject)=>{
            try{
                let response = await Service.get('/')
                let data = response.data;
                resolve(
                    data.map(post => ({
                        ...post
                    }))
                );
            }catch(err){
                reject(err)
            }
        })
    },

    async getPostById(id){
        return new Promise (async (resolve, reject)=>{
            try{
                let response = await Service.get('/objava/' + id)
                let data = response.data;
                resolve(data);
            }catch(err){
                reject(err)
            }
        })
    },

    async addNew(data){
        isAuth()
            try{
                let axiosConfig = {
                    headers: {
                        'Authorization': auth['Authorization']
                    }
                  };
                return await Service.post('/nova-objava', data, axiosConfig)
            }catch(err){
                throw err.response;
            }
    }
}

let User = {
 async register(form){
     try{
         return await Service.post('/registracija', form)
     } catch (err){
         throw err.response;
     }
 },

 async Prijava(form){
     try {
         return await Service.post('/prijava', form)
     }catch(err){
         throw err.response;
     }
 },

 async Profil(){
     isAuth()
     try{
         let axiosConfig = {
            headers: {
                'Authorization': auth['Authorization']
            }
          };
         return await Service.get('/profil', axiosConfig)
     }catch(err){
         throw err.response;
     }
 },

 async PromjenaLozinke(email){
    try{
        const res = await Service.post('/promjena-lozinke', {email})
        console.log('res', res);
        return res;
    }catch(err){
        console.log('error', err)
        throw err.response;

    }
 },

 async ObrisiProfil(){
     isAuth()
     try{
        return await Service.delete('/obrisi-profil', {auth})
     }catch(err){
        throw err.response;
     }
 },

 async GetUsernameById(id){
    return new Promise (async (resolve, reject)=>{
        try{
            let response = await Service.get('/korisnik/' + id)
            let data = response.data;
            resolve(data);
        }catch(err){
            reject(err)
        }
    })
}
}
// const url = 'http://localhost:3000'

// //https://www.youtube.com/watch?v=X-JZ-QPApUs
// class Posts{
//     static getAll(){
//         return new Promise(async (resolve, reject)=>{
//             try{
//                 const res = await axios.get(url);
//                 const data = res.data;
//                 resolve(
//                     data.map(post => ({
//                         ...post,
//                         createdAt: new Date(post.createdAt)
//                     }))
//                 );
//             }catch(err){
//                 reject(err)
//             }
//         })
//     }

//     static createPost(){
//         return axios.post(url)
//     }

//     static deletePost(id){
//         //return axios.delete();
//     }
// }

// class CitiesService{
//     static getCities(){
//         return new Promise(async (resolve,reject)=>{
//             try{
//                 const res = await axios.get(url);
//                 const city = res.city;
//                 resolve(
//                     city.map(gradovi => ({
//                         ...gradovi
//                     }))
//                 )
//             }catch(err){
//                 reject(err)
//             }
//         })
//     }
// }


// export {PostService, CitiesService};
// //vezano uz backend
// let Service = axios.create({
//     baseURL: 'http://localhost:3000',
//     timeout: 1000
// })

// //vezano uz pojedinu rutu
// let Posts = {
//     // async getAll(){
//     //     let response = await Service.get('')
//     //     let data = response.data
//     //     data = data.map(doc => {

//     //         return{
//     //             grad: doc.grad, 
//     //             cijena: doc.cijena
//     //         }
//     //     })
//     //     return data
//     // }

//     async getAll(){
//                     try{
//                         let response = await Service.get('');
//                         let data = response.data;
                        
//                         data = data.map(post => {
//                             return{
//                                 ...post,
//                                 createdAt: new Date(post.createdAt)
//                             }
//                             })
//                     }catch(err){
//                         reject(err)
//                     }
//                 }
            
// }
export {  Service, Posts, User, auth }