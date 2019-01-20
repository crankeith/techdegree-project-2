/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing
const page = document.querySelector('.page');
const pageHeader = document.querySelector('.page-header');
const studentList = document.querySelector('.student-list').children;

const defaultPageSize = 10;
const pageSizeOptions = [5, 10, 20, 50];
let filteredList = [];

const pageSize = document.createElement('div');
const pageSizeLabel = document.createElement('label');
const pageSizeSelector = document.createElement('select');
const searchBar = document.createElement('div');
const searchInput = document.createElement('input');
const searchButton = document.createElement('button');

//Initial page load
window.onload = function(){
    paginateList(studentList, 1, defaultPageSize);
};

//-----------------
//ADD PAGE SIZE SELECTOR
//-----------------

pageSize.classList.add('page-size');
pageSizeLabel.textContent = 'Page size:';
pageSizeLabel.for = 'page-size-selector';
pageSizeSelector.id = 'page-size-selector';

for(let i = 0; i < pageSizeOptions.length; i++){
    const option = document.createElement('option');
    option.value = pageSizeOptions[i];
    option.textContent = String(pageSizeOptions[i]);
    (pageSizeOptions[i] === defaultPageSize) ? option.selected = 'selected' : '';
    pageSizeSelector.appendChild(option);
}

pageSizeSelector.addEventListener('change', (event)=>{
    paginateList((filteredList.length > 0) ? filteredList : studentList, 1, event.target.value)
});

pageSize.appendChild(pageSizeLabel);
pageSize.appendChild(pageSizeSelector);
page.appendChild(pageSize);

//-----------------
//ADD SEARCH BAR
//-----------------
searchBar.classList.add('student-search');
searchInput.placeholder = "Search for students...";
searchButton.textContent = "Search";

searchInput.addEventListener('keyup', (event)=>{
    if(event.target.value.length > 0){
        filterList(studentList, searchInput.value);
    } else {
        filteredList = [];
        paginateList(studentList, 1, pageSizeSelector.value);
    }
});

searchButton.addEventListener('click', () => {
    if(searchInput.value.length > 0){
        filterList(studentList, searchInput.value);
    } else {
        filteredList = [];
        paginateList(studentList, 1, pageSizeSelector.value);
    }
});

searchBar.appendChild(searchInput);
searchBar.appendChild(searchButton);
pageHeader.appendChild(searchBar);



//Show/Hide elements based on page number and size
function paginateList(list, pageNum, pageSize){
    for (let i = list.length-1; i >= 0; i--){
        if(i < pageNum * pageSize && i >= (pageNum * pageSize) - pageSize){
            showElement(list[i]);
        }
        else{
            hideElement(list[i]);
        }
    }
    if(pageNum === 1){
        addPagination(list, list.length, pageSize);
    }
}


//Toggle adding/remove pagination buttons to DOM
function addPagination(list, totalItems, pageSize){
    //Reset pagination
    const existingPagination = document.querySelector('.pagination');
    if(existingPagination){existingPagination.remove()}

    //Add pagination
    const pagination = document.createElement('div');
    const pageList = document.createElement('ul');
    const numOfPages = Math.ceil(totalItems / pageSize);

    pagination.classList.add('pagination');
    if(numOfPages > 1){
        for(let i = 0; i < numOfPages; i++){
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = i + 1;
            (i === 0) ? makeActive(a) : '';
            li.appendChild(a);
            li.addEventListener('click', (event)=>{
                const pageNum = event.target.textContent;
                paginateList(list, pageNum, pageSizeSelector.value);
                makeActive(a, document.querySelector('.active'));
            });
            pageList.appendChild(li)
        }

        pagination.appendChild(pageList);
        page.appendChild(pagination);
    }
}

//Filter the list of items based on a string
function filterList(list, str){
    //Reset no results message
    const noResultsMessage = document.querySelector('#no-results');
    (noResultsMessage)? noResultsMessage.remove() : '';

    //Build new list of elements based on search string
    const newList = [];
    for(let i = list.length-1; i >= 0; i--){
        // console.log(list.querySelector('h3').textContent.indexOf(str));
        if(list[i].querySelector('h3').textContent.indexOf(str) >= 0){
            showElement(list[i]);
            newList.push(list[i])
        } else{
            hideElement((list[i]));
        }
    }

    //Check to see if search results are empty
    if(newList.length < 1){
        const noResults = document.createElement('p');
        noResults.id = "no-results";
        noResults.textContent = "No results found.";
        document.querySelector('.student-list').insertAdjacentElement('afterend', noResults)
    }

    //Set global filtered list and paginate the new list
    filteredList = newList;
    paginateList(newList, 1, pageSizeSelector.value);
}

function makeActive(activeElem, prevElem){
    activeElem.classList.toggle('active');
    (prevElem)? prevElem.classList.toggle('active') : '';
}

function hideElement(element){
    element.style.display = "none";
}

function showElement(element){
    element.style.display = "block";
}

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/




/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.