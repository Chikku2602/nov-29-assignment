var kbc={  
        
        
    'winning_prize': function(question_list,current){
        var price=this.question_list[current].price_amount;
        return price;
    },

    'current_question_no': function(num){
        return num;
    },
    'print_question': function (question_list,val) {

        console.log(this.question_list[val].text);
        document.write(this.question_list[val].text,"<br>");
        console.log(this.question_list[val].options);
        document.write(this.question_list[val].options,"<br>");

     },

    'select_answer': function(real_ans,answer) {
        if(real_ans==answer){

            console.log("correct answer");
            document.write("correct answer","<br>");
            return true;

        }
        else{
            console.log("Wrong answer");
            document.write("Wrong answer","<br>");
            return false;
        }
        
    },
    'question_list':[
        {
            'text': "how many states  are there in India ?",
            'options': ["28", "30", "29", "27"],
            'correct_answer': "28",
            'price_amount': 10000
        },
        {
            'text': "who is the father of our Nation ? ",
            'options': ["Mahatma Gandhi", "Nehru", "Bhagath singh", "Subhash Chandra Boss"],
            'correct_answer': "Mahatma Gandhi",
            'price_amount': 20000



        },
        {
            'text': "which is the National game of India ?",
            'options': ["football", "badmintion", "cricket", "hockey"],
            'correct_answer': "hockey",
            'price_amount': 30000

        },
        {
            'text': "who is the prime minister of india ?",
            'options': ["Anandiben Patel", "yogi", "narendra modi", "Mamata Banerjee"],
            'correct_answer': "Narendra modi",
            'price_amount': 40000
        },
        {
            'text': "Who invented Computer ?",
            'options': ["Charles Babage", "George Greenville", "Einstein", "Newton"],
            'correct_answer': "Charles Babbage",
            'price_amount': 50000
        }],

    'main_fun':function(){
        var final_price=0;

        for(var i=0;i<kbc.question_list.length;i++){
            var val=kbc.current_question_no(i);
            
            var answer=prompt(kbc.print_question(kbc.question_list,val));
            var bool=kbc.select_answer(kbc.question_list[i].correct_answer,answer);
            if(bool==true){
                final_price+=kbc.winning_prize(kbc.question_list,val);
                console.log('Prize money till now',final_price);
                document.write('Prize money till now',final_price,"<br>");

                if(i==kbc.question_list.length-1){
                    console.log("Congratulations!!! You have won",final_price);
                    document.write("Congratulations!!! You have won",final_price,"<br>");
                }
            }
            else{
                console.log("Better Luck next time ");
                document.write("Better Luck next time ","<br>");
                break;
            }

    



        }

    }

}



console.log('--Welcome to Kaun Banega karodpathi--');

kbc.main_fun();