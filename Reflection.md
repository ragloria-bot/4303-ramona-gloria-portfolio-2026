# Project Reflection: Ramona Gloria Portfolio

## Decisions
One of the most important decisions I made during Project 02 was to pivot from a standard list of links  
to a structured button gallery. Originally, my project landing page was just a series of text links, but  
after receiving peer feedback that the navigation was confusing, I decided to build a dedicated navigation  
menu using custom CSS and Hugo’s relref shortcodes. I also had to make a critical decision regarding the  
site's color theory. Initially, my buttons blended into the background in certain viewing modes. I decided  
to use a high-visibility soft yellow (#f7e377) for my primary project links. This wasn't just an aesthetic choice;  
it was a functional one intended to ensure that potential employers wouldn't miss the most important parts  
of my site, regardless of whether they used light or dark mode.

## What Worked
The transition from placeholder content to substantive text went very well. I am particularly satisfied
with the interactive hover effects. Implementing the hot pink (#f25fba) hover transition and the "lift" effect
(translateY) made the site feel much more professional and responsive to the user's actions. Additionally,
the Flexbox implementation for my button group worked perfectly. It solved the issue of the buttons feeling
stuck together and ensured that the gallery looks organized on both a desktop monitor and a mobile phone.
Seeing these elements come together to create a cohesive user experience was the most rewarding part of the project.

## What I Would Do Differently
If I were to start over, I would focus more on DRY (Don't Repeat Yourself) CSS principles. Because I was troubleshooting
button colors and hover states in real-time, my custom.css file became a bit repetitive. I would instead use CSS variables
for my colors to make it easier to update the entire site’s theme in one place.
I would also change how I handled my folder architecture. I initially struggled with 404 errors because I had nested my
markdown files too deeply. Starting with a flatter, simpler file structure would have saved me several hours of debugging
Hugo's link-building logic.

## What I Learned
Through this process, I learned that building for the web is an iterative conversation. The shift from Project 01 to Project
02 was largely driven by user testing (peer feedback). I learned that what makes sense to me as the developer might not be
clear to a first-time visitor, and that adding navigation instructions and clearer buttons is essential for a good user
experience. On the technical side, I learned a lot about CSS Specificity. I spent a significant amount of time wondering why 
my hover colors weren't changing, only to realize that my base styles were using the !important flag, which required me to
use it on the hover state as well. This project reinforced the idea that web development requires a balance of creative
design and very precise, logical troubleshooting. I now feel much more confident using VS Code, Hugo, and GitHub Actions
as a professional workflow.
