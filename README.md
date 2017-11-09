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
- overdrive\_ebook\_search.js = Pulls Kindle book title from an Amazon book detail page
and searches a local library Overdrive system. Overdrive is a system used by many libraries (over 30k in 40+ countries!) to lend out ebooks and audiobooks.  [Check if your library uses Overdrive](https://www.overdrive.com/libraries)

Goal: Borrow book from library
instead of buying it, if you only intend to read it once.


NOTE: This bookmark is hardcoded to Brooklyn (which [anyone in the US can get
access to](https://bpl.bklynlibrary.org/patron_card/registration.aspx?ref=outofstate)! $50 annual fee) but you can change to whatever URL is used by your
local library.  I intend to update the script with a variable where users can enter their relevant URL.

As of 10/26/17, it handles few error cases.

- library\_book\_search.js = Pulls Amazon book/product title from detail page and searches the local library specified in the file.

NOTE: This bookmark is hardcoded to Loudoun County, Virginia which does -not- use the SIRSI system (common in older library systems). SIRSI is very tricky because they use a lot of cookies and no search data is in the URL/GET parameters.

