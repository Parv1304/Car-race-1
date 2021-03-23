class Form
{
    constructor()
    {

    }

    display()
    {
        var title = createElement('h3');
        title.html("Car Race");
        title.position(250,100);

        var input = createInput("Name");
        var button = createButton("Start");
        var greet = createElement('h2');
        input.position(250,250);
        button.position(250,300);

        button.mousePressed(function()
        {
            input.hide();
            button.hide();

           var name= input.value();
           playercount+=1;
           player.update(name);
           player.updatecount(playercount);

           greet.html("Hello "+name);
           greet.position(250,200);
        })
        {

        }

    }
}