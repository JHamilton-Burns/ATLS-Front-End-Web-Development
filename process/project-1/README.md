# Project 1 Process
## Table of Contents
• [Process Milestone #1](#milestone-1)
• [Process Milestone #2](#milestone-2)


## Milestone 1
### PROJECT OVERVIEW: 

I’m a big fan of tennis and to this date I’ve not had the opportunity to build out a tennis project through ATLAS. That’s why i’m hoping this is my big opportunity. Through this topic, I’m looking to focus on 3 of the 4 grandslams, the US Open, Australian Open and French Open to showcase a timeline of tennis player outfits by major sponsors like Nike and Addidas (they sponsor the majority of players). I have always found it interesting that players during each tournament show up wearing the same outfits and thought a playful idea would be to showcase yearly color palette/style trends that, for better or for worse, have an influence/are constantly refrenced throughout the tournaments. My main influence for this idea, is the New York Times Front Row to Fashion Week page https://www.nytimes.com/newsgraphics/2013/09/13/fashion-week-editors-picks/index.html that displays the fingerprint of each fashion collection by designers. [Note, I am still on the fence about including Wimbledon in this project, due to strict rules that require players to only wear white.]

Overall, my goal is to keep this fun, lighthearted, and intriguing. I love the way the New York Times used data to drive the pop-culture topic of fashion and made it fun to do so. In this vein, I plan to make an interactive data visualization where you can select a grandslam as well as a sponsor and a collection out outfits showcased in a strip will appear for the user to pan through and learn about the design choices over the years. To keep this achievable, I plan to choose 5 years of outfits. I will source data and images online and from the sponsors. I hope to keep this fun for tennis fans and maybe interest some non-tennis fans as well. 

### STRETCH GOALS: 

I have many friends that don’t understand the difference between the tournaments and would love to make this an educational piece as well. Many don’t understand the different between the courts and their speed. They’re unaware of the varying rules between each tournament nor the difference between lengths for men’s and women’s matches. It would be neat to add these stats to each page in a visual way to create interest.

### WIREFRAMES: 

As I wireframed this project, I realized there were many features i’d like to include. So few Americans understand the intricacies of the grand slam tournaments and I’d really like to synthesize the primary differences in a digestible way. Therefore, on each page, I’d like to pull out the the easiest facts to get the gist of the differences and why they mean so much to the game of tennis. I also wanted to emphasize the outfit component of tennis and how trends widely differ by brand, tournament, and year. This is an exciting part of the game and in a sense creates a new and refreshing vibe from year-to-year.

![MacBook Pro 14_ - 1-2](https://user-images.githubusercontent.com/89480750/192922563-d46d519a-2695-42e1-84fe-253600158e5a.png)

### JAVASCRIPT LIBRARY: 

Through this project, I’m looking forward to learning d3.js to boost the data visualizaition effects of my project. I’ve never used it, but believe that after reading through the intro, it would be very useful for the parallax-esque visuals I’d like to achieve. I am a bit slower at coding, but I do love the challenge of learning a new library and testing the waters. I have high expectations for this project, and hope that i’m not biting off more than I can chew. Regardless, I’m gonna give it my all!


# Project 1 WIP Check-in
## Milestone 2
### INITIAL TAKEAWAYS: 

Taking an initial stab at my goals from Milestone 1, I attempted to create the shell for the site and create a navigation between the grand slam pages. I opted to tackle the asthetics of each page while figuring out the page navigtion and the preliminary shell for the gallery of fashion images. As I’ve begun my search into d3.js, I’ve learned a ton about the proper terminology and how deeply people have gone into studying “cartesian fisheye distortion galleries”. It seems like they’re very complicated, but have been widdled down over the years. The Front Row to Fashion Week by NYT is heavily reference when they’re discussed. 

### DEVELOPMENT PROCESS: 

As I began developing the site, I started by creating an html page for the french open to mock up the wireframe I had creaed in Figma. When I had a good foundation for the design, I created html pages for each of the grand slams that reflect on the color schemes and basic facts. Having this simpler task squared away, I began the deep dive to figure out how I’d like to navigate between the pages. In the process I found some neat hover drop-down features that will help seemlessly transition between grand slams. For the time being, I have left out the branding drop-down, because I am torn between having both nike and addidas on the same page or between creating seperate pages for each. 

In addition, I began researching “cartesian fisheye distortion galleries” in the d3.js example library. I found a ton of refrences and have mocked up the shell for the gallery on each page. Now begins the daunting task of properly labeling images to catalog within the gallery and to find images that are the most appropriate. I have a feeling this will be the hardest task of all, especially considering the complexity of inputting it into the code. I think I may need to create a fairly robust organization system on the back-end for myself so I don’t feel as overwhelmed about the task at hand. 

Some challenges that I need to work through include centering the header, creating content for the grand slams that best summarizes their differences for a non-tennis audience and pulling together fashion images for each tournament. I am cautiously optomistic as I move on to tackle these challenges. I believe I have a long ways to go as far as cleaning up the code goes. I’m hoping to have ample time to get everything in working order by the deadline. 

Here is the current site: https://web-development-neon.vercel.app/project-1/index.html

Here are a handful of screenshots displying the current state of the site: 

<img width="1787" alt="Screen Shot 2022-10-06 at 8 34 49 AM" src="https://user-images.githubusercontent.com/89480750/194342698-5e891e8e-f401-455b-8153-485b929a6a8e.png">

<img width="1788" alt="Screen Shot 2022-10-06 at 8 35 17 AM" src="https://user-images.githubusercontent.com/89480750/194342720-56fbef20-958c-4e7f-ae0a-25ccf1264829.png">

<img width="1792" alt="Screen Shot 2022-10-06 at 8 35 01 AM" src="https://user-images.githubusercontent.com/89480750/194342948-a40944b6-aace-4f55-8021-7e8825b03a06.png">

<img width="1792" alt="Screen Shot 2022-10-06 at 8 35 33 AM" src="https://user-images.githubusercontent.com/89480750/194342732-70f41ec2-61d8-4d78-9721-5d7b2df5278a.png">

# Project 1 Critique Day
## Milestone 3
### PROJECT TAKEAWAYS: 

I was quite nervous for critique day as I wasn't sure how complex projects were throughout the class. I felt proud that I was able to build a functioning site that turned out closer to the wireframe I createdthan I anticipated. However, I was also very bummed I wasn't able to get the "cartesian fisheye distortion galleries" to work as I had initially proposed. After facing time constraints, I opted to find a new way to display the Nike and Adidas fashion while still using Javascript to pan through the images. Although, it wasn't what I'd dreamt of, I believe it was still relatively effective. My biggest critique on the site was visibility of font on the Wimbledon page due to the dark background. I was grateful that this was an easy fix and I have since adjusted the font to white on the page to accomodate. Overall, I'm fairly pleased with the overall asthetic of the site. My own personal critique would be that I need to push myself harder to incorporate more JavaScript into future projects (primarily because it's daunting to me). In addition, I need to work on code organization. It is not a strength of mine and I believe it will hold me back in the coding field. 

![screencapture-127-0-0-1-5500-code-class-portal-project-1-french-html-2022-10-19-13_44_32](https://user-images.githubusercontent.com/89480750/196790814-a0f830b6-d2fb-40ff-84b0-1c904893a778.png)

# Project 1 Reflection
## Milestone 4
### REFLECTION: 

As per usual, my comfort zone is in the design. I live to make things aesthetically pleasing and I like to condense and simplify content for the easiest comprehension. I believe I achieved this in this project and left enough white space for the user to digest what they're learning. On the other hand, there is always room for improvement. If I had more time on my hands, I would have loved to generate more of a fashion timeline that better displays fashion trends over time. In addition, I would have loved to build out a comparison feature that would allow site visitors to discover their favorites. 

Used to the design world, I believe my technical approach could use some improvement. I believe in trial and error and find that a lot of my approach primarily consists of crossing my fingers, desinging what I know in html/css, and blending my understanding with technical solutions I find online. This works 50% of the time and leads to hours of wasted time when nothing is clicking. This very flawed system occasionally works in my favor, but I'd love to improve upon it and gain more confidence in my code. 

Due to my tight schedule, I struggled with the timeline for this project, but ultimately I think this benefited me. I believe I would have wasted hours and hours trying to figure out the original gallery I proposed. However, due to time constraints, I hit a point where I needed to accept reality and pivot my plan. I was lucky to find an alternative solution that I believe was a reasonable alternative. Overall, I think this was the right move and taught me a great lesson in time management. I left this project with many lessons: 1) Tennis information on the web is drastically outdated  2) I do not code well when I don't have a fundamental understanding of each trigger and fascet of the code  3) I improve by doing  4) I need to work on code cleanup

![FO](https://user-images.githubusercontent.com/89480750/196795667-3d549231-adb9-4c51-a648-525ea446ff4c.png)

![AO](https://user-images.githubusercontent.com/89480750/196795987-7c9d5423-6243-4157-9795-2ef34441ade1.png)

![US](https://user-images.githubusercontent.com/89480750/196795709-99f7d7fd-fb2d-49e5-bb05-8242fa99c810.png)

![W](https://user-images.githubusercontent.com/89480750/196795723-7143a4ce-1e18-4616-9b14-de5246fba3ce.png)
