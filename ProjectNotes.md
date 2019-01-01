#Project Notes
##Project files
You've been supplied several files for this project:
- `index.html` - contains the initial HTML page — you'll use JavaScript to modify the markup on this page to meet the goals of this project (as described in the instructions below).
- `css/design.css and css/reset.css` - 2 style sheets that contain basic CSS styles for cross-browser support and styles specific to this project.
- `js/script.js` - A beginning JS file with some code comments to help get you started.

**Example HTML files:**

- `examples/example-exceeds.html and examples/example-meets.html` - demonstrate what a meets and exceeds project will look like in the browser
- `examples/44students.html and examples/64 students.html`- allow you to test your JS against lists with varying numbers of students to make sure your solution is dynamic and will work with lists of any size.

##Project Instructions
###Tips for this project
- It can be helpful to accomplish the tasks in this project with functions since functions only need to be created once, and can then be called easily to perform some action over and over again.
- Try not to create functions that perform operations on a particular DOM element or set of DOM elements. Instead, try to create functions that perform operations on parameters. (Remember, parameters are what go in the parenthesis when we first define a function.) And then when you need to call that function on some DOM element or set of DOM elements, you can pass them in as arguments. (Remember, arguments are what go between the parentheses when we call or invoke a function.)

###No snippets, plugins or libraries, including jQuery
- For this project, avoid using the popular JavaScript library, jQuery, as it will be covered in the following unit, and required in the upcoming project.
- Avoid using any other libraries, plugins or code snippets.
- All code for this project must be your own, and must be plain JavaScript, often referred to as "vanilla" JavaScript.

###Show/hide the appropriate students
- A recommended approach is to create a function that you can call anytime you need to hide all of the students except for the ones that should show on a given page.
- When the page first loads your program should show only the first ten students, and hide all the rest.

**Pro Tip**: If your function takes in parameters for the list and the "page" number of students that should be displayed, then your function can be called on any list, and be used to show any of the "pages" .

###Create and append the pagination links
- Look at the HTML in the examples/example-meets.html file on lines 119-137 -- this is an example of the markup you'll need to dynamically create and add to the DOM to create the necessary pagination links. You'll need to create each part dynamically, including the container.
- Since no more than 10 students should be shown at a time, your programming needs to calculate the number of pages needed and add the appropriate number of links to the bottom of the page. This can be accomplished with simple division - the total number of students divided by the max number of students on each page and rounded up. So 54 students divided by ten, rounded up, equals 6 pages.
- Your program should work for any number of students. You can test your code by checking the examples/44students.html and examples/64 students.html files.

**Pro Tip**: Google

- It is actually pretty common to forget exactly which method you need to use for a given task, or to forget some detail of how to use your chosen method. This is exactly why Google is such an important tool for modern developers. Even the pros are using it everyday because there is just too much in this industry to remember it all. So if you get stuck or have questions about creating and appending elements or working with their values and attributes, use the opportunity to practice you Googling skills. And reach out on Slack for any follow up questions or discussions. It's great to talk about these things with the team.

###Add functionality to pagination links with an event listener
- When one of the pagination links are clicked, the CSS "active" class should be updated on the buttons, meaning it is removed from the previously active button and added to the currently active button.
- When a user clicks on “2” in the pagination links, students 11 through 20 should be displayed. When a user clicks “3”, students 21 through 30 be displayed. And so on until we get to the last page, number "6" in this project, which should display students 51 through 55. And remember that indexes start at zero, not one. So to show students 1 - 10, you'll be working with student indexes 0 - 9.
- Since the pagination links are being generated dynamically, it's important to be mindful of when and where you add functionality to the buttons, because if the code that adds the functionality runs before the buttons are created, then the buttons won't have any of the intended functionality.
- If you created a function to show/hide students at the beginning of this project, then you can use that function here in the event listener attached to the buttons to make each each button show/hide the correct sets of students.

###Add code comments.
- Replace the code comments in the file with your own code comments.
- The key to creating good code comments is to keep them brief, but clear, so that your fellow developers can get an idea of what's going on in your code at a glance, and without having to review every single line of code. Generally, good code comments are placed above important code blocks to explain what they do.

###Cross-Browser consistency
- Get in the habit of checking your project in multiple browsers. But to pass, the project only needs to work in Chrome.

###Review the "How you'll be graded" section.
- Check out the "How you'll be graded" section, located above, next to the instructions tab, just below the project title. This section lists specifically what will be considered and checked when your project is being reviewed, and your project grade is being determined.
- Quality Assurance and the Student Project Submission Checklist
- Web development work bears the need for a high level of precision. We're talking about an industry that measures performance by the pixel, kilobyte, and millisecond. So it's very important to pay attention to the details and take the time to do your own thorough quality assurance testing on all your own projects. Before you submit your project for review, please do be sure to check off all of the items on the Student Project Submission Checklist. The checklist is designed to help make sure you’ve met the grading requirements, that your project is complete and ready to be submitted, and that you are developing good habits as a developer!

###NOTE: Sometimes just getting started is the hardest part.
- It's not uncommon to feel overwhelmed and confused when beginning to build a project. If you feel this way, try not to get too focused on seeing the project as a whole. Instead, just take it one small piece at a time. After familiarizing yourself with the instructions, start by downloading the source files, and creating a GitHub repo to store them. That is always a great place to start. Then just start tackling the project one small step at a time. Remember, your first attempt isn't likely to be perfect, and it doesn't have to be. As coders, we focus first on creating something that works. And then we refactor and optimize on later iterations.

###NOTE: Seeking assistance
- If you're feeling stuck or having trouble with this project
    - Reach out to the team on Slack.
    - Take a look at this great study guide: List Pagination and Filtering Study Guide
    - Review material in the unit.
    - Practice your Google skills by finding different ways to ask the questions you have, paying close attention to the sort of results you get back depending on how your questions are worded.

###NOTE: What you submit is what will get reviewed.
- hen you submit your project, a snapshot is taken of your repository, and that is what the reviewer will see. Consequently, any changes you make to your repo after you submit will not be seen by the reviewer. So before you submit, it's a smart idea to do a final check to make sure everything in your repo is exactly what you want to submit.

## Extra Credit
###Add search component
- Dynamically create and append a search component. You can reference the examples/example-exceeds.html file, lines 16-19, to see an example of the markup you'll need.
- Add functionality to the search component
- When the "Search" button is clicked, the list of students is filtered to match the search value. For example if the name Phillip is typed into the box, list all students whose name or email includes Phillip.

**Note:** To improve the functionality and add to the user experience, consider adding a keyup event listener to the search input so that the list filters in real time as the user types. This would be in addition to making the search button clickable since pasting text into the search bar wouldn't trigger the keyup event.

###Paginate search results
- Display pagination links based on how many search results are returned. For example: if 10 or fewer results are returned, 0 or 1 pagination links are displayed. If 22 search results are returned, 3 pagination links are displayed.

**Note:** If you created functions for showing and hiding students, creating and appending pagination links, and adding functionality to the links, then this part of the project will be much more manageable.

###Handle no results returned
- If no matches are found by the search, include a message in the HTML to tell the user there are no matches.

**Note:** Don't use the built in alert() method here. The "No results" message must be printed to the page somehow.

###NOTE:
- To get an "Exceeds Expectations" grade for this project, you'll need to complete each of the items in this section. See the rubric in the "How You'll Be Graded" tab above for details on how you'll be graded.
- If you’re shooting for the "Exceeds Expectations" grade, it is recommended that you mention so in your submission notes.
- Passing grades are final. If you try for the "Exceeds Expectations" grade, but miss an item and receive a “Meets Expectations” grade, you won’t get a second chance. Exceptions can be made for items that have been misgraded in review.
