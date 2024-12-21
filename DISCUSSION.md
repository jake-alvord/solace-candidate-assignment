### Changes

#### Frontend

While I was tempted to pull in a component library like Material in order to speed up the styling and improve it even further, I thought that would have been circumventing the point of the code challenge a bit. This would have definitely sped up development by giving me things like a Card, Search Bar, Typography, and Pagination out of the box. In the end I made a few of those components myself out of raw html elements and some tailwind styling. So while I think I improved the design overall, I know that there is a fair amount of room for improvement.

Overall, spent a fair amount of time on the frontend, generally tried to optimize, fix, and stylize a few things:

- changed project structure to land on a new subpage (`Advocates`), this included simplify the root home and layout and forcing the landing page to be on the new subpage instead
- making most components SSR with the exlcusion of a few (search, error)
- simple style changes like adding in a header, changing the font, cleaning up the styles around the results and search sections
- changed advocate result to be card based
- changed search to be paramter based - this will ensure searches persist through bookmarks and refreshes
- added simple loading and error states
- made specialites "pills" instead of simple text
- made the frontend mobile friendly and responsive
- fix and add types to non-typed components

Improvements I would like to implement if given more time:

- add more general styling fixes and improvements
- implement pagination on the frontend - the bones for it are there but a page count, results count, and page switch feature are still needed
- add better loading and error states (like a skeleton)
- add frontend tests - i would have liked to add a few but felt it would have dug into my time too much

#### Backend

- Seeded and switched to Postgres for backend data provider
- Added pagination and search query on advocate search endpoint
- Added small error handling

I think this is an area with a lot of room for improvement if pushed a full production project though:

- performance - there is already frontend caching going on but I think that if we are searching through a large provider database then a lot of methods could be used to enhance performance beyond pagination - caching common queries, addding in indexes to commonly queried fields, adding in filters to specialties to reduce search strain etc.
- move phone number to be a string - numbers do not usually work for phone numbers for a variety of reasons like size, format with country code, etc.
- sanitize inputs a little bit better to ensure it's a little more secure (e.g. avoid sql injection)

Overall a fun project! Was easy to get up and running and was fun to start styling and editing within a few minutes.
