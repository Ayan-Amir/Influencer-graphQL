export default{
    methods:{
        timeStampToDate(timestamp) {
			const sec = parseInt(timestamp, 10);
			let month = Math.floor((sec % 31536000) / 2628000);
			let d = Math.floor(((sec % 31536000) % 2628000) / 86400);
			let h = Math.floor((((sec % 31536000) % 2628000) % 86400) / 3600);
			let m = Math.floor((((sec % 31536000) % 86400) % 3600) / 60);

			let monthDisplay =
				month > 0
					? month + (month == 1 ? ' month, ' : ' months, ')
					: '';
			let dDisplay = d > 0 ? d + (d == 1 ? ' day, ' : ' days, ') : '';
			let hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
			let mDisplay =
				m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes ') : '';
                
			return monthDisplay + dDisplay + hDisplay + mDisplay;
		},
        timeElapsed(timestamp){
            const sec = parseInt(timestamp, 10);
			let month = Math.floor((sec % 31536000) / 2628000);
			let d = Math.floor(((sec % 31536000) % 2628000) / 86400);
			let h = Math.floor((((sec % 31536000) % 2628000) % 86400) / 3600);
			let m = Math.floor((((sec % 31536000) % 86400) % 3600) / 60);

			let monthDisplay =
				month > 0
					? month + (month == 1 ? ' month ' : ' months ')
					: '';
			let dDisplay = d > 0 ? d + (d == 1 ? ' day, ' : ' days, ') : '';
			let hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
			let mDisplay =
				m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes ') : '';

            if(monthDisplay){
                return `${monthDisplay} Ago`;
            }
            else if(dDisplay){
                return `${dDisplay} Ago`;

            }
            else if(hDisplay){
                return `${hDisplay} Ago`;

            }
            else if(mDisplay){
                return `${mDisplay} Ago`;

            }
            else{
                return `Seconds Ago`;
            }
        },
        friendURL(title){
            let encodedUrl = title.toString().toLowerCase();

			encodedUrl = encodedUrl.split(/\&+/).join('-and-');

			encodedUrl = encodedUrl.split(/[^a-z0-9]/).join('-');

			encodedUrl = encodedUrl.split(/-+/).join('-');

			encodedUrl = encodedUrl.trim('-');

			return encodedUrl;
        }
    }
    
}