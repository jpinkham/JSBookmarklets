javascript:setTimeout('x99.focus()',300);var book_title = document.getElementById("productTitle").innerHTML;var book_title_parts = book_title.split(" ");var book_title_trimmed = "";var max_words = 5;for (var i=0; i < book_title_parts.length; i++){	if (i > max_words) {break;} 		book_title_trimmed = book_title_trimmed + " "  + book_title_parts[i];}book_title_trimmed.trim();var x99=window.open('https://catalog.library.loudoun.gov/?section=search&term=' + book_title_trimmed + '&page=0&sortKey=Relevancy&db=ls2pac&branchFilters=[%221%22,%222%22,%223%22,%224%22,%226%22,%227%22,%228%22,%229%22,%2210%22,%2211%22,%225%22]&facetFilters=[{%22facetDisplay%22:%22Book%22,%22facetValue%22:%22Book%22,%22facetName%22:%22Format%22},{%22facetDisplay%22:%22English%22,%22facetValue%22:%22eng%22,%22facetName%22:%22Language%22}]','Overdrive LibraryLookup','scrollbars=1,resizable=1,top=0,left=20,location=1,width=600,height=400');x99.focus();