
//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = 'https://fervent-payne-fceded.netlify.app/'

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://fervent-payne-fceded.netlify.app/abonnemang</loc>
     </url>
     <url>
       <loc>https://fervent-payne-fceded.netlify.app/branscher</loc>
     </url>
     <url>
       <loc>https://fervent-payne-fceded.netlify.app/about</loc>
     </url>
     <url>
       <loc>https://fervent-payne-fceded.netlify.app/kontakta</loc>
     </url>
     ${posts
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL)
  const posts = await request.json()

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts)

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default SiteMap

{/* <url>
<loc>${`${BASE_URL}`}</loc>
</url>
<url>
<loc>${`${BASE_URL}abonnemang`}</loc>
</url>
<url>
<loc>${`${BASE_URL}branscher`}</loc>
</url>
<url>
<loc>${`${BASE_URL}about`}</loc>
</url>
<url>
<loc>${`${BASE_URL}kontakta`}</loc>
</url> */}