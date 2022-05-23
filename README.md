# SafePulse - Mitchell, Matt, Matthew, Jacky

## 💡INSPIRATION💡

Our team is from Ontario and BC, two provinces that have been hit HARD by the opioid crisis in Canada. Over **4,500 Canadians under the age of 45** lost their lives through overdosing during 2021, almost all of them preventable, a **30% increase** from the year before. During an unprecedented time, when the world is dealing with the covid pandemic and the war in Ukraine, seeing the destruction and sadness that so many problems are bringing, knowing that there are still people fighting to make a better world inspired us. Our team wanted to try and make a difference in our country and our communities, so... we came up with **SafePulse, an app to combat the opioid crisis, where you're one call away from OK, not OD.**

**Please checkout what people are doing to combat the opioid crisis, how it's affecting Canadians and learn more about why it's so dangerous and what YOU can do.**

https://globalnews.ca/tag/opioid-crisis/

https://globalnews.ca/news/8361071/record-toxic-illicit-drug-deaths-bc-coroner/

https://globalnews.ca/news/8405317/opioid-deaths-doubled-first-nations-people-ontario-amid-pandemic/

https://globalnews.ca/news/8831532/covid-excess-deaths-canada-heat-overdoses/

https://www.youtube.com/watch?v=q_quiTXfWr0

https://www2.gov.bc.ca/gov/content/overdose/what-you-need-to-know/responding-to-an-overdose

## ⚙️WHAT IT DOES⚙️

**SafePulse** is a mobile app designed to combat the opioid crisis. SafePulse provides users with resources that they might not know about such as _'how to respond to an overdose'_ or _'where to get free naxolone kits'._  Phone numbers to Live Support through 24/7 nurses are also provided, this way if the user chooses to administer themselves drugs, they can try and do it safely through the instructions of a registered nurse. There is also an Emergency Response Alarm for users, the alarm alerts emergency services and informs them of the type of drug administered, the location, and access instruction of the user.  Information provided to users through resources and to emergency services through the alarm system is vital in overdose prevention.

##🛠️HOW WE BUILT IT🛠️

We wanted to get some user feedback to help us decide/figure out which features would be most important for users and ultimately prevent an overdose/saving someone's life. 

Check out the [survey](https://forms.gle/LHPnQgPqjzDX9BuN9) and the [results](https://docs.google.com/spreadsheets/d/1JKTK3KleOdJR--Uj41nWmbbMbpof1v2viOfy5zaXMqs/edit?usp=sharing)!

As a result of the survey, we found out that many people don't know what the symptoms of overdoses are and what they may look like; we added another page before the user exits the timer to double check whether or not they have symptoms. We also determined that by having instructions available while the user is overdosing increases the chances of someone helping. 

So, we landed on 'passerby information' and 'supportive resources' as our additions to the app.

Passerby information is information that anyone can access while the user in a state of emergency to try and save their life. This took the form of the 'SAVEME' page, a set of instructions for Good Samaritans that could ultimately save the life of someone who's overdosing. 
Supportive resources are resources that the user might not know about or might need to access such as live support from registered nurses, free naxolone kit locations, safe injection site locations, how to use a narcan kit, and more!

Tech Stack: ReactJS, Firebase, Python/Flask

SafePulse was built with ReactJS in the frontend and we used Flask, Python and Firebase for the backend and used the Twilio API to make the emergency calls. 

##😣 CHALLENGES WE RAN INTO😣

- It was Jacky's **FIRST** hackathon and Matthew's **THIRD** so there was a learning curve to a lot of stuff especially since we were building an entire app
- We originally wanted to make the app utilizing MERN, we tried setting up the database and connecting with Twilio but it was too difficult with all of the debugging + learning nodejs and Twilio documentation at the same time 🥺
- Twilio?? HUGEEEEE PAIN, we couldn't figure out how to get different Canadian phone numbers to work for outgoing calls and also have our own custom messages for a little while. After a couple hours of reading documentation, we got it working!

## 🎉ACCOMPLISHMENTS WE ARE PROUD OF🎉

- Learning git and firebase was HUGE! Super important technologies in a lot of projects
- With only 1 frontend developer, we managed to get a sexy looking app 🤩 (shoutouts to Mitchell!!)
- Getting Twilio to work properly (its our first time)
- First time designing a supportive app that's ✨**functional AND pretty** ✨without a dedicated ui/ux designer
- USER AUTHENTICATION WORKS!! ( つ•̀ω•́)つ
- Using so many tools, languages and frameworks at once, and making them work together :D
- Submitting on time (I hope? 😬)

## ⏭️WHAT'S NEXT FOR SafePulse⏭️

SafePulse has a lot to do before it can be deployed as a genuine app. 

- Partner with local governments and organizations to roll out the app and get better coverage
- Add addiction prevention resources
- Implement google maps API + location tracking data and pass on the info to emergency services so they get the most accurate location of the user
- Turn it into a web app too!
- Put it on the app store and spread the word! It can educate tons of people and save lives!
- We may want to change from firebase to MongoDB or another database if we're looking to scale the app
- Business-wise, a lot of companies sell user data or exploit their users - we don't want to do that - we'd be looking to completely sell the app to the government and get a contract to continue working on it/scale the project. Another option would be to sell our services to the government and other organizations on a subscription basis, this would give us more control over the direction of the app and its features while partnering with said organizations

## 🎁ABOUT THE TEAM🎁
_we got two Matthew's by the way (what are the chances?)_

Mitchell is a 1st year computer science student at Carleton University studying Computer Science. He is most inter tested in programing language enineering. You can connect with him at his [LinkedIn](https://www.linkedin.com/in/mitchell-monireoluwa-mark-george-261678155/) or view his [Portfolio] (https://github.com/MitchellMarkGeorge)

Jacky is a 2nd year Systems Design Engineering student at the University of Waterloo. He is most experienced with embedded programming and backend. He is looking to explore various fields in development.  He is passionate about reading and cooking. You can reach out to him at his [LinkedIn](https://www.linkedin.com/in/chenyuxiangjacky/) or view his [Portfolio](https://github.com/yuxstar1444)

Matthew B is an incoming 3rd year computer science student at Wilfrid Laurier University. He is most experienced with backend development but looking to learn new technologies and frameworks. He is passionate about music and video games and always looking to connect with new people. You can reach out to him at his [LinkedIn](https://www.linkedin.com/in/matthew-borkowski-b8b8bb178/) or view his [GitHub](https://github.com/Sulima1)

Matthew W is a 3rd year computer science student at Simon Fraser University, currently looking for a summer 2022 internship. He has formal training in data science. He's interested in learning new and honing his current frontend skills/technologies. Moreover, he has a deep understanding of machine learning, AI and neural networks. He's always willing to have a chat about games, school, data science and more! You can reach out to him at his [LinkedIn](https://www.linkedin.com/in/matthew-wong-240837124/), visit his [website](https://wongmatt.dev) or take a look at what he's [working on](https://github.com/WongMatthew)

###🥳🎉THANK YOU WLU FOR HOSTING HAWKHACKS🥳🎉

