# To Do:

- Make tags look more like tags?

- List project alphabetically rather than chronologically @done
- Add a link to the previous and next posts and/or projects
- redirect from homesteading.me?
- Look into breadcrumbs
- Alias `posts` and `projects` to `post` and `project`, respectively, and update the nav links to the plural form
- Host the site's images somewhere else to reduce upload times
- Deploy to AWS?
- Register homesteading.website?

what about a conditional `links` partial that checks if running in development or production modes? Development would include all the Bass CSS lib files and my own CSS components individually. Production would link only the full compiled output. npm scripts would trigger compiling the CSS, a clean build of the site, and a browsersync preview checking public.

## Do:
- `npm install basscss@8.0.1`

# Arrows
&larr; and &rarr;
&lsaquo; and &rsaquo; (›)
&#10087;


- Set open graph metadata on templates.
- Add "View source" and "View site" labels to projects if they have those values.
- Learn how to set a syntax by project (Sublime/Atom)
- Switch homepage to just display the most recent (single) piece of content?
- Add categories to the projects and tags to the posts
- Configure a CSS compiler
- Add pagination to the posts (archive) page
- Style subsequent paragraphs to indent
- Style anchors to hide text underline on hover
- Look into `publishDate` to list the posts rather than raw `date` field


# Done:
- Set alias from `/post/practical-ux` to `/post/fuel-gauges-and-practical-ux`
- Set the link color to Material's blue
- Figure out a better way to loop by content type, something more like `range .Data.Pages.Post` rather than `range where .Data.Pages "Type" "post"`
- Figure out why dates aren't formatting correctly -- apparently, you _need_ to use January 2, 2006 as the date string to format as anything else fails
- Figure out how to make a /projects loop the "project" typed pages and a /posts loop the "post" typed pages (an archive, essentially)
