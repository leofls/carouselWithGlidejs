//quantidade de px de cada lado
var before = 130
var after = 130

//adicione o id da sua div no lugar de #options-peek
var glide = new Glide('#options-peek', {
    type: 'carousel',
    startAt: 1, //indica que vai iniciar do slide 1
    perView: 1, // quantidade por view
    peek: {
        before: before,
        after: after
    }
})

glide.mount()