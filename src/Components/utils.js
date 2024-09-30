import moment from "moment"

export const utils = (text) => {

    if(text.includes('hi') || text.includes('hai') || text.includes('hello'))
        return 'Hi, How Can I Help You?'

        else if(text.includes('date'))
            return moment().format('MMM Do YYYY') 

        else if(text.includes('Date'))
            return moment().format('MMM Do YYYY') 

        else if(text.includes('DATE'))
            return moment().format('MMM Do YYYY') 

        else if(text.includes('time'))
            return moment().format('h:mm:ss a')

        else if(text.includes('Time'))
            return moment().format('h:mm:ss a')

        else if(text.includes('TIME'))
            return moment().format('h:mm:ss a')

        else if(text.includes('google'))
            return 'https://www.google.com'

        else if(text.includes('google link'))
            return 'https://www.google.com'

        else if(text.includes('GOOGLE'))
            return 'https://www.google.com'
        
        else if(text.includes('Google Link'))
            return 'https://www.google.com'

        else if(text.includes('GOOGLE LINK'))
            return 'https://www.google.com'

        else if(text.includes('bank interest for education loan'))
            return 'Bank Interest Rate is 8.7'

         else if(text.includes('Bank Interest For Education Loan'))
            return 'Bank Interest Rate is 8.7'

        else if(text.includes('BANK INTEREST FOR EDUCATION LOAN'))
            return 'Bank Interest Rate is 8.7'

        else if(text.includes('Bank interest for Education loan'))
            return 'Bank Interest Rate is 8.7'

        else if(text.includes('Thank You'))
            return 'Thank for Contacting / Using Me' 
            
        else if(text.includes('thank you'))
            return 'Thank for Contacting / Using Me' 

        else if(text.includes('THANK YOU'))
            return 'Thank for Contacting / Using Me' 

        else if(text.includes('THANKS'))
            return 'Thank for Contacting / Using Me'
            
        else if(text.includes('thanks'))
            return 'Thank for Contacting / Using Me'
            
        else if(text.includes('THANK U'))
            return 'Thank for Contacting / Using Me' 

        else if(text.includes('thank u'))
            return 'Thank for Contacting / Using Me' 

        else if(text.includes('How to join in college'))
           return 'Read Well to get into an College'

        else if(text.includes('I LOVE YOU'))
           return 'I cant love you because I dont have that fellings on you'

        else if(text.includes('I Love You'))
           return 'I cant love you because I dont have that fellings on you'

        else if(text.includes('i love you'))
           return 'I cant love you because I dont have that fellings on you'

        else if(text.includes('How is CIT'))
           return 'Its an one of the best college in chennai.'

        else if(text.includes('HOW IS CIT'))
           return 'Its an one of the best college in chennai.'

        else if(text.includes('What is Your Name'))
           return 'My name is Chat-Bot, Thank you for asking. Then what about your day'

        else if(text.includes('Good'))
            return 'Ohh Nice, Thank you your Time. Bye See you Later Juniors'

        else if(text.includes('fuck you'))
            return 'fuck your mother'

        else if(text.includes('cit'))
            return 'Chennai institute of technology'

        else if(text.includes('CIT'))
            return 'CHENNAI INSTITUTE OF TECHNOLOGY'

        else if(text.includes('Cit'))
            return 'Chennai institute of technology'

        else if(text.includes('Tell About Yourself'))
            return 'Its an Chat-Bot Created using ReactJs the creators are Gokul, Guruvijay, Sangeshwaren, Harish'

        
        else if(text.includes('tell about yourself'))
            return 'Its an Chat-Bot Created using ReactJs the creators are Gokul, Guruvijay, Sangeshwaren, Harish'

        else if(text.includes('Do you Have any Fellings'))
            return 'No I dont have any Fellings. Because'

        else if(text.includes('who did this project'))
            return 'This project done by CIT students pursuing 2nd year Cyber Security'

        else if(text.includes('WHO DID THIS PROJECT'))
            return 'This project done by CIT students pursuing 2nd year Cyber Security'

        else if(text.includes('Who Did This Project'))
            return 'This project done by CIT students whose 2nd year Cyber Security'

        else if(text.includes('I am Batman'))
            return 'Sorry Batman is an Cartoon Character it could not be you'

        else if(text.includes('I AM BATMAN'))
            return 'Sorry Batman is an Cartoon Character it could not be you'

        else if(text.includes('i am batman'))
            return 'Sorry Batman is an Cartoon Character it could not be you'

        else if(text.includes('I Need Girlfriend'))
            return 'Girlfriend is injurious to life'

        else if(text.includes('i need girlfriend'))
            return 'Girlfriend is injurious to life'

        else if(text.includes('I need girlfriend'))
            return 'Girlfriend is injurious to life'

        else if(text.includes('I need Boyfriend'))
            return 'Boyfriend is Injurious To Life'

        else if(text.includes('i need boyfriend'))
            return 'Boyfriend is Injurious to Life'

        else if(text.includes('sing me a song'))
            return ('Urulakelangu chella kutty enga pochu kathirika kudia la thunga pochu, kathirika yeti othaika aluthuduchu, amma vanthu konjunathum serichiduchu')

        else if(text.includes(''))
            return ''

        else if(text.includes(''))
            return ''

        else if(text.includes(''))
            return ''

        else if(text.includes(''))
            return ''

        else if(text.includes(''))
            return ''

        else if(text.includes(''))
            return ''

        else if(text.includes(''))
            return ''
            

            

    return "I Can't get you rephrase the given message" 
}

export default utils;
