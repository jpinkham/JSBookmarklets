javascript:setTimeout('x99.focus()',300); // Automatically change focus to the search window

// This element exists on a Kindle book product page
var book_title = document.getElementById("ebooksProductTitle").innerHTML;


// BEGIN kludgey/dirty way that I decided to trim a title on word boundaries

// Break the title into words
var book_title_parts = book_title.split(" ");
var book_title_trimmed = "";
// Only 5 words of the title should be used in search query, so matches are more likely
var max_words = 5;
// Stop building the trimmed title when you have looked at all the title words
for (var i=0; i < book_title_parts.length; i++)
{
	if (i > max_words) {break;}  // Stop building the trimmed title
	// Append a space and the next word in the title
	book_title_trimmed = book_title_trimmed + " "  + book_title_parts[i];
}

// Get rid of any leading or trailing whitespace
book_title_trimmed.trim();
// END kludge

// Perform the search using the first few words of the book title
var x99=window.open('https://brooklyn.overdrive.com/search?query='+book_title_trimmed,'Overdrive LibraryLookup','scrollbars=1,resizable=1,top=0,left=20,location=1,width=600,height=400');
x99.focus();

