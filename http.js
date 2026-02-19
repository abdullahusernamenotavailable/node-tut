const http = require('http')

const server = http.createServer((req , res)  =>{

    if (req.url === '/'){
        res.end('welcome')
    }

    else if (req.url === '/about'){
        res.setHeader('Content-Type' , 'text/html')
        res.end(`
            <button>pooop</button>
            <p>bruh get a life or sum</p>
        `)
    }

})

server.listen(5000)