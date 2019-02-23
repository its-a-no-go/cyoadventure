//three inital prompts
let prompt1 = prompt('Please type the name of a room in your house. Ex: living room, kitchen, etc.');

let prompt2 = prompt('Please type a name');

let prompt3 = prompt('Please type a reaction, using a capital letter. Ex: Confused, Purplexed, Curious, Excitedly, Frustrated, etc.');



//console output for inital prompts and setting the scene
console.log('You and ' +
    prompt2 + ' are at your house hanging out in the ' +
    prompt1 + ' when you hear someone deliver a letter through the mail slot in your front door. ' +
    prompt3 + ', you approach the letter and start to read. The letter is nonsensical but is ' +
    'encouraging you to attend a mysterious meeting that will be held on April 27, 2019 at 27th and Girard Avenue. ' +
    ' April 27 has finally arrived! You and ' +
    prompt2 + ' are so excited to see what is going on that you recruited several other friends to ' +
    'come with you to see what the letter was all about. You have arrived at 27th and Girard Avenue.' +
    ' Do you "join the group" or do you "watch from afar"?');

alert('Please type all answers going forward in lower case');

//if statement 1 
let answer1 = prompt('Do you "join the group" or do you "watch from afar"?');
if (answer1 === 'join the group') {
    console.log('Great. The letter said to bring a steel fernace. Yes or no, did you bring a steel fernace? ');
    //if statement 2
    let answer2 = prompt('Yes or no, did you bring a steel fernace?');
    if (answer2 === 'yes') {
        console.log('Cool. Your steel furnace is used to provide others with salvation. In the letter you are given ' +
            'the option of being sedated first. Yes or no, would you like to be sedated?');
        //if statement 3 
        let answer3 = prompt('yes or no, would you like to be sedated?');
        if (answer3 === 'yes') {
            console.log('You have chosen to be sedated. Who knows what happens next.' +
                ' For context check out this url: https://billypenn.com/2019/02/18/philly-police-on-that-creepy-fairmount-letter-report-it-whatever-it-is/. ' +
                'Do attend. The end.');
            //else statement 3                 
        } else {
            console.log('You have chosen not to sedate. You brave soul, you.  I bet if you were a doctor you would be the kind that ' +
                'opperates on yourself. If you were a dentist, you would work on your own filling or extract your own tooth. Is this true of you?');
            let answer9 = prompt('Please type yes if you would opperate on yourself or type "heck no" if you would never even consider it ');
            if (answer9 === 'yes') {
                console.log('You are the true hero amongst us. I bet you also file your own taxes and call your mom every Sunday. The end');
            }
        }
        //else statement 2        
    } else {
        (answer2 === 'no')
        console.log('You have chosen not to bring a steel furnace.  The lot at 27th and Girard Avenue is vacant.  Do you think ' +
            'it would benefit from being developed, or should it stay vacant?');
        let answer7 = prompt('Please type yes if you think the lot should be developed or type stay vacant if you think it should stay vacant');
        if (answer7 === 'yes') {
            console.log('Interesting choice. Do you think the lot should be developed into a shrine consisting of steel statues ' +
                'made of "metal [that] can be melted and the bodies of people and animals mixed with the metal to become steel unable to be hurt?" ' +
                'a simple yes or no will suffice!')
        } else {
            console.log('Well...apparently, in March 2014 OCF Reality announced plans for "a major mixed use ' +
                'project at 27th and Girard Avenue".  Would you like to go back in time to stop said development? ');
            let answer8 = prompt('Please type yes if you would like to time travel to stop said development or type no if you would ' +
                'prefer not to.');
            if (answer8 === 'yes') {
                console.log('You go you time traveler, you');
            } else {
                console.log('So you do not want any development and you do not want to time travel, either? Snooze');
            }
        }

    }

    //else statement 1 
} else {
    console.log('You have chosen to watch from afar. It has started to rain. Please type yes if you want ' +
        'to stick around to watch or type no if you decide to pound sand and get out of dodge.')
    let answer4 = prompt('Type yes if you would like to stay to watch or type no if you would prefer to leave');
    if (answer4 === 'yes') {
        console.log('You have chosen to stay! The letter writer specified that the meeting would need' +
            'a bulldozer to dig some ditches. Please type yes if you brought a bulldozer or no if you declined.');
        let answer5 = prompt('Yes or no, did you bring a bulldozer to dig some ditches?');
        if (answer5 === 'yes') {
            console.log('You have chosen to bring your own bulldozer! BYOD! Do you feel comfortable with digging some ditches today?');
            let answer6 = prompt('Type yes if you are ready to dig some ditches, or type no if no way no how!');
            if (answer6 === 'yes') {
                console.log('For context check out this url: https://billypenn.com/2019/02/18/philly-police-on-that-creepy-fairmount-letter-report-it-whatever-it-is/. ' +
                    'Do attend. ');
            } else {
                console.log('You\'ve come so far! Thanks for coming out. Do attend.');
            }
        } else {
            console.log('You have neglected to bring a bulldozer! Luckily someone else so thoughtfully brought one. Do you feel comfortable ' +
                'using theirs?');
            let answer10 = prompt('Yes or no, do you feel comfortable using a bulldozing?')
            if (answer10 === 'yes') {
                console.log('Oooh look at you, not afraid to get some dirt under your fingernails. Looks like someone isn\'t just watching ' +
                    'from afar any longer. When this whole thing inevitably goes south will you lie about being in attendance? ');
                let answer11 = prompt('Type yes if you will be lying about being in attendance or type no if you will be honest')
                if (answer11 === 'yes') {
                    console.log('You sly dog. Tsk tsk.');
                } else {
                    console.log('You, my honest friend, are a gentleman and a scholar');
                }
            } else {
                console.log('So you want really just want to witness this whole fiasco. Are you going to tell anyone about ' +
                    'this bizarre experience?');
                let answer12 = prompt('Do you tell a soul or do you take this to your grave? Type yes if you are telling someone ' +
                    'and type no if you will take this whole experience to your grave.')
                if (answer12 === 'yes') {
                    console.log('Loose lips sink ships. The end. ');
                } else {
                    console.log('"Got a secret, can you keep it? Swear this one you\'ll save. Better lock it in your pocket, ' +
                        'taking this one to the grave" The end.');
                }

            }
        }
    } else {
        console.log('You have chosen to leave. But did you remember to bring an umbrella? Yes or no.');
        let answer13 = prompt('Did you bring an umbrella, yes or no?')
        if (answer13 === 'yes') {
            console.log('Look at you making wise decisions, such as leaving this mysterious and bizarre event and remembering an umbrella. ' +
                'I bet you pay your bills on time, wash *and* fold your laundry on the same day, and care about your credit score. What a bore. The end.');
        } else {
            console.log('"Did you at least bring a rain coat? You could catch a cold! Did you brush your hair today? It really doesn\'t ' +
                'look very good. Did you do your homework? Wipe your feet before you dirty my floors! Isn\'t it past your bed time?" -your mom.');
        }
    }
}