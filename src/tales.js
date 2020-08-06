module.exports = {
    tales: [
        {
            type: 'JavaScript',
            date: '6/8/2020',
            title: 'I have been using react all wrong!',
            content: [
                {
                    type: 'pretext',
                    value: `I generally make it a habit to re-evaluatue myself, both as an individual and as a programmer...`,
                },
                {
                    type: 'text',
                    value: `This helps me improve the overall quality of code that i conjure using my Ducky(shoutout! amazing keyboards!) magic wand.
                            Ever so often it happens that you stumble upon a piece of code that makes you go 'wow, why did i not do it this way'.
                            A similiar moment happened when i was going through the source of a React theme, the way i have been hiding things in the DOM 
                            is by using this syntax`,
                },
                {
                    type: 'code',
                    value: `{hidden ? null : <p> You can't see me </p>}`,
                },
                {
                    type: 'text',
                    value: `To be honest i have been bothered by this a little bit, it just seems like one additional unnecessay thing, that 'null' servers no purpose.
                            So when i saw this synatax`,
                },
                {
                    type: 'code',
                    value: `{!hidden && <p> You can't see me </p>}`,
                },
                {
                    type: 'text',
                    value: `I was blown away(just a tiny bit). So from now on, this is going to be my goto.`,
                },
            ]
        },
        {
            type: 'JavaScript',
            date: '5/8/2020',
            title: 'Neat way of using Reduce with Objects',
            content: [
                {
                    type: 'pretext',
                    value: `Recently i found myself in need of adding up some values in an array, 
                    the problem was that these values were present inside objects...`,
                },
                {
                    type: 'text',
                    value: `JavaScript gives us a selection of methods to mangle and transform arrays it's just a matter of choosing the right one. 
                    Reduce seemed like the right nut for this bolt. 
                    It's a neat method, it takes in an accumulator and current value as basic values (other things can be passed as well, see here...).
                    At first i wrote up this`,
                },
                {
                    type: 'code',
                    value: `let arr = [{ x: 2 }, { x: 22 }, { x: 42 }];`,
                },
                {
                    type: 'text',
                    value: `example array to verify outputs`,
                },
                {
                    type: 'code',
                    value: `arr.reduce((acc, obj) => ({ x: (acc.x + obj.x) })); //Output: { x: 66 }`,
                },
                {
                    type: 'text',
                    value: `The syntax is minimal(which i do prefer),
                    it returns an object with key x that holds the sum, Job done! or not that seems one more step and we are all about getting it done
                    with the bare minimum, that is where initial value paramter for Reduce method comes in,`,
                },
                {
                    type: 'code',
                    value: `arr.reduce((acc, obj) => acc + obj.x, 0); //Output: 66`,
                },
                {
                    type: 'text',
                    value: `There we go, just a nice clean number.`,
                },
            ]
        },
    ],

}