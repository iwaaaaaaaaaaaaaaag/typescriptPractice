const names: Array<string> = ['Max', 'Manuel'];

const promise: Promise<string> = new Promise((resolve)=> {
    setTimeout(() => {
        resolve('終わりました！');
    }, 2000)
})

promise.then(data =>{
    data.split(' ')
} )