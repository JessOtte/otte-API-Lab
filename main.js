
$(() => {
    $.get("https://www.reddit.com/r/aww/.json", (data) => {

    let img;
    let title;
    let permalink;

    $.each(data.data.children, (i) => {
       title =(data.data.children[i].data.title);
       img =(data.data.children[i].data.thumbnail);
       permalink = (data.data.children[i].data.permalink);

       console.log(title, img, permalink);   

       $('.posts-container').append(`<div><a href="https://www.reddit.com/${permalink}"><img src="${img}"></img><br><div id="title-container">${title}</div><br><div id="link-container">Link: ${permalink}</div><br></a></div>`);
        return i < 10;
    });


    
    });

});