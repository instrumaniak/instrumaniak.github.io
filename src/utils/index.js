/**
 * Common utility functions
 */

/**
 * Get Formatted date from string used in date for blog posts
 * @param  {String} dateString Input: "2018-02-12"
 * @return {String}            Output: "12 Feb, 2018"
 */
 const getFormattedDate = dateString  => {
  const [ , month, day, year ] = new Date(dateString).toDateString().split(' ')
  return  `${day} ${month}, ${year}`
 }


exports.getPostData = slug => {
  // extract date and post slug from file slug for blog posts
  // from: "/2018-12-12-hello-world/" --> date: "2018-12-12", slug: "/blog/hello-world/"

  // const [ , date, title ] = slug.match(/^\/([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)\/$/)
  // RegExp isn't working, throwing erros
  // so using Array & String manipulation to extract data

   full_slug = slug.split('-')
   date = full_slug.slice(0, 3).join('-').replace("/","")
   _slug = full_slug.slice(3).join('-')

   return {
    postSlug: `/blog/${_slug}`,
    postDate: getFormattedDate(date), // for displaying date in posts
    rawDate: date // for sorting posts
   }
}
