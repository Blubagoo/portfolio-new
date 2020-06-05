

const initialState = {
	data: [],
	view: 'home',
	education: [
		{
			company: 'Thinkful - Full Stack Flex Program',
			info: 'Learned industry best practices and practical software development standards with a focus on HTML5, CSS3, JavaScript, jQuery, Node.JS, React, Redux, and algorithms and data structures. I created and deployed mobile-first applications while learning new languages and frameworks by collaborating several hours every week with a senior web developer.',
			date: {
				start: '02/24/2018',
				end: '08/07/2018',
			}
		},
	],
	projects: [
		{
			projectName: 'The National Black Lawyers Top 100',
			projectURL: 'https://nbltop100.org/',
			projectDescription: 'I was soley responsible for this site from concept to launch.',
			projectImage: 'https://oneopinion.me/wp-content/uploads/2020/02/nbl.jpg',
			projectType: 'work',
		},
		{
			projectName: 'One Opinion Blog',
			projectURL: 'https://oneopinion.me/',
			projectDescription: 'This project was set out to build a blog to speak my mind about workplace ethics. Once set out though it took more shape into a "new engineer" community, focused on sharing knowledge.',
			projectImage: 'https://oneopinion.me/wp-content/uploads/2020/02/oneopinion.jpg',
			projectType: 'home',
		},
	],
	workExperience: [
		{
			company: 'Legal Associations Management',
			info: 'Full-Stack development in an AGILE environment using a mix of WP Builders, JavaScript, and CSS. Use of email marketing tools such as MailChimp and Marketing Cloud while creating outlook safe design. CRM Salesforce Development( Fonteva ). Use of modern white-hat SEO strategies to grow traffic organically.',
			title: 'Web Development Team Lead',
			date: {
				start:'01/22/19',
				end: '05/29/20',
			},
			bulletPoints: [
				'Generated upwards of $50,000 in ad revenue yearly as a system administrator of a large network of websites',
				'Designed and implemented concepts and software integrations as a web team liaison for all inter-departmental and customer-facing projects',
				'Developed a node.js server to authenticate and track digital badges being used, saving the company $25,000',
				'Leveraged React-Native to extend a Wordpress application to provide an iOS/Android experience for users',
				'Integrated Salesforce and Wordpress to eliminate redundant processes',
				'Mentored team member with non-technical background to be a junior WordPress developer'
			]
		},
	],
	homeArray: [
		{
			projectName: 'One Opinion Blog',
			projectURL: 'https://oneopinion.me/',
			projectDescription: 'This project was set out to build a blog to speak my mind about workplace ethics. Once set out though it took more shape into a "new engineer" community, focused on sharing knowledge.',
			projectImage: 'https://oneopinion.me/wp-content/uploads/2020/02/oneopinion.jpg',
			projectType: 'home',
		},
	],
	workArray: [
		{
			projectName: 'The National Black Lawyers Top 100',
			projectURL: 'https://nbltop100.org/',
			projectDescription: 'I was soley responsible for this site from concept to launch.',
			projectImage: 'https://oneopinion.me/wp-content/uploads/2020/02/nbl.jpg',
			projectType: 'work',
		},
		{
			projectName: 'Business Tort Top 10 Trial Lawyers Association',
			projectURL: 'https://bttla.org/',
			projectDescription: 'I was soley responsible for this site from concept to launch.',
			projectImage: 'https://oneopinion.me/wp-content/uploads/2020/02/bttla.png',
			projectType: 'work',
		},
		{
			projectName: 'National Trial Lawyers Summit Conference',
			projectURL: 'https://ntlsummit.com/',
			projectDescription: 'I was soley responsible for this site from concept to launch.',
			projectImage: 'https://oneopinion.me/wp-content/uploads/2020/02/summit-1.jpg',
			projectType: 'work',
		},
		{
			projectName: 'News.Law Mobile App',
			projectURL: 'https://apps.apple.com/us/app/news-law/id1477348016',
			projectDescription: 'I was responsible for this app from concept to launch.',
			projectImage: 'https://oneopinion.me/wp-content/uploads/2020/02/app-store.png',
			projectType: 'work',
		},
		{
			projectName: 'National Trial Lawyers Top 40 under 40 Trial Academy Bootcamp',
			projectURL: 'https://40under40.law/',
			projectDescription: 'I was responsible for this app from concept to launch.',
			projectImage: 'https://oneopinion.me/wp-content/uploads/2020/02/40u40.png',
			projectType: 'work',
		},
	]
}


export const appReducer = (state = initialState, action) => {
	console.log('reducing this action type', action.type, state);
	switch(action.type) {
		default:
			return state
	}
}