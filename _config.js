module.exports = {
  /** Site MetaData (Required all)*/
  title: `Davont`, // (* Required)
  description: `Web Front-end Developer. / javascript, react ...`, // (* Required)
  author: `Davont`, // (* Required)
  language: 'en', // (* Required) html lang, ex. 'en' | 'en-US' | 'ko' | 'ko-KR' | ...
  siteUrl: 'https://davontt.com', // (* Required)
  // ex.'https://junhobaik.github.io'
  // ex.'https://junhobaik.github.io/' << X, Do not enter "/" at the end.

  /** Header */
  profileImageFileName: 'header.jpeg', // include filename extension ex.'profile.jpg'
  // The Profile image file is located at path "./images/"
  // If the file does not exist, it is replaced by a random image.

  /** Home > Bio information*/
  comment: '一枚软件开发人员，死磕前端，偶尔写些东西。',
  name: '',
  company: '',
  location: '南京',
  email: 'zhang980511@outlook.com',
  website: '', // ex.'https://junhobaik.github.io'
  linkedin: '', // ex.'https://www.linkedin.com/in/junho-baik-16073a19ab'
  facebook: '', // ex.'https://www.facebook.com/zuck' or 'https://www.facebook.com/profile.php?id=000000000000000'
  instagram: '', // ex.'https://www.instagram.com/junhobaik'
  github: 'https://github.com/davont', // ex.'https://github.com/junhobaik'

  /** Post */
  enablePostOfContents: true, // TableOfContents activation (Type of Value: Boolean. Not String)
  disqusShortname: '', // comments (Disqus sort-name)
  enableSocialShare: true, // Social share icon activation (Type of Value: Boolean. Not String)

  /** Optional */
  googleAnalytics: '', // Google Analytics TrackingID. ex.'UA-123456789-0'
  googleSearchConsole: '', // content value in HTML tag of google search console ownership verification. ex.'w-K42k14_I4ApiQKuVPbCRVV-GxlrqWxYoqO94KMbKo'
  googleAdsenseSlot: '', // Google Adsense Slot. ex.'5214956675'
  googleAdsenseClient: '' // Google Adsense Client. ex.'ca-pub-5001380215831339'
  // Please correct the adsense client number(ex.5001380215831339) in the './static/ads.txt' file.
}
