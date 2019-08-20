const Express=require('express');
var app=new Express();
books=[
    {
        'title':'In search of Lost Time',
        'author':'Marcel Proust',
        'publisher':'HarperCollins',
        'date_of_publication':'1971',
        image:'/image/b1.jpg',
        'distributorName':'HarperCollins',
        'price':340,
        'Description':'Novel'


    },
    {
        title:"Don Quixote",
        author:"Miguel de Cervantes",
        publisher:"H&C Books",
        date_of_publication:"1940",
        image:'/image/b2.jpg',
        distributorName:"H&C Books",
        price:840,
        Description:"Real World story"

    },
    {
        title:"Ulysses",
        author:"James Joyces",
        publisher:"H&C Books",
        image:'/image/b3.jpg',
        date_of_publication:"1930",
        distributorName:"H&C Books",
        price:450,
        Description:"Story"
    },
    {
            title:"The Great Gatsby",
            author:"F.schoot",
            publisher:"Pearson",
            date_of_publication:"1959",
            distributorName:"H&C Books",
            price:740,
            image:'/image/b4.jpg',
            Description:'Novel'
    
    },
    {
            title:"MobyDick",
            author:"Herman Melville",
            publisher:"Pearson",
            date_of_publication:"1851",
            image:'/image/b5.jpg',
            distributorName:"H&C Books",
            price:200,
            Description:'AutoBiography'
    
        },
        {
            title:"Hamlet",
            author:"William Shakesphere",
            publisher:"pearson Books",
            date_of_publication:"1920",
            distributorName:"H&C Books",
            price:1090,
            Description:"Poems",
            image:'/image/b6.jpg'
        }];

    authors=[
        {
            AuthorName:'marcel proust',
            image: '/image/a.jpg',
            dob:'12-12-1870',
            place:'america'
        },
        {
            AuthorName:'Don Quixote',
            image:"/image/f.jpg",
            dob:'12-09-1870',
            place:'america'
        },
        {
            AuthorName:'James Joyces',
            image:"/image/b.jpg",
            dob:'10-09-1870',
            place:'europe'
        },{
            AuthorName:'F.schoot',
            image:"/image/c.jpg",
            dob:'10-09-1860',
            place:'singapore'
        },{
            AuthorName:'Herman Melville',
            image:"/image/d.jpg",
            dob:'1-09-1879',
            place:'new york'
        },{
            AuthorName:'William Shakesphere',
            image:"/image/e.jpg",
            dob:'11-03-1871',
            place:'london'
        },
    ];
nav=[{
    link:"/books",
    title:"books"

},
{
    
        link:"/authors",
        title:"authors"
},
{
        link:"/signup",
        title:"signUp"
},
{
    link:"/login",
    title:"login"
},

{
     link:"/addbooks",
     title:"add books"
}
];

app.set('view engine','ejs');
app.use(Express.static(__dirname+"/public"));
app.get('/',(req,res)=>{
    res.render('index',{nav:nav,title:"Library"});
});
app.get('/login',(req,res)=>
{
    res.render('login',{nav:nav,title:"Library"});
});
app.get('/signup',(req,res)=>
{
    res.render('signup',{nav:nav,title:"Library"});
});
app.get('/addbooks',(req,res)=>
{
    res.render('addbooks',{nav:nav,title:"Library"});
});
app.get('/index',(req,res)=>{
    res.render('index',{nav:nav,title:"Library"});
});
app.get('/books',(req,res)=>{
    res.render('books',{nav:nav,title:"Books",books:books});
});
app.get('/booksingle/:id',(req,res)=>{

    const x=req.params.id;
    res.render('booksingle',{nav:nav,title:"Books","books":books[x]});
});
app.get('/authors',(req,res)=>{
    res.render('authors',{nav:nav,title:"Authors",authors:authors});
});
app.get('/authorsingle/:id',(req,res)=>{

    const x=req.params.id;
    res.render('authorsingle',{nav:nav,title:"Authors","authors":authors[x]});
});

app.listen(process.env.PORT || 3000,()=>
{
    
});