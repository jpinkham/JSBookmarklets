javascript:setTimeout('x99.focus()',300); // Automatically change focus to the search window

// This element exists on a non-Kindle product page, whether or not it's a book
var book_title = document.getElementById("productTitle").innerHTML;


// BEGIN kludgey/dirty way that I decided to trim a title on word boundaries

// Break the title into words
var book_title_parts = book_title.split(" ");
var book_title_trimmed = "";
// Only 5 words of the title should be used in search query, so matches are more likely
var max_words = 5;
// Stop building the trimmed title when you have looked at all the title words
for (var i=0; i < book_title_parts.length; i++)
{
	if (i > max_words) {break;}  // Stop building the trimmed title if you have already used the max number of words
	// Append a space and the next word in the title
	book_title_trimmed = book_title_trimmed + " "  + book_title_parts[i];
}

// Get rid of any leading or trailing whitespace
book_title_trimmed.trim();
// END kludge

//TODO Make the library link configurable in a variable at the top of the page
// Perform the search using the first few words of the book title
var x99=window.open('https://catalog.library.loudoun.gov/?section=search&term=' + book_title_trimmed + '&page=0&sortKey=Relevancy&db=ls2pac&branchFilters=[%221%22,%222%22,%223%22,%224%22,%226%22,%227%22,%228%22,%229%22,%2210%22,%2211%22,%225%22]&facetFilters=[{%22facetDisplay%22:%22Book%22,%22facetValue%22:%22Book%22,%22facetName%22:%22Format%22},{%22facetDisplay%22:%22English%22,%22facetValue%22:%22eng%22,%22facetName%22:%22Language%22}]','Overdrive LibraryLookup','scrollbars=1,resizable=1,top=0,left=20,location=1,width=600,height=400');
//Brooklyn library has a different catalog system
//var x99=window.open('https://borrow.bklynlibrary.org/iii/encore/search/C__S' + book_title_trimmed + '__Orightresult?lang=eng','Overdrive LibraryLookup','scrollbars=1,resizable=1,top=0,left=20,location=1,width=600,height=400');

x99.focus();

