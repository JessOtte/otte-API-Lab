
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

       $('.posts-container').append(`<div id="box"><a href="https://www.reddit.com/${permalink}"><img src="${img}"></img>
       </a>
       <h4>${title}</h4>
       <a href="https://www.reddit.com/${permalink}">
       <div id="link-container">Link: ${permalink}</div>
       </a></div>`);
       return i < 10;
    


    });






    
    });

});