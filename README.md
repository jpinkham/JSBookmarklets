Intro
===========
In 2017 I hadn't used JS on a daily basis for awhile, so this is my attempt to
refamiliarize myself as well as produce something useful, in the form of
browser bookmarklets that make my web browsing more efficient/interesting.

I have split this repo into 2 subdirs so that I can share a commented and
easily-readable version separate from a 1-line  browser-ready version 
minus comments.


Scripts
==========
- overdrive_search.js = Pulls Kindle book title from an Amazon book detail page
and searches a local library Overdrive system. Goal: Borrow book from library
instead of buying it. 
	Overdrive is a system used by many libraries (over 30k in 40+ countries!) to lend out ebooks and audiobooks.  Check if your library uses Overdrive: 
	https://www.overdrive.com/libraries

NOTE: This bookmark is hardcoded to Brooklyn but you can change to whatever 
URL is used by your local library.  

As of 10/26/17, it handles few error cases.
