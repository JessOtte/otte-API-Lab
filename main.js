
$(() => {
    $.get("https://www.reddit.com/r/aww/.json", (data) => {

    let img;
    let title;
    let permalink;

    $.each(data.data.children, (i) => {
       title =(data.data.children[i].data.title);
       img =(data.data.children[i].data.thumbnail);
       permalink = (data.data.children[i].data.permalink);
       box = (data.data.children[i]);


       let posts = $( '#post1, #post2, #post3, #post4, #post5, #post6, #post7, #post8, #post9, #post10');


       console.log(title, img, permalink);   

       $('.posts-container').append(`<h4 id="title-container">${title}</h4><div><a href="https://www.reddit.com/${permalink}"><img src="${img}"></img><br><div id="link-container">Link: ${permalink}</div><br></a></div>`);
       return i < 10;
    


    });






    
    });

});